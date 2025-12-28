# 🍕 Quick Start Guide - Australian Pizza Outlet

## ✅ What's Been Set Up

### 1. **Project Structure Created**

```
my-app/
├── src/
│   ├── app/
│   │   └── api/
│   │       ├── products/
│   │       │   ├── route.js ✅
│   │       │   └── [id]/route.js ✅
│   │       ├── orders/route.js ✅
│   │       └── inventory/route.js ✅
│   ├── lib/
│   │   ├── squarespace.js ✅ (API Client)
│   │   └── utils.js ✅ (Utility functions)
│   └── store/
│       └── cartStore.js ✅ (Cart state management)
```

### 2. **Dependencies Installed** ✅

- axios (HTTP client)
- swr (Data fetching)
- zustand (State management)
- react-hot-toast (Notifications)
- @headlessui/react (UI components)
- @heroicons/react (Icons)

---

## 🚀 Next Steps - What YOU Need to Do

### Step 1: Set Up Squarespace API Credentials

1. **Login to your Squarespace account**

   - Go to: https://account.squarespace.com/

2. **Navigate to API Keys**

   - Settings → Advanced → API Keys
   - Or direct link: https://account.squarespace.com/settings/developer

3. **Generate an API Key**

   - Click "Generate Key"
   - Give it a name like "Pizza Website API"
   - Select permissions:
     - ✅ Read products
     - ✅ Create orders
     - ✅ Read inventory
     - ✅ Update orders

4. **Copy the following information:**
   - API Key
   - Site ID (usually found in your Squarespace URL)

### Step 2: Create `.env.local` File

1. In your project root (`/Users/harsh/Developer/Personal Projects/Ikneed Pizza/my-app/`), create a file named `.env.local`

2. Add this content (replace with YOUR actual values):

```env
# Squarespace API - REPLACE THESE!
NEXT_PUBLIC_SQUARESPACE_API_KEY=sq0api-YOUR_API_KEY_HERE
NEXT_PUBLIC_SQUARESPACE_SITE_ID=your-site-id-here
SQUARESPACE_API_URL=https://api.squarespace.com/1.0

# Your Business Info - CUSTOMIZE THESE!
NEXT_PUBLIC_SITE_URL=https://your-pizza-site.com.au
NEXT_PUBLIC_BUSINESS_NAME=Your Pizza Outlet Name
NEXT_PUBLIC_BUSINESS_PHONE=+61 XXX XXX XXX
NEXT_PUBLIC_BUSINESS_EMAIL=info@your-pizza-site.com.au
NEXT_PUBLIC_BUSINESS_ADDRESS=123 Pizza Street, Melbourne VIC 3000

# Delivery Settings - CUSTOMIZE AS NEEDED
NEXT_PUBLIC_DELIVERY_FEE=5.00
NEXT_PUBLIC_FREE_DELIVERY_THRESHOLD=30.00
NEXT_PUBLIC_GST_RATE=0.10

# Features
NEXT_PUBLIC_ENABLE_PICKUP=true
NEXT_PUBLIC_ENABLE_DELIVERY=true
```

### Step 3: Set Up Products in Squarespace

1. **Go to Squarespace Dashboard → Commerce → Inventory**

2. **Add your pizza products** with these details:

   **Example Product Structure:**

   ```
   Product Name: Margherita Pizza
   Description: Classic tomato sauce, mozzarella, fresh basil
   Categories: Pizza > Traditional

   Variants (Sizes):
   - Small: $12.00 (SKU: MARG-S)
   - Medium: $16.00 (SKU: MARG-M)
   - Large: $20.00 (SKU: MARG-L)
   - Family: $28.00 (SKU: MARG-F)

   Tags: vegetarian, popular

   Images: Upload high-quality pizza photos

   Inventory: Set stock quantity or mark as unlimited
   ```

