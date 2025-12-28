'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
    CheckCircleIcon,
    ClockIcon,
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    TruckIcon,
    ShoppingBagIcon
} from '@heroicons/react/24/solid';
import { formatDateTime } from '@/lib/utils';
import Loading from '@/components/ui/Loading';
import Button from '@/components/ui/Button';

function OrderConfirmationContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (orderId) {
            fetchOrderDetails();
        } else {
            setError('No order ID provided');
            setLoading(false);
        }
    }, [orderId]);

    const fetchOrderDetails = async () => {
        try {
            const response = await fetch(`/api/orders?orderId=${orderId}`);
            const result = await response.json();

            if (result.success) {
                setOrder(result.data);
            } else {
                setError(result.error || 'Failed to fetch order details');
            }
        } catch (err) {
            console.error('Error fetching order:', err);
            setError('Failed to load order details');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />;
    }

    if (error || !order) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-5xl">😕</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Not Found</h1>
                    <p className="text-gray-600 mb-8">
                        We couldn't find your order. Please check your email for the order confirmation.
                    </p>
                    <Link href="/">
                        <Button variant="primary">Go to Homepage</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Success Animation */}
                <div className="text-center mb-12 animate-fadeIn">
                    <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl mb-6 animate-scaleIn">
                        <CheckCircleIcon className="w-16 h-16 text-white" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Order <span className="text-gradient">Confirmed!</span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-2">
                        Thank you for your order! 🍕
                    </p>

                    <p className="text-lg text-gray-500">
                        Order #{order.orderNumber || orderId.slice(-8).toUpperCase()}
                    </p>
                </div>

                {/* Order Details Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-8">
                    {/* Estimated Time Banner */}
                    <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <ClockIcon className="w-10 h-10" />
                                <div>
                                    <p className="text-sm opacity-90">Estimated Time</p>
                                    <p className="text-2xl font-bold">
                                        {order.estimatedDelivery || '45 minutes'}
                                    </p>
                                </div>
                            </div>

                            <div className="text-right">
                                {order.fulfillmentStatus === 'PENDING_PICKUP' ? (
                                    <ShoppingBagIcon className="w-12 h-12 opacity-90" />
                                ) : (
                                    <TruckIcon className="w-12 h-12 opacity-90" />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Order Info */}
                    <div className="p-8 space-y-8">
                        {/* Confirmation Message */}
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                            <div className="flex items-start space-x-3">
                                <EnvelopeIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-blue-900 mb-1">
                                        Confirmation Email Sent
                                    </p>
                                    <p className="text-sm text-blue-700">
                                        We've sent an order confirmation to your email with all the details.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>

                            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Order Number</span>
                                    <span className="font-bold text-gray-900">
                                        #{order.orderNumber || orderId.slice(-8).toUpperCase()}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-700">Order Date</span>
                                    <span className="font-semibold text-gray-900">
                                        {order.createdAt ? formatDateTime(order.createdAt) : new Date().toLocaleDateString('en-AU')}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-700">Status</span>
                                    <span className="px-4 py-1 bg-green-100 text-green-700 font-semibold rounded-full text-sm">
                                        {order.status === 'PENDING_PICKUP' ? 'Preparing' : 'Confirmed'}
                                    </span>
                                </div>

                                <div className="flex justify-between items-start pt-4 border-t border-gray-200">
                                    <span className="text-xl font-bold text-gray-900">Total Paid</span>
                                    <span className="text-2xl font-extrabold text-gradient">
                                        ${order.total ? order.total.toFixed(2) : '0.00'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* What's Next */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Next?</h2>

                            <div className="space-y-4">
                                {order.fulfillmentStatus === 'PENDING_PICKUP' ? (
                                    <>
                                        <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl border border-orange-200">
                                            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                1
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">We're preparing your order</p>
                                                <p className="text-sm text-gray-600">Your delicious pizzas are being made fresh right now!</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                                            <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                2
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Ready for pickup</p>
                                                <p className="text-sm text-gray-600">We'll notify you when your order is ready (approx. 20 mins)</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                                            <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                3
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Enjoy!</p>
                                                <p className="text-sm text-gray-600">Pick up your order and enjoy your meal! 🍕</p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl border border-orange-200">
                                            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                1
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">We're preparing your order</p>
                                                <p className="text-sm text-gray-600">Your delicious pizzas are being made fresh right now!</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                                            <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                2
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Out for delivery</p>
                                                <p className="text-sm text-gray-600">Your order is on its way to you!</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                                            <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                3
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Delivered!</p>
                                                <p className="text-sm text-gray-600">Enjoy your hot, fresh pizza! 🍕</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center space-x-3 text-gray-700">
                                    <PhoneIcon className="w-5 h-5 text-red-600" />
                                    <span>Call us: {process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+61 XXX XXX XXX'}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-700">
                                    <EnvelopeIcon className="w-5 h-5 text-red-600" />
                                    <span>Email: {process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'info@pizzaoutlet.com.au'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Link href="/menu" className="flex-1">
                                <Button variant="primary" fullWidth>
                                    Order Again
                                </Button>
                            </Link>

                            <Link href="/" className="flex-1">
                                <Button variant="secondary" fullWidth>
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function OrderConfirmationPage() {
    return (
        <Suspense fallback={<Loading />}>
            <OrderConfirmationContent />
        </Suspense>
    );
}
