# 🍕 Australian Pizza Outlet

> **Next.js Frontend + Squarespace Backend** - A modern online ordering platform for your Australian pizza business

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Squarespace](https://img.shields.io/badge/Squarespace-API-000000)](https://developers.squarespace.com/)

---

## 📖 Project Overview

This is a **headless e-commerce** solution that combines:

- **Next.js** for a blazing-fast, SEO-friendly customer frontend
- **Squarespace** for powerful backend management (inventory, orders, payments)

Perfect for Australian pizza outlets that want:

- 🎨 Complete control over the website design
- 📦 Easy inventory management through Squarespace
- 💳 Secure payment processing (Stripe, PayPal)
- 📧 Automated order confirmations
- 📱 Mobile-first responsive design
- 🇦🇺 Australian localization (AUD, GST, postcodes)

---

## ✨ Features

### Customer-Facing

- 🍕 Browse full pizza menu with high-quality images
- 🔍 Search and filter by dietary preferences (vegan, vegetarian, gluten-free)
- 🛒 Shopping cart with real-time updates
- 📝 Customizable orders (sizes, toppings)
- 📍 Delivery or pickup options
- 💰 Transparent pricing with GST included
- ✅ Order tracking and confirmation

### Business Management (via Squarespace)

- 📊 Centralized order management
- 📦 Inventory tracking and low-stock alerts
- 💵 Integrated payment processing
- 📧 Automated customer emails
- 📈 Sales analytics and reporting
- 👥 Customer database
- 🌐 Domain and SSL management

### Australian-Specific

- 💲 Pricing in AUD
- 📝 10% GST calculation
- 📮 4-digit postcode validation
- 📞 +61 phone number formatting
- 🕐 AEST/AEDT timezone support

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Squarespace account with Commerce enabled
- Squarespace API key ([Get it here](https://account.squarespace.com/settings/developer))

### Installation

1. **Clone and install dependencies:**

   ```bash
   cd "/Users/harsh/Developer/Personal Projects/Ikneed Pizza/my-app"
   npm install
   ```

2. **Set up environment variables:**

   - Create a `.env.local` file in the root directory
   - See [ENV_SETUP.md](./ENV_SETUP.md) for the template
   - Add your Squarespace API credentials

3. **Configure Squarespace:**

   - Follow the detailed setup guide in [QUICK_START.md](./QUICK_START.md)
   - Add your pizza products to Squarespace
   - Configure payment and shipping settings

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)
   - Test the API at [http://localhost:3000/api/products](http://localhost:3000/api/products)

---

## 📚 Documentation

| Document                                               | Description                           |
| ------------------------------------------------------ | ------------------------------------- |
| **[QUICK_START.md](./QUICK_START.md)**                 | 🚀 Step-by-step setup guide           |
| **[IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)** | 📋 Full development roadmap (6 weeks) |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)**               | 🏗️ System architecture & data flow    |
| **[ENV_SETUP.md](./ENV_SETUP.md)**                     | 🔑 Environment variables reference    |

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 16.0 (App Router)
- **UI Library:** React 19.2
- **Styling:** Tailwind CSS 4.0
- **State Management:** Zustand
- **Data Fetching:** SWR + Axios
- **Notifications:** React Hot Toast
- **Components:** Headless UI + Heroicons

### Backend & Services

- **CMS & Commerce:** Squarespace Commerce API
- **Payments:** Stripe (via Squarespace)
- **Hosting:** Vercel (frontend) + Squarespace (backend)
- **Domain:** Your .com.au domain

---

## 📁 Project Structure

```
my-app/
├── src/
│   ├── app/
│   │   ├── api/              # API routes (server-side)
│   │   │   ├── products/     # Fetch from Squarespace
│   │   │   ├── orders/       # Create orders
│   │   │   └── inventory/    # Check stock
│   │   ├── menu/             # Menu pages (to be built)
│   │   ├── cart/             # Shopping cart (to be built)
│   │   └── checkout/         # Checkout flow (to be built)
│   ├── components/           # React components (to be built)
│   ├── lib/
│   │   ├── squarespace.js    # ✅ Squarespace API client
│   │   └── utils.js          # ✅ Utility functions
│   └── store/
│       └── cartStore.js      # ✅ Zustand cart store
├── public/                   # Static assets
└── .env.local               # Environment variables (create this!)
```

---

## 🎯 Current Status

### ✅ Completed

- [x] Project structure set up
- [x] Dependencies installed
- [x] Squarespace API integration
- [x] Cart state management
- [x] Utility functions
- [x] API routes (/api/products, /api/orders, /api/inventory)

### 🔲 Next Steps (Phase 2)

- [ ] Set up `.env.local` with your Squarespace credentials
- [ ] Add products to Squarespace
- [ ] Build frontend pages (Homepage, Menu, Product Details)
- [ ] Create UI components (Header, Footer, Pizza Cards)
- [ ] Design premium Australian-themed UI
- [ ] Mobile responsiveness
- [ ] Testing & deployment

---

## 🧪 Testing the API

Once you've added your Squarespace API credentials:

```bash
# Test products endpoint
curl http://localhost:3000/api/products

# Test single product
curl http://localhost:3000/api/products/YOUR_PRODUCT_ID

# Test inventory
curl http://localhost:3000/api/inventory?variantId=YOUR_VARIANT_ID
```

---

## 🚀 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Backend (Squarespace)

- Already hosted by Squarespace
- No additional deployment needed

---

## 📞 Support

If you encounter issues:

1. Check [QUICK_START.md](./QUICK_START.md) for setup instructions
2. Review [ARCHITECTURE.md](./ARCHITECTURE.md) for system understanding
3. Verify your Squarespace API credentials
4. Check console logs for errors

---

## 📝 License

This project is for commercial use by your pizza outlet.

---

## 🙏 Acknowledgments

- **Next.js** by Vercel
- **Squarespace Commerce API**
- **Tailwind CSS** for styling
- **Zustand** for state management

---

**Ready to build an amazing pizza ordering experience! 🍕🇦🇺**

See [QUICK_START.md](./QUICK_START.md) to get started!
