import axios from 'axios';

const SQUARESPACE_API_URL = process.env.SQUARESPACE_API_URL || 'https://api.squarespace.com/1.0';
const API_KEY = process.env.NEXT_PUBLIC_SQUARESPACE_API_KEY;

// Create axios instance with default config
const squarespaceClient = axios.create({
  baseURL: SQUARESPACE_API_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
    'User-Agent': 'NextJS-Pizza-App/1.0',
  },
});

/**
 * Squarespace Commerce API Client
 * Documentation: https://developers.squarespace.com/commerce-apis
 */
class SquarespaceAPI {
  
  /**
   * Get all products (menu items)
   * @param {Object} params - Query parameters
   * @param {string} params.category - Filter by category
   * @param {number} params.limit - Number of products to return
   * @param {string} params.cursor - Pagination cursor
   * @returns {Promise<Object>} Products data
   */
  async getProducts(params = {}) {
    try {
      const response = await squarespaceClient.get('/commerce/products', { params });
      
      // Transform Squarespace data to our app format
      const products = response.data.products.map(product => ({
        id: product.id,
        name: product.name,
        slug: product.urlSlug,
        description: product.description,
        price: product.variants[0]?.priceMoney?.value || 0,
        currency: product.variants[0]?.priceMoney?.currency || 'AUD',
        images: product.images?.map(img => ({
          url: img.url,
          alt: img.altText || product.name,
        })) || [],
        variants: product.variants?.map(v => ({
          id: v.id,
          sku: v.sku,
          price: v.priceMoney?.value || 0,
          attributes: v.attributes,
          stock: v.unlimited ? 999 : (v.stock || 0),
        })) || [],
        tags: product.tags || [],
        category: product.categories?.[0] || 'uncategorized',
        available: product.isVisible && product.variants?.some(v => v.unlimited || v.stock > 0),
      }));

      return {
        products,
        pagination: response.data.pagination,
      };
    } catch (error) {
      console.error('Error fetching products:', error.response?.data || error.message);
      throw new Error('Failed to fetch menu items from Squarespace');
    }
  }

  /**
   * Get a single product by ID
   * @param {string} productId - Product ID
   * @returns {Promise<Object>} Product data
   */
  async getProductById(productId) {
    try {
      const response = await squarespaceClient.get(`/commerce/products/${productId}`);
      const product = response.data;

      return {
        id: product.id,
        name: product.name,
        slug: product.urlSlug,
        description: product.description,
        price: product.variants[0]?.priceMoney?.value || 0,
        currency: product.variants[0]?.priceMoney?.currency || 'AUD',
        images: product.images?.map(img => ({
          url: img.url,
          alt: img.altText || product.name,
        })) || [],
        variants: product.variants?.map(v => ({
          id: v.id,
          sku: v.sku,
          price: v.priceMoney?.value || 0,
          attributes: v.attributes,
          stock: v.unlimited ? 999 : (v.stock || 0),
        })) || [],
        tags: product.tags || [],
        category: product.categories?.[0] || 'uncategorized',
        available: product.isVisible && product.variants?.some(v => v.unlimited || v.stock > 0),
      };
    } catch (error) {
      console.error('Error fetching product:', error.response?.data || error.message);
      throw new Error('Failed to fetch product details');
    }
  }

  /**
   * Get inventory for a product variant
   * @param {string} variantId - Product variant ID
   * @returns {Promise<Object>} Inventory data
   */
  async getInventory(variantId) {
    try {
      const response = await squarespaceClient.get(`/commerce/inventory/${variantId}`);
      return {
        variantId: response.data.variantId,
        available: response.data.unlimited || response.data.quantity > 0,
        quantity: response.data.unlimited ? 999 : response.data.quantity,
        unlimited: response.data.unlimited,
      };
    } catch (error) {
      console.error('Error fetching inventory:', error.response?.data || error.message);
      throw new Error('Failed to check stock availability');
    }
  }

