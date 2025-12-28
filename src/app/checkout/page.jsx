'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    TruckIcon,
    ShoppingBagIcon,
    CreditCardIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';
import useCartStore from '@/store/cartStore';
import { formatPrice, validateEmail, validatePhone, validatePostcode } from '@/lib/utils';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast';

const AUSTRALIAN_STATES = [
    { value: '', label: 'Select State' },
    { value: 'NSW', label: 'New South Wales' },
    { value: 'VIC', label: 'Victoria' },
    { value: 'QLD', label: 'Queensland' },
    { value: 'SA', label: 'South Australia' },
    { value: 'WA', label: 'Western Australia' },
    { value: 'TAS', label: 'Tasmania' },
    { value: 'NT', label: 'Northern Territory' },
    { value: 'ACT', label: 'Australian Capital Territory' },
];

export default function CheckoutPage() {
    const router = useRouter();
    const items = useCartStore((state) => state.items);
    const getCartSummary = useCartStore((state) => state.getCartSummary);
    const getOrderItems = useCartStore((state) => state.getOrderItems);
    const clearCart = useCartStore((state) => state.clearCart);

    const [deliveryType, setDeliveryType] = useState('delivery');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        street: '',
        apartment: '',
        city: '',
        state: '',
        postcode: '',
        notes: '',
    });

    const summary = getCartSummary(deliveryType);

    // Redirect if cart is empty
    if (items.length === 0) {
        router.push('/cart');
        return null;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error for this field
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Required fields
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid Australian phone number';
        }

        // Delivery address validation
        if (deliveryType === 'delivery') {
            if (!formData.street.trim()) newErrors.street = 'Street address is required';
            if (!formData.city.trim()) newErrors.city = 'City/Suburb is required';
            if (!formData.state) newErrors.state = 'State is required';

            if (!formData.postcode.trim()) {
                newErrors.postcode = 'Postcode is required';
            } else if (!validatePostcode(formData.postcode)) {
                newErrors.postcode = 'Please enter a valid 4-digit postcode';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setLoading(true);

        try {
            const orderData = {
                items: getOrderItems(),
                customer: {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    address: {
                        street: formData.street,
                        apartment: formData.apartment,
                        city: formData.city,
                        state: formData.state,
                        postcode: formData.postcode,
                    },
                },
                deliveryType,
                notes: formData.notes,
            };

            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            const result = await response.json();

            if (result.success) {
                // Clear cart
                clearCart();

                // Redirect to confirmation page
                router.push(`/order-confirmation?orderId=${result.data.orderId}`);
                toast.success('Order placed successfully!');
            } else {
                throw new Error(result.error || 'Failed to place order');
            }
        } catch (error) {
            console.error('Checkout error:', error);
            toast.error(error.message || 'Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                        <span className="text-gradient">Checkout</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Complete your order in just a few steps
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Delivery Type Selection */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <TruckIcon className="w-7 h-7 mr-3 text-red-600" />
                                    Delivery Method
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setDeliveryType('delivery')}
                                        className={`p-6 rounded-xl border-2 transition-all ${deliveryType === 'delivery'
                                                ? 'border-red-600 bg-red-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                    >
                                        <TruckIcon className={`w-10 h-10 mx-auto mb-3 ${deliveryType === 'delivery' ? 'text-red-600' : 'text-gray-400'
                                            }`} />
                                        <p className="font-bold text-lg">Delivery</p>
                                        <p className="text-sm text-gray-600 mt-1">Est. 45 mins</p>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setDeliveryType('pickup')}
                                        className={`p-6 rounded-xl border-2 transition-all ${deliveryType === 'pickup'
                                                ? 'border-red-600 bg-red-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                    >
                                        <ShoppingBagIcon className={`w-10 h-10 mx-auto mb-3 ${deliveryType === 'pickup' ? 'text-red-600' : 'text-gray-400'
                                            }`} />
                                        <p className="font-bold text-lg">Pickup</p>
                                        <p className="text-sm text-gray-600 mt-1">Est. 20 mins</p>
                                    </button>
                                </div>
                            </div>

                            {/* Customer Information */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Your Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        label="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="John"
                                        required
                                        error={errors.firstName}
                                    />

                                    <Input
                                        label="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Smith"
                                        required
                                        error={errors.lastName}
                                    />

                                    <Input
                                        label="Email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="john@example.com"
                                        required
                                        error={errors.email}
                                    />

                                    <Input
                                        label="Phone"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="04XX XXX XXX"
                                        required
                                        error={errors.phone}
                                    />
                                </div>
                            </div>

                            {/* Delivery Address (only if delivery selected) */}
                            {deliveryType === 'delivery' && (
                                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                        Delivery Address
                                    </h2>

                                    <div className="space-y-6">
                                        <Input
                                            label="Street Address"
                                            name="street"
                                            value={formData.street}
                                            onChange={handleInputChange}
                                            placeholder="123 Main Street"
                                            required
                                            error={errors.street}
                                        />

                                        <Input
                                            label="Apartment, Suite, etc. (Optional)"
                                            name="apartment"
                                            value={formData.apartment}
                                            onChange={handleInputChange}
                                            placeholder="Apt 4B"
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <Input
                                                label="City/Suburb"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                placeholder="Melbourne"
                                                required
                                                error={errors.city}
                                            />

                                            <Select
                                                label="State"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                options={AUSTRALIAN_STATES}
                                                required
                                                error={errors.state}
                                            />

                                            <Input
                                                label="Postcode"
                                                name="postcode"
                                                value={formData.postcode}
                                                onChange={handleInputChange}
                                                placeholder="3000"
                                                required
                                                error={errors.postcode}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Order Notes */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Order Notes (Optional)
                                </h2>

                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    placeholder="Any special instructions? (e.g., Ring doorbell, leave at door)"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                fullWidth
                                disabled={loading}
                                className="shadow-2xl"
                            >
                                {loading ? (
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Processing...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-3">
                                        <CheckCircleIcon className="w-6 h-6" />
                                        <span>Place Order - {formatPrice(summary.total)}</span>
                                    </div>
                                )}
                            </Button>
                        </form>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <CreditCardIcon className="w-7 h-7 mr-3 text-red-600" />
                                Order Summary
                            </h2>

                            {/* Items */}
                            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                                {items.map((item) => (
                                    <div key={item.id} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg flex items-center justify-center">
                                            <span className="text-2xl">🍕</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-gray-900 truncate">{item.name}</p>
                                            <p className="text-sm text-gray-600">
                                                {item.size} × {item.quantity}
                                            </p>
                                        </div>
                                        <p className="font-bold text-gray-900">
                                            {formatPrice(item.price * item.quantity)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Summary */}
                            <div className="border-t border-gray-200 pt-6 space-y-3">
                                <div className="flex justify-between text-gray-700">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">{formatPrice(summary.subtotal)}</span>
                                </div>

                                <div className="flex justify-between text-gray-700">
                                    <span>GST (10%)</span>
                                    <span className="font-semibold">{formatPrice(summary.gst)}</span>
                                </div>

                                <div className="flex justify-between text-gray-700">
                                    <span>
                                        {deliveryType === 'delivery' ? 'Delivery Fee' : 'Pickup'}
                                    </span>
                                    <span className="font-semibold">
                                        {summary.deliveryFee === 0 ? (
                                            <span className="text-green-600">FREE</span>
                                        ) : (
                                            formatPrice(summary.deliveryFee)
                                        )}
                                    </span>
                                </div>

                                <div className="border-t border-gray-200 pt-3 flex justify-between">
                                    <span className="text-xl font-bold text-gray-900">Total</span>
                                    <span className="text-2xl font-bold text-gradient">
                                        {formatPrice(summary.total)}
                                    </span>
                                </div>
                            </div>

                            {/* Payment Info */}
                            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                <p className="text-sm text-gray-600 text-center">
                                    <span className="font-semibold">💳 Secure Payment</span>
                                    <br />
                                    Payment processed by Squarespace
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