3. **Recommended Categories:**

   - Traditional Pizzas
   - Gourmet Pizzas
   - Vegetarian Pizzas
   - Vegan Pizzas
   - Sides
   - Drinks
   - Desserts
   - Meal Deals

4. **Recommended Tags:**
   - vegetarian
   - vegan
   - gluten-free
   - spicy
   - new
   - popular
   - best-seller

### Step 4: Configure Squarespace Commerce Settings

1. **Payment Settings**

   - Go to: Commerce → Payments
   - Connect Stripe (recommended for Australia)
   - Enable PayPal (optional)

2. **Shipping/Delivery Settings**

   - Go to: Commerce → Shipping
   - Set up delivery zones by Australian postcodes
   - Configure delivery fees
   - Set up pickup option

3. **Tax Settings**

   - Go to: Commerce → Advanced → Taxes
   - Set GST to 10% for Australia
   - Configure tax regions

4. **Checkout Settings**
   - Go to: Commerce → Checkout
   - Enable order confirmation emails
   - Customize email templates

### Step 5: Test the API Connection

1. **Start your development server:**

   ```bash
   cd "/Users/harsh/Developer/Personal Projects/Ikneed Pizza/my-app"
   npm run dev
   ```

2. **Test the products API:**

   - Open: http://localhost:3000/api/products
   - You should see your Squarespace products in JSON format

3. **If you get an error:**
   - Check your API key is correct
   - Verify the Site ID is correct
   - Ensure API permissions are set correctly in Squarespace

---

## 📱 Next Development Phases

### Phase 1: Build Frontend Pages (Next Task)

Once the API is working, we'll create:

- **Homepage** - Hero, featured pizzas, offers
- **Menu Page** - All pizzas with filtering
- **Product Detail Page** - Individual pizza with customization
- **Cart Page** - Review order
- **Checkout Page** - Customer info, payment
- **Order Confirmation** - Success page

### Phase 2: UI Components

- Header & Navigation
- Footer
- Pizza Cards
- Cart Drawer
- Customization Modal (size, toppings)
- Loading & Error States

### Phase 3: Styling

- Australian-themed design
- Mobile-responsive
- Vibrant colors & animations
- Premium feel

---

## 🔍 Testing Checklist

Before going live, test:

- [ ] Products load from Squarespace
- [ ] Inventory updates correctly
- [ ] Orders create in Squarespace
- [ ] Payment processing works
- [ ] Email confirmations send
- [ ] Mobile responsiveness
- [ ] Australian postcode validation
- [ ] GST calculation (10%)
- [ ] Delivery fee logic

---

## 📚 Resources

### Squarespace API Documentation

- Main Docs: https://developers.squarespace.com/
- Commerce API: https://developers.squarespace.com/commerce-apis
- Authentication: https://developers.squarespace.com/oauth

### Next.js Documentation

- Official Docs: https://nextjs.org/docs
- API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

### Support

If you encounter issues:

1. Check Squarespace API status
2. Review API key permissions
3. Check console logs for errors
4. Verify environment variables are set

---

## ⚠️ Important Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **API Rate Limits** - Squarespace has rate limits, implement caching with SWR
3. **Test Orders** - Use Squarespace test mode during development
4. **Real Payments** - Only enable in production after thorough testing
5. **Inventory Sync** - Real-time sync may have slight delays

---

## 🎯 Current Status

✅ Project structure created  
✅ Dependencies installed  
✅ API routes set up  
✅ Squarespace client configured  
✅ Cart store implemented  
✅ Utility functions created

🔲 Environment variables (YOU need to add)  
🔲 Squarespace products (YOU need to create)  
🔲 Frontend pages (Next phase)  
🔲 UI components (Next phase)  
🔲 Styling & design (Next phase)

---

**Ready to continue?** Once you've:

1. Added your Squarespace API credentials to `.env.local`
2. Created some products in Squarespace
3. Tested the API connection

Let me know and we'll start building the beautiful frontend! 🚀
