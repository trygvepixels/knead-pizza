# System Architecture - Pizza Outlet (Next.js + Squarespace)

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         CUSTOMER                                 │
│                     (Web Browser)                                │
└────────────────┬────────────────────────────────────────────────┘
                 │
                 │ HTTPS
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                   NEXT.JS FRONTEND                               │
│                  (Deployed on Vercel)                            │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Pages                                                    │  │
│  │  ├── / (Homepage)                                        │  │
│  │  ├── /menu (All Pizzas)                                  │  │
│  │  ├── /menu/[slug] (Pizza Details)                        │  │
│  │  ├── /cart (Shopping Cart)                               │  │
│  │  ├── /checkout (Order Form)                              │  │
│  │  └── /order-confirmation (Success Page)                  │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  State Management (Zustand)                              │  │
│  │  └── Cart Store (Persisted to localStorage)              │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  API Routes (Server-Side)                                │  │
│  │  ├── /api/products (GET all products)                    │  │
│  │  ├── /api/products/[id] (GET single product)             │  │
│  │  ├── /api/orders (POST create order, GET order)          │  │
│  │  └── /api/inventory (GET stock availability)             │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Squarespace API Client (lib/squarespace.js)             │  │
│  │  └── Axios HTTP Client with Authentication               │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────┬────────────────────────────────────────────────┘
                 │
                 │ API Calls (HTTPS)
                 │ Authorization: Bearer {API_KEY}
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                   SQUARESPACE BACKEND                            │
│               (https://api.squarespace.com/1.0)                  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Commerce API Endpoints                                   │  │
│  │  ├── /commerce/products (Product catalog)                │  │
│  │  ├── /commerce/inventory (Stock management)              │  │
│  │  └── /commerce/orders (Order processing)                 │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Squarespace Dashboard                                    │  │
│  │  ├── Product Management (Add/Edit pizzas)                │  │
│  │  ├── Inventory Management (Stock levels)                 │  │
│  │  ├── Order Management (View/Process orders)              │  │
│  │  ├── Payment Processing (Stripe, PayPal)                 │  │
│  │  ├── Customer Management                                  │  │
│  │  └── Email Notifications                                  │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Domain & Hosting                                         │  │
│  │  └── your-pizza-site.com.au                              │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. **Viewing Menu (Customer → Squarespace)**

```
Customer visits /menu
    │
    ├─→ Next.js page loads
    │       │
    │       ├─→ Calls /api/products
    │       │       │
    │       │       ├─→ squarespace.js.getProducts()
    │       │       │       │
    │       │       │       └─→ GET https://api.squarespace.com/1.0/commerce/products
    │       │       │
    │       │       └─→ Returns products (with SWR caching)
    │       │
    │       └─→ Renders menu grid with product cards
    │
    └─→ Customer sees pizzas with prices, images, etc.
```

### 2. **Adding to Cart (Client-Side)**

```
Customer clicks "Add to Cart"
    │
    ├─→ cartStore.addToCart(product, options, quantity)
    │       │
    │       ├─→ Updates Zustand state
    │       │
    │       └─→ Saves to localStorage
    │
    └─→ Cart icon updates with new count
```

### 3. **Placing Order (Customer → Squarespace)**

```
Customer clicks "Place Order" on checkout
    │
    ├─→ Frontend validates form (address, phone, etc.)
    │       │
    │       ├─→ Calls POST /api/orders with order data
    │       │       │
    │       │       ├─→ squarespace.js.createOrder(orderData)
    │       │       │       │
    │       │       │       └─→ POST https://api.squarespace.com/1.0/commerce/orders
    │       │       │               │
    │       │       │               ├─→ Squarespace processes payment
    │       │       │               │
    │       │       │               ├─→ Creates order in dashboard
    │       │       │               │
    │       │       │               ├─→ Sends confirmation email
    │       │       │               │
    │       │       │               └─→ Returns order ID & confirmation
    │       │       │
    │       │       └─→ Returns success to frontend
    │       │
    │       └─→ Redirects to /order-confirmation
    │
    └─→ Customer sees "Order Placed!" with order number
```

### 4. **Order Management (Staff → Squarespace)**

```
Staff logs into Squarespace Dashboard
    │
    ├─→ Views all orders in real-time
    │
    ├─→ Updates order status:
    │   - Preparing
    │   - Out for Delivery / Ready for Pickup
    │   - Completed
    │
    └─→ Customer receives status update emails
```

## Security & Best Practices

```
┌─────────────────────────────────────────────────────────────────┐
│  SECURITY LAYERS                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. API Key Protection                                           │
│     └── Never exposed on frontend                               │
│     └── Only used in API routes (server-side)                   │
│                                                                  │
│  2. Environment Variables                                        │
│     └── Stored in .env.local (gitignored)                       │
│     └── NEXT_PUBLIC_* for client-safe values only               │
│                                                                  │
│  3. Input Validation                                             │
│     └── Validate all customer inputs                            │
│     └── Sanitize data before sending to Squarespace             │
│                                                                  │
│  4. Payment Security                                             │
│     └── Handled entirely by Squarespace                         │
│     └── PCI DSS compliant                                       │
│                                                                  │
│  5. HTTPS Everywhere                                             │
│     └── SSL/TLS for all connections                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Technology Stack Summary

| Layer                  | Technology               | Purpose                              |
| ---------------------- | ------------------------ | ------------------------------------ |
| **Frontend**           | Next.js 14+              | Server-side rendering, routing       |
| **UI Framework**       | React 19                 | Component-based UI                   |
| **Styling**            | Tailwind CSS             | Utility-first CSS                    |
| **State Management**   | Zustand                  | Cart & app state                     |
| **Data Fetching**      | SWR                      | Client-side data fetching with cache |
| **HTTP Client**        | Axios                    | API requests                         |
| **Backend/CMS**        | Squarespace              | Headless commerce platform           |
| **Inventory**          | Squarespace              | Product & stock management           |
| **Payments**           | Stripe (via Squarespace) | Payment processing                   |
| **Email**              | Squarespace              | Order confirmations                  |
| **Hosting (Frontend)** | Vercel                   | Serverless deployment                |
| **Domain**             | Your .com.au domain      | Australian domain                    |

## Performance Optimizations

```
┌─────────────────────────────────────────────────────────────────┐
│  PERFORMANCE STRATEGIES                                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. SWR Data Caching                                             │
│     └── Cache products in memory                                │
│     └── Revalidate on focus/reconnect                           │
│                                                                  │
│  2. Image Optimization                                           │
│     └── Next.js Image component                                 │
│     └── Lazy loading                                            │
│     └── WebP format                                             │
│                                                                  │
│  3. Code Splitting                                               │
│     └── Dynamic imports for heavy components                    │
│     └── Route-based splitting                                   │
│                                                                  │
│  4. Static Generation                                            │
│     └── Pre-render public pages at build time                   │
│     └── ISR (Incremental Static Regeneration) for menu          │
│                                                                  │
│  5. API Response Caching                                         │
│     └── Cache product data for 5-10 minutes                     │
│     └── Fresh data for inventory/orders                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  PRODUCTION DEPLOYMENT                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Frontend (Next.js)                                              │
│  ├── Host: Vercel                                               │
│  ├── Domain: your-pizza-site.com.au                             │
│  ├── SSL: Auto-provisioned by Vercel                            │
│  ├── CDN: Global edge network                                   │
│  └── Auto-scaling: Serverless functions                         │
│                                                                  │
│  Backend (Squarespace)                                           │
│  ├── Managed by Squarespace                                     │
│  ├── API: api.squarespace.com                                   │
│  ├── Admin: account.squarespace.com                             │
│  └── Uptime: 99.9% SLA                                          │
│                                                                  │
│  CI/CD Pipeline                                                  │
│  ├── Git push to main branch                                    │
│  ├── Vercel auto-builds                                         │
│  ├── Runs build checks                                          │
│  └── Deploys to production                                      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Australian-Specific Features

```
┌─────────────────────────────────────────────────────────────────┐
│  LOCALIZATION FOR AUSTRALIA                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Currency: AUD ($)                                               │
│  Tax: GST 10% (automatically calculated)                         │
│  Postcode: 4-digit validation (e.g., 3000)                       │
│  Phone: +61 format support                                       │
│  Timezone: AEST/AEDT                                             │
│  Date Format: DD/MM/YYYY                                         │
│  Payment: Stripe (Australia), Afterpay support                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

This architecture provides a scalable, secure, and maintainable solution for your pizza outlet!
