/**
 * Utility functions for the pizza outlet application
 */

/**
 * Format price in Australian dollars
 * @param {number} amount - Amount to format
 * @returns {string} Formatted price
 */
export function formatPrice(amount) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(amount);
}

/**
 * Format Australian phone number
 * @param {string} phone - Phone number
 * @returns {string} Formatted phone
 */
export function formatPhone(phone) {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, "");

  // Format as +61 xxx xxx xxx
  if (cleaned.startsWith("61")) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(
      5,
      8
    )} ${cleaned.slice(8)}`;
  }

  // Format as 0xxx xxx xxx
  if (cleaned.startsWith("0")) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }

  return phone;
}

/**
 * Validate Australian postcode
 * @param {string} postcode - Postcode to validate
 * @returns {boolean} Whether postcode is valid
 */
export function validatePostcode(postcode) {
  const postcodeRegex = /^[0-9]{4}$/;
  return postcodeRegex.test(postcode);
}

/**
 * Validate Australian phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} Whether phone is valid
 */
export function validatePhone(phone) {
  const cleaned = phone.replace(/\D/g, "");
  // Australian mobile: 04xx xxx xxx (10 digits)
  // Or with country code: 614xx xxx xxx (11 digits)
  return cleaned.length === 10 || cleaned.length === 11;
}

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} Whether email is valid
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Calculate estimated delivery time
 * @param {string} deliveryType - 'delivery' or 'pickup'
 * @returns {string} Estimated time
 */
export function calculateDeliveryTime(deliveryType) {
  const now = new Date();
  const minutes = deliveryType === "pickup" ? 20 : 45;
  now.setMinutes(now.getMinutes() + minutes);

  return now.toLocaleTimeString("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Format date in Australian format
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/**
 * Format date and time in Australian format
 * @param {Date|string} dateTime - DateTime to format
 * @returns {string} Formatted date and time
 */
export function formatDateTime(dateTime) {
  return new Date(dateTime).toLocaleString("en-AU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

/**
 * Generate slug from text
 * @param {string} text - Text to convert to slug
 * @returns {string} URL-friendly slug
 */
export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if business is currently open
 * @returns {boolean} Whether business is open
 */
export function isBusinessOpen() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();

  // Example hours: Mon-Sun 11am - 10pm
  // Customize based on your business hours
  const openHour = 11;
  const closeHour = 22;

  return hour >= openHour && hour < closeHour;
}

/**
 * Get business hours for display
 * @returns {string} Business hours
 */
export function getBusinessHours() {
  // Customize based on your business hours
  return "Mon-Sun: 11:00 AM - 10:00 PM";
}

/**
 * Calculate discount percentage
 * @param {number} originalPrice - Original price
 * @param {number} discountedPrice - Discounted price
 * @returns {number} Discount percentage
 */
export function calculateDiscountPercentage(originalPrice, discountedPrice) {
  if (originalPrice <= 0) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

/**
 * Group items by category
 * @param {Array} items - Items to group
 * @param {string} key - Key to group by (default: 'category')
 * @returns {Object} Grouped items
 */
export function groupByCategory(items, key = "category") {
  return items.reduce((groups, item) => {
    const category = item[key] || "Other";
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});
}

/**
 * Sort items by price
 * @param {Array} items - Items to sort
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} Sorted items
 */
export function sortByPrice(items, order = "asc") {
  return [...items].sort((a, b) => {
    return order === "asc" ? a.price - b.price : b.price - a.price;
  });
}

/**
 * Filter items by tags
 * @param {Array} items - Items to filter
 * @param {Array} tags - Tags to filter by
 * @returns {Array} Filtered items
 */
export function filterByTags(items, tags) {
  if (!tags || tags.length === 0) return items;

  return items.filter(
    (item) => item.tags && item.tags.some((tag) => tags.includes(tag))
  );
}

/**
 * Check if item is vegetarian
 * @param {Object} item - Item to check
 * @returns {boolean} Whether item is vegetarian
 */
export function isVegetarian(item) {
  return item.tags?.includes("vegetarian") || item.tags?.includes("vegan");
}

/**
 * Check if item is vegan
 * @param {Object} item - Item to check
 * @returns {boolean} Whether item is vegan
 */
export function isVegan(item) {
  return item.tags?.includes("vegan");
}

/**
 * Check if item is gluten-free
 * @param {Object} item - Item to check
 * @returns {boolean} Whether item is gluten-free
 */
export function isGlutenFree(item) {
  return item.tags?.includes("gluten-free");
}

/**
 * Get dietary badges for item
 * @param {Object} item - Item to get badges for
 * @returns {Array} Array of dietary badges
 */
export function getDietaryBadges(item) {
  const badges = [];

  if (isVegan(item)) badges.push({ label: "Vegan", color: "green" });
  else if (isVegetarian(item))
    badges.push({ label: "Vegetarian", color: "green" });

  if (isGlutenFree(item)) badges.push({ label: "Gluten-Free", color: "blue" });

  if (item.tags?.includes("spicy"))
    badges.push({ label: "Spicy", color: "red" });
  if (item.tags?.includes("new"))
    badges.push({ label: "New", color: "yellow" });
  if (item.tags?.includes("popular"))
    badges.push({ label: "Popular", color: "purple" });

  return badges;
}

/**
 * Safely parse JSON with fallback
 * @param {string} str - String to parse
 * @param {*} fallback - Fallback value if parsing fails
 * @returns {*} Parsed value or fallback
 */
export function safeJSONParse(str, fallback = null) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return fallback;
  }
}

/**
 * Generate order number
 * @returns {string} Order number
 */
export function generateOrderNumber() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `PZ-${timestamp}-${random}`.toUpperCase();
}

/**
 * Class names helper (similar to clsx)
 * @param  {...any} classes - Class names
 * @returns {string} Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
