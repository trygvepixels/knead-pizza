'use client';

import Link from 'next/link';
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import useCartStore from '@/store/cartStore';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
    const items = useCartStore((state) => state.items);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const getCartSummary = useCartStore((state) => state.getCartSummary);

    const summary = getCartSummary('delivery');

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <ShoppingBagIcon className="w-16 h-16 text-red-600" />
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Looks like you haven't added any delicious pizzas yet!
                    </p>

                    <Link
                        href="/menu"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        Browse Menu
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                        Your <span className="text-gradient">Cart</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        {summary.itemCount} {summary.itemCount === 1 ? 'item' : 'items'} in your cart
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Image */}
                                    <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl overflow-hidden">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-4xl">
                                                🍕
                                            </div>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Size: <span className="font-semibold">{item.size}</span>
                                                </p>
                                                {item.customizations && item.customizations.length > 0 && (
                                                    <div className="text-sm text-gray-600">
                                                        <span className="font-semibold">Extras:</span>{' '}
                                                        {item.customizations.map(c => c.name).join(', ')}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                                            >
                                                <TrashIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                                            </button>
                                        </div>

                                        {/* Quantity and Price */}
                                        <div className="flex items-center justify-between mt-4">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-10 h-10 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                                                >
                                                    <MinusIcon className="w-5 h-5" />
                                                </button>

                                                <span className="text-lg font-bold text-gray-900 w-8 text-center">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-10 h-10 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                                                >
                                                    <PlusIcon className="w-5 h-5" />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-gradient">
                                                    {formatPrice(item.price * item.quantity)}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {formatPrice(item.price)} each
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Continue Shopping */}
                        <Link
                            href="/menu"
                            className="block text-center py-4 text-red-600 hover:text-red-700 font-semibold transition-colors"
                        >
                            ← Continue Shopping
                        </Link>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Order Summary
                            </h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center justify-between text-gray-700">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">{formatPrice(summary.subtotal)}</span>
                                </div>

                                <div className="flex items-center justify-between text-gray-700">
                                    <span>GST (10%)</span>
                                    <span className="font-semibold">{formatPrice(summary.gst)}</span>
                                </div>

                                <div className="flex items-center justify-between text-gray-700">
                                    <span>Delivery Fee</span>
                                    <span className="font-semibold">
                                        {summary.deliveryFee === 0 ? (
                                            <span className="text-green-600">FREE</span>
                                        ) : (
                                            formatPrice(summary.deliveryFee)
                                        )}
                                    </span>
                                </div>

                                {summary.subtotal > 0 && summary.subtotal < 30 && (
                                    <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                                        💡 Add {formatPrice(30 - summary.subtotal)} more for free delivery!
                                    </p>
                                )}
                            </div>

                            <div className="border-t border-gray-200 pt-4 mb-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-gray-900">Total</span>
                                    <span className="text-3xl font-bold text-gradient">
                                        {formatPrice(summary.total)}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Inc. GST</p>
                            </div>

                            <Link
                                href="/checkout"
                                className="block w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white text-center font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-4"
                            >
                                Proceed to Checkout
                            </Link>

                            <div className="space-y-3 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Secure checkout</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Free delivery over $30</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Est. delivery in 45 mins</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
