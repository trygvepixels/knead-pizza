# 🍕 Australian Pizza Outlet - Implementation Plan

## Architecture: Next.js Frontend + Squarespace Backend

---

## 🎯 Overview

This project uses **Squarespace** as a headless CMS and commerce platform, with **Next.js** as the customer-facing frontend.

### Technology Stack
- **Frontend**: Next.js 14+ (React, App Router)
- **Backend/CMS**: Squarespace
- **Styling**: Tailwind CSS / CSS Modules
- **Deployment**: Vercel (frontend) / Squarespace (backend)
- **APIs**: Squarespace Commerce API

---

## 📋 Phase 1: Squarespace Setup (Week 1)

### 1.1 Configure Squarespace Commerce
- [ ] Log into your Squarespace account
- [ ] Enable Commerce features
- [ ] Set up payment processors (for Australian market):
  - Stripe (recommended for Australia)
  - PayPal
  - Square (if available)
- [ ] Configure tax settings for Australian GST (10%)
- [ ] Set up shipping/delivery zones for Australian addresses

### 1.2 Create Product Structure for Pizza Menu
- [ ] **Product Categories**:
  - Pizza (Traditional, Gourmet, Vegetarian, Vegan)
  - Sides (Garlic Bread, Wings, Salads)
  - Drinks (Soft Drinks, Juices)
  - Desserts
  - Meal Deals

- [ ] **Product Fields for Each Pizza**:
  - Name
  - Description
  - Price (with size variants: Small, Medium, Large, Family)
  - Images (high-quality pizza photos)
  - SKU
  - Inventory count
  - Tags (spicy, vegetarian, vegan, gluten-free, etc.)
  - Toppings (as product variants or custom fields)

### 1.3 Set Up Squarespace API Access
- [ ] Navigate to: Settings → Advanced → API Keys
- [ ] Generate API Key
- [ ] Note down:
  - API Key
  - Site Identifier
  - Commerce API endpoint
- [ ] Document API permissions (read products, create orders, etc.)

### 1.4 Configure Domain
- [ ] Point your custom Australian domain to Squarespace
- [ ] Set up SSL certificate
- [ ] Configure DNS settings (if using external domain for Next.js)

---

## 📋 Phase 2: Next.js Frontend Development (Week 2-3)

### 2.1 Project Initialization
```bash
# Already initialized in /Users/harsh/Developer/Personal Projects/Ikneed Pizza/my-app
cd my-app
npm install
```

### 2.2 Install Required Dependencies
```bash
npm install axios swr
npm install @headlessui/react @heroicons/react
npm install react-hot-toast
npm install next-auth (if user authentication needed)
npm install zustand (for state management - cart)
```

### 2.3 Environment Variables Setup
Create `.env.local`:
```env
# Squarespace API
NEXT_PUBLIC_SQUARESPACE_API_KEY=your_api_key
NEXT_PUBLIC_SQUARESPACE_SITE_ID=your_site_id
SQUARESPACE_API_URL=https://api.squarespace.com/1.0

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-pizza-site.com.au
NEXT_PUBLIC_BUSINESS_NAME=Your Pizza Outlet Name
NEXT_PUBLIC_BUSINESS_PHONE=+61_xxx_xxx_xxx
```

