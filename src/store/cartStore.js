import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Cart Store using Zustand
 * Persisted to localStorage for cart persistence across sessions
 */
const useCartStore = create(
  persist(
    (set, get) => ({
      // State
      items: [],

      /**
       * Add item to cart
       * @param {Object} product - Product to add
       * @param {Object} options - Customization options (size, toppings, etc.)
       * @param {number} quantity - Quantity to add
       */
      addToCart: (product, options = {}, quantity = 1) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) =>
              item.productId === product.id &&
              item.variantId === options.variantId &&
              JSON.stringify(item.customizations) ===
                JSON.stringify(options.customizations)
          );

          if (existingItemIndex > -1) {
            // Update quantity if same product with same options exists
            const newItems = [...state.items];
            newItems[existingItemIndex].quantity += quantity;
            return { items: newItems };
          } else {
            // Add new item
            const newItem = {
              id: `${product.id}_${Date.now()}`,
              productId: product.id,
              variantId: options.variantId || product.variants[0]?.id,
              name: product.name,
              price: options.price || product.price,
              image: product.images[0]?.url || null,
              quantity,
              customizations: options.customizations || [],
              size: options.size || "Medium",
            };
            return { items: [...state.items, newItem] };
          }
        });
      },

      /**
       * Remove item from cart
       * @param {string} itemId - Item ID to remove
       */
      removeFromCart: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      /**
       * Update item quantity
       * @param {string} itemId - Item ID
       * @param {number} quantity - New quantity
       */
      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(itemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      /**
       * Clear entire cart
       */
      clearCart: () => {
        set({ items: [] });
      },

      /**
       * Get cart item count
       * @returns {number} Total number of items
       */
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      /**
       * Calculate cart subtotal
       * @returns {number} Subtotal amount
       */
      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      /**
       * Calculate GST (10% for Australia)
       * @returns {number} GST amount
       */
      getGST: () => {
        const subtotal = get().getSubtotal();
        const gstRate = parseFloat(process.env.NEXT_PUBLIC_GST_RATE) || 0.1;
        return subtotal * gstRate;
      },

      /**
       * Calculate delivery fee
       * @param {string} deliveryType - 'delivery' or 'pickup'
       * @returns {number} Delivery fee
       */
      getDeliveryFee: (deliveryType) => {
        if (deliveryType === "pickup") return 0;

        const subtotal = get().getSubtotal();
        const freeDeliveryThreshold =
          parseFloat(process.env.NEXT_PUBLIC_FREE_DELIVERY_THRESHOLD) || 30;
        const deliveryFee =
          parseFloat(process.env.NEXT_PUBLIC_DELIVERY_FEE) || 5;

        return subtotal >= freeDeliveryThreshold ? 0 : deliveryFee;
      },

      /**
       * Calculate total (subtotal + GST + delivery)
       * @param {string} deliveryType - 'delivery' or 'pickup'
       * @returns {number} Total amount
       */
      getTotal: (deliveryType = "delivery") => {
        const subtotal = get().getSubtotal();
        const gst = get().getGST();
        const deliveryFee = get().getDeliveryFee(deliveryType);

        return subtotal + gst + deliveryFee;
      },

      /**
       * Get cart summary for display
       * @param {string} deliveryType - 'delivery' or 'pickup'
       * @returns {Object} Cart summary
       */
      getCartSummary: (deliveryType = "delivery") => {
        const subtotal = get().getSubtotal();
        const gst = get().getGST();
        const deliveryFee = get().getDeliveryFee(deliveryType);
        const total = subtotal + gst + deliveryFee;

        return {
          subtotal: parseFloat(subtotal.toFixed(2)),
          gst: parseFloat(gst.toFixed(2)),
          deliveryFee: parseFloat(deliveryFee.toFixed(2)),
          total: parseFloat(total.toFixed(2)),
          itemCount: get().getItemCount(),
        };
      },

      /**
       * Check if cart is empty
       * @returns {boolean}
       */
      isEmpty: () => {
        return get().items.length === 0;
      },

      /**
       * Get cart items formatted for Squarespace order
       * @returns {Array} Formatted items for API
       */
      getOrderItems: () => {
        return get().items.map((item) => ({
          productId: item.productId,
          variantId: item.variantId,
          quantity: item.quantity,
          customizations: item.customizations,
        }));
      },
    }),
    {
      name: "pizza-cart-storage", // localStorage key
      partialize: (state) => ({ items: state.items }), // Only persist items
    }
  )
);

export default useCartStore;
