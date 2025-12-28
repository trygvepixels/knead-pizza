# Environment Variables Setup

Copy this content to your `.env.local` file:

```env
# Squarespace API Configuration
# Get these from: Squarespace Dashboard → Settings → Advanced → API Keys
NEXT_PUBLIC_SQUARESPACE_API_KEY=your_api_key_here
NEXT_PUBLIC_SQUARESPACE_SITE_ID=your_site_id_here
SQUARESPACE_API_URL=https://api.squarespace.com/1.0

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://ikneadpizza.com.au
NEXT_PUBLIC_BUSINESS_NAME=Knead
NEXT_PUBLIC_BUSINESS_TAGLINE=NOT A WANT IT'S A KNEAD
NEXT_PUBLIC_BUSINESS_DESCRIPTION=HAND STRETCHED ARTISAN PIZZA
NEXT_PUBLIC_BUSINESS_PHONE=0466 477 713
NEXT_PUBLIC_BUSINESS_EMAIL=info@ikneadpizza.com.au
NEXT_PUBLIC_BUSINESS_ADDRESS=3/269 Seaview Road Henley Beach
NEXT_PUBLIC_BUSINESS_CITY=Adelaide
NEXT_PUBLIC_BUSINESS_STATE=SA
NEXT_PUBLIC_BUSINESS_POSTCODE=5022
NEXT_PUBLIC_BUSINESS_INSTAGRAM=@ikneadpizzahenleybeach

# Delivery Configuration
NEXT_PUBLIC_DELIVERY_FEE=5.00
NEXT_PUBLIC_FREE_DELIVERY_THRESHOLD=30.00
NEXT_PUBLIC_GST_RATE=0.10

# Feature Flags
NEXT_PUBLIC_ENABLE_PICKUP=true
NEXT_PUBLIC_ENABLE_DELIVERY=true
```

## How to Set Up

1. Create a file named `.env.local` in the root of your project
2. Copy the above content into it
3. Replace the placeholder values with your actual Squarespace credentials