### 2.4 Folder Structure
```
my-app/
├── src/
│   ├── app/
│   │   ├── page.jsx                 # Homepage
│   │   ├── menu/
│   │   │   └── page.jsx             # Menu page (all pizzas)
│   │   ├── menu/[slug]/
│   │   │   └── page.jsx             # Individual pizza details
│   │   ├── cart/
│   │   │   └── page.jsx             # Cart page
│   │   ├── checkout/
│   │   │   └── page.jsx             # Checkout page
│   │   ├── order-confirmation/
│   │   │   └── page.jsx             # Order success page
│   │   ├── api/
│   │   │   ├── products/
│   │   │   │   └── route.js         # Fetch products from Squarespace
│   │   │   ├── orders/
│   │   │   │   └── route.js         # Create orders in Squarespace
│   │   │   └── inventory/
│   │   │       └── route.js         # Check stock availability
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── menu/
│   │   │   ├── PizzaCard.jsx
│   │   │   ├── CategoryFilter.jsx
│   │   │   ├── PizzaCustomizer.jsx  # Size, toppings selection
│   │   │   └── MenuGrid.jsx
│   │   ├── cart/
│   │   │   ├── CartItem.jsx
│   │   │   ├── CartSummary.jsx
│   │   │   └── CartDrawer.jsx
│   │   ├── checkout/
│   │   │   ├── OrderForm.jsx
│   │   │   ├── DeliveryOptions.jsx
│   │   │   └── PaymentSection.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Badge.jsx
│   │       └── Loading.jsx
│   ├── lib/
│   │   ├── squarespace.js           # Squarespace API client
│   │   └── utils.js
│   ├── store/
│   │   └── cartStore.js             # Zustand cart state
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   ├── icons/
│   └── videos/
└── .env.local
```

---

## 📋 Phase 3: Core Features Implementation (Week 3-4)

### 3.1 Squarespace API Integration

**File: `src/lib/squarespace.js`**
- Fetch all products (menu items)
- Get product by ID/slug
- Check inventory availability
- Create orders
- Update order status
- Handle webhooks (for order updates)

### 3.2 Key Pages to Build

#### Homepage (`src/app/page.jsx`)
- Hero section with Australian pizza imagery
- Featured pizzas carousel
- Special offers/deals
- Quick order CTA
- Location & hours
- Customer testimonials

#### Menu Page (`src/app/menu/page.jsx`)
- Grid of all pizzas
- Category filters (Traditional, Gourmet, Vegan, etc.)
- Search functionality
- Sort by: Price, Popularity, Name
- "Add to Cart" quick action

#### Product Detail Page (`src/app/menu/[slug]/page.jsx`)
- Large pizza image gallery
- Description & ingredients
- Size selection (Small/Medium/Large/Family)
- Extra toppings customization
- Quantity selector
- "Add to Cart" button
- Related pizzas

#### Cart Page (`src/app/cart/page.jsx`)
- List of cart items
- Quantity adjustment
- Remove items
- Order summary (subtotal, GST, delivery fee)
- Checkout CTA

#### Checkout Page (`src/app/checkout/page.jsx`)
- Customer information form
- Delivery/Pickup selection
- Delivery address (with Australian postcode validation)
- Payment method selection
- Order notes
- Submit order to Squarespace

### 3.3 State Management (Cart)

**File: `src/store/cartStore.js`**
```javascript
// Zustand store for cart management
- addToCart(product, options)
- removeFromCart(itemId)
- updateQuantity(itemId, quantity)
- clearCart()
- calculateTotal()
```

---

## 📋 Phase 4: Australian-Specific Features (Week 4)

### 4.1 Localization
- [ ] Currency: Display prices in AUD ($)
- [ ] GST: Calculate and display 10% GST
- [ ] Postcodes: Australian postcode validation
- [ ] Phone: +61 format validation
- [ ] Timezone: AEST/AEDT handling

### 4.2 Delivery Integration
- [ ] Delivery zones (by postcode)
- [ ] Delivery fees based on distance
- [ ] Estimated delivery time
- [ ] Pickup option

### 4.3 Payment Methods
- [ ] Credit/Debit cards (via Squarespace/Stripe)
- [ ] PayPal
- [ ] Cash on delivery (optional)
- [ ] Afterpay (optional, popular in Australia)

---

## 📋 Phase 5: Design & UX (Week 5)

### 5.1 Design System
- [ ] Australian-themed color palette
- [ ] Typography (mobile-friendly)
- [ ] Component library
- [ ] Responsive design (mobile-first)

