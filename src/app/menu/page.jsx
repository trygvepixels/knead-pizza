'use client';

import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
    ShoppingCartIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import useCartStore from '@/store/cartStore';
import { formatPrice } from '@/lib/utils';
import toast from 'react-hot-toast';
import Loading from '@/components/ui/Loading';

function MenuContent() {
    const searchParams = useSearchParams();
    const categoryFromUrl = searchParams.get('category');

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'all');

    const addToCart = useCartStore((state) => state.addToCart);

    // Update selected category when URL changes
    useEffect(() => {
        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl);
        }
    }, [categoryFromUrl]);

    // Sample Menu Data (same as DailyZoneMenu)
    const allMenuItems = {
        pizza: [
            { id: 1, name: "Margherita Classic", description: "Fresh mozzarella, basil, tomato sauce", price: 15, category: "pizza", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=300&fit=crop", tags: ["vegetarian", "popular"] },
            { id: 2, name: "Pepperoni Delight", description: "Double pepperoni, mozzarella, oregano", price: 18, category: "pizza", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=300&fit=crop", tags: ["popular"] },
            { id: 3, name: "Veggie Supreme", description: "Bell peppers, mushrooms, olives, onions", price: 16, category: "pizza", image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=300&h=300&fit=crop", tags: ["vegetarian", "vegan"] },
            { id: 4, name: "BBQ Chicken", description: "Grilled chicken, BBQ sauce, red onions", price: 19, category: "pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop", tags: [] },
            { id: 5, name: "Hawaiian", description: "Ham, pineapple, mozzarella", price: 17, category: "pizza", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=300&fit=crop", tags: [] },
            { id: 6, name: "Meat Lovers", description: "Pepperoni, sausage, bacon, ham", price: 20, category: "pizza", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&h=300&fit=crop", tags: [] },
        ],
        pasta: [
            { id: 7, name: "Spaghetti Carbonara", description: "Creamy sauce, bacon, parmesan", price: 14, category: "pasta", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop", tags: [] },
            { id: 8, name: "Penne Arrabbiata", description: "Spicy tomato sauce, garlic, chili", price: 13, category: "pasta", image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=300&h=300&fit=crop", tags: ["vegetarian", "spicy"] },
            { id: 9, name: "Fettuccine Alfredo", description: "Rich cream sauce, parmesan cheese", price: 15, category: "pasta", image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=300&h=300&fit=crop", tags: ["vegetarian"] },
            { id: 10, name: "Lasagna Bolognese", description: "Layers of pasta, meat sauce, cheese", price: 17, category: "pasta", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=300&fit=crop", tags: ["popular"] },
        ],
        salads: [
            { id: 11, name: "Caesar Salad", description: "Romaine lettuce, croutons, parmesan", price: 10, category: "salads", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=300&fit=crop", tags: [] },
            { id: 12, name: "Greek Salad", description: "Feta cheese, olives, tomatoes, cucumber", price: 11, category: "salads", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop", tags: ["vegetarian"] },
            { id: 13, name: "Garden Fresh", description: "Mixed greens, cherry tomatoes, vinaigrette", price: 9, category: "salads", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop", tags: ["vegetarian", "vegan"] },
            { id: 14, name: "Caprese Salad", description: "Fresh mozzarella, tomato, basil, balsamic", price: 12, category: "salads", image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=300&h=300&fit=crop", tags: ["vegetarian"] },
        ],
        drinks: [
            { id: 15, name: "Fresh Lemonade", description: "House-made, refreshing citrus drink", price: 5, category: "drinks", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop", tags: [] },
            { id: 16, name: "Italian Soda", description: "Sparkling water with fruit syrup", price: 6, category: "drinks", image: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=300&h=300&fit=crop", tags: [] },
            { id: 17, name: "Iced Coffee", description: "Cold brew with milk and ice", price: 5, category: "drinks", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=300&h=300&fit=crop", tags: [] },
            { id: 18, name: "Mineral Water", description: "Sparkling or still, imported", price: 4, category: "drinks", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop", tags: [] },
        ],
        desserts: [
            { id: 19, name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: 8, category: "desserts", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=300&fit=crop", tags: ["popular"] },
            { id: 20, name: "Chocolate Lava Cake", description: "Warm cake with molten chocolate center", price: 9, category: "desserts", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=300&h=300&fit=crop", tags: [] },
            { id: 21, name: "Panna Cotta", description: "Italian cream dessert with berry sauce", price: 7, category: "desserts", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop", tags: [] },
            { id: 22, name: "Gelato", description: "Italian ice cream, various flavors", price: 6, category: "desserts", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop", tags: [] },
        ],
        sides: [
            { id: 23, name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 6, category: "sides", image: "https://images.unsplash.com/photo-1619365584863-1785d5f0f3f6?w=300&h=300&fit=crop", tags: ["vegetarian"] },
            { id: 24, name: "Mozzarella Sticks", description: "Breaded cheese sticks with marinara", price: 8, category: "sides", image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=300&h=300&fit=crop", tags: ["vegetarian"] },
            { id: 25, name: "Chicken Wings", description: "Crispy wings with choice of sauce", price: 10, category: "sides", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300&h=300&fit=crop", tags: [] },
            { id: 26, name: "Bruschetta", description: "Grilled bread with tomato and basil", price: 7, category: "sides", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=300&fit=crop", tags: ["vegetarian", "vegan"] },
        ],
    };

    // Flatten all items
    const allProducts = Object.values(allMenuItems).flat();

    // Filter products
    const filteredProducts = allProducts.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    // Get unique categories
    const categories = ['all', 'pizza', 'pasta', 'salads', 'drinks', 'desserts', 'sides'];
    const categoryIcons = {
        all: '🍽️',
        pizza: '🍕',
        pasta: '🍝',
        salads: '🥗',
        drinks: '🥤',
        desserts: '🍰',
        sides: '🍟',
    };

    const handleAddToCart = (product) => {
        addToCart(
            { ...product, id: String(product.id), variants: [{ id: '1' }] },
            { variantId: '1', price: product.price },
            1
        );
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                        Full <span className="text-gradient">Menu</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        All our delicious items in one place
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search menu items..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-full focus:border-red-500 focus:outline-none text-lg shadow-lg"
                        />
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-red-300'
                                    }`}
                            >
                                <span className="text-xl">{categoryIcons[category]}</span>
                                <span className="capitalize">{category}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-2xl font-semibold text-gray-900 mb-2">No items found</p>
                        <p className="text-gray-600">Try adjusting your filters or search query</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
                            >
                                {/* Image */}
                                <div className="relative h-64 bg-gradient-to-br from-red-100 to-orange-100 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 shadow-lg capitalize">
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* Tags */}
                                    {product.tags && product.tags.length > 0 && (
                                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                                            {product.tags.includes('popular') && (
                                                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-yellow-500 shadow-lg">
                                                    ⭐ Popular
                                                </span>
                                            )}
                                            {product.tags.includes('vegetarian') && (
                                                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-green-500 shadow-lg">
                                                    🥬 Veggie
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                        {product.name}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                                        {product.description}
                                    </p>

                                    {/* Price and Action */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-3xl font-bold text-gradient">
                                                {formatPrice(product.price)}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="group/btn relative px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                                        >
                                            <ShoppingCartIcon className="w-5 h-5" />
                                            <span>Add</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Info Section */}
                <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-8 md:p-12 text-white text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Can't find what you're looking for?
                    </h2>
                    <p className="text-lg md:text-xl mb-8 opacity-90">
                        Give us a call and we'll make it happen!
                    </p>
                    <a
                        href="tel:0466477713"
                        className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        Call Now: 0466 477 713
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function MenuPage() {
    return (
        <Suspense fallback={<Loading />}>
            <MenuContent />
        </Suspense>
    );
}