  /**
   * Create an order in Squarespace
   * @param {Object} orderData - Order details
   * @returns {Promise<Object>} Order confirmation
   */
  async createOrder(orderData) {
    try {
      const squarespaceOrder = {
        channelName: 'CUSTOM_WEBSITE', // Your Next.js frontend
        lineItems: orderData.items.map(item => ({
          productId: item.productId,
          variantId: item.variantId,
          quantity: item.quantity,
          customizations: item.customizations || [],
        })),
        customerEmail: orderData.customer.email,
        shippingAddress: orderData.deliveryType === 'delivery' ? {
          firstName: orderData.customer.firstName,
          lastName: orderData.customer.lastName,
          address1: orderData.customer.address.street,
          address2: orderData.customer.address.apartment || '',
          city: orderData.customer.address.city,
          state: orderData.customer.address.state,
          postalCode: orderData.customer.address.postcode,
          countryCode: 'AU', // Australia
          phone: orderData.customer.phone,
        } : null,
        billingAddress: {
          firstName: orderData.customer.firstName,
          lastName: orderData.customer.lastName,
          address1: orderData.customer.address.street,
          address2: orderData.customer.address.apartment || '',
          city: orderData.customer.address.city,
          state: orderData.customer.address.state,
          postalCode: orderData.customer.address.postcode,
          countryCode: 'AU',
        },
        fulfillmentStatus: orderData.deliveryType === 'pickup' ? 'PENDING_PICKUP' : 'PENDING',
        orderNotes: orderData.notes || '',
      };

      const response = await squarespaceClient.post('/commerce/orders', squarespaceOrder);
      
      return {
        orderId: response.data.id,
        orderNumber: response.data.orderNumber,
        status: response.data.fulfillmentStatus,
        total: response.data.grandTotal?.value || 0,
        createdAt: response.data.createdOn,
        estimatedDelivery: this.calculateDeliveryTime(orderData.deliveryType),
      };
    } catch (error) {
      console.error('Error creating order:', error.response?.data || error.message);
      throw new Error('Failed to create order. Please try again.');
    }
  }

  /**
   * Get order by ID
   * @param {string} orderId - Order ID
   * @returns {Promise<Object>} Order details
   */
  async getOrder(orderId) {
    try {
      const response = await squarespaceClient.get(`/commerce/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching order:', error.response?.data || error.message);
      throw new Error('Failed to fetch order details');
    }
  }

  /**
   * Update order status
   * @param {string} orderId - Order ID
   * @param {Object} updates - Status updates
   * @returns {Promise<Object>} Updated order
   */
  async updateOrder(orderId, updates) {
    try {
      const response = await squarespaceClient.patch(`/commerce/orders/${orderId}`, updates);
      return response.data;
    } catch (error) {
      console.error('Error updating order:', error.response?.data || error.message);
      throw new Error('Failed to update order');
    }
  }

  /**
   * Search products by query
   * @param {string} query - Search query
   * @returns {Promise<Array>} Matching products
   */
  async searchProducts(query) {
    try {
      const { products } = await this.getProducts();
      
      // Client-side filtering (Squarespace API might not have search endpoint)
      const searchTerm = query.toLowerCase();
      return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description?.toLowerCase().includes(searchTerm) ||
        product.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    } catch (error) {
      console.error('Error searching products:', error);
      throw new Error('Failed to search products');
    }
  }

  /**
   * Get products by category
   * @param {string} category - Category name
   * @returns {Promise<Array>} Products in category
   */
  async getProductsByCategory(category) {
    try {
      const { products } = await this.getProducts({ category });
      return products;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw new Error('Failed to fetch products by category');
    }
  }

  /**
   * Calculate estimated delivery time
   * @param {string} deliveryType - 'delivery' or 'pickup'
   * @returns {string} Estimated time
   */
  calculateDeliveryTime(deliveryType) {
    const now = new Date();
    const minutes = deliveryType === 'pickup' ? 20 : 45;
    now.setMinutes(now.getMinutes() + minutes);
    
    return now.toLocaleTimeString('en-AU', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  }

  /**
   * Validate Australian postcode for delivery
   * @param {string} postcode - Postcode to validate
   * @returns {boolean} Whether postcode is valid and in delivery range
   */
  validatePostcode(postcode) {
    // Australian postcode validation (4 digits)
    const postcodeRegex = /^[0-9]{4}$/;
    if (!postcodeRegex.test(postcode)) {
      return false;
    }

    // Example: Add your delivery postcodes here
    // This could be fetched from Squarespace or configured in your app
    const deliveryPostcodes = [
      '3000', '3001', '3002', '3003', '3004', '3005', '3006', '3008',
      // Add more postcodes as needed
    ];

    return deliveryPostcodes.includes(postcode);
  }

  /**
   * Calculate GST (10% in Australia)
   * @param {number} amount - Amount to calculate GST for
   * @returns {Object} Amount breakdown
   */
  calculateGST(amount) {
    const gstRate = parseFloat(process.env.NEXT_PUBLIC_GST_RATE) || 0.10;
    const gst = amount * gstRate;
    const totalWithGST = amount + gst;

    return {
      subtotal: amount,
      gst: parseFloat(gst.toFixed(2)),
      total: parseFloat(totalWithGST.toFixed(2)),
    };
  }
}

// Export singleton instance
const squarespaceAPI = new SquarespaceAPI();
export default squarespaceAPI;