### 5.2 Key Design Elements
- [ ] Vibrant pizza imagery
- [ ] Easy navigation
- [ ] Quick add to cart
- [ ] Sticky cart icon
- [ ] Loading states
- [ ] Empty states
- [ ] Error handling
- [ ] Success messages (toast notifications)

### 5.3 Accessibility
- [ ] WCAG 2.1 compliance
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] High contrast mode

---

## 📋 Phase 6: Testing & Launch (Week 6)

### 6.1 Testing Checklist
- [ ] Test product fetching from Squarespace
- [ ] Test order creation in Squarespace
- [ ] Test cart functionality
- [ ] Test checkout flow
- [ ] Test payment processing
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Test with different postcodes
- [ ] Test inventory updates

### 6.2 Pre-Launch
- [ ] Set up Google Analytics
- [ ] Set up Meta Pixel (Facebook/Instagram)
- [ ] Configure SEO meta tags
- [ ] Create sitemap
- [ ] Set up robots.txt
- [ ] Performance optimization
- [ ] Image optimization

### 6.3 Deployment
- [ ] Deploy Next.js to Vercel
- [ ] Connect custom domain
- [ ] Configure environment variables on Vercel
- [ ] Set up CI/CD pipeline
- [ ] Monitor with error tracking (Sentry)

### 6.4 Post-Launch
- [ ] Monitor Squarespace order dashboard
- [ ] Train staff on Squarespace admin
- [ ] Set up order notification emails
- [ ] Customer support setup

---

## 🔧 Technical Integration Details

### Squarespace API Endpoints

```javascript
// Get all products
GET https://api.squarespace.com/1.0/commerce/products

// Get product by ID
GET https://api.squarespace.com/1.0/commerce/products/{productId}

// Get inventory
GET https://api.squarespace.com/1.0/commerce/inventory

// Create order
POST https://api.squarespace.com/1.0/commerce/orders

// Update order
PATCH https://api.squarespace.com/1.0/commerce/orders/{orderId}
```

### Authentication
```javascript
headers: {
  'Authorization': `Bearer ${SQUARESPACE_API_KEY}`,
  'Content-Type': 'application/json'
}
```

---

## 📊 Success Metrics

- [ ] Page load time < 3 seconds
- [ ] Mobile responsiveness score > 95
- [ ] Successful order completion rate > 80%
- [ ] Zero inventory sync errors
- [ ] Customer satisfaction > 4.5/5

---

## 🚨 Important Considerations

### 1. **Squarespace API Limitations**
- Check API rate limits
- Implement caching strategy (use SWR for data fetching)
- Handle API errors gracefully

### 2. **Inventory Sync**
- Real-time or near-real-time sync
- Handle out-of-stock scenarios
- Prevent overselling

### 3. **Order Management**
- Squarespace admin will be the source of truth
- Train staff on Squarespace dashboard
- Set up order notification webhooks

### 4. **Performance**
- Cache product data
- Optimize images (WebP format)
- Use Next.js Image component
- Implement lazy loading

### 5. **Security**
- Never expose API keys on frontend
- Use API routes for sensitive operations
- Implement CSRF protection
- Sanitize user inputs

---

## 📞 Support & Resources

### Squarespace Resources
- [Squarespace Commerce API Documentation](https://developers.squarespace.com/commerce-apis)
- [Squarespace Developer Portal](https://developers.squarespace.com/)

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Commerce Examples](https://vercel.com/templates/next.js/nextjs-commerce)

---

## 🎯 Next Steps

1. **Immediate**: Set up Squarespace API credentials
2. **Today**: Initialize Next.js project structure
3. **This Week**: Build core API integration
4. **Next Week**: Build frontend pages
5. **Week 3-4**: Testing and refinement
6. **Week 5-6**: Launch preparation

---

**Created**: December 12, 2024
**Project**: Australian Pizza Outlet Website
**Stack**: Next.js + Squarespace Headless Commerce
