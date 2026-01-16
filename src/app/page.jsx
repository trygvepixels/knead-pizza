import Link from 'next/link';
import {
    FireIcon,
    TruckIcon,
    ClockIcon,
    StarIcon,
    SparklesIcon,
    HeartIcon
} from '@heroicons/react/24/solid';
import Hero from '@/components/Hero';
import PromoGrid from '@/components/PromoGrid';
import DailyZoneMenu from '@/components/DailyZoneMenu';
import DoughStory from '@/components/DoughStory';
import BestSellerItems from '@/components/BestSellerItems';
import UsersTestimonials from '@/components/UsersTestimonials';
import OpenNowMenu from '@/components/OpenNowMenu';
export default function HomePage() {
    const features = [
        {
            icon: <FireIcon className="w-8 h-8" />,
            title: 'Fresh Ingredients',
            description: 'Made with the finest, freshest ingredients daily',
        },
        {
            icon: <TruckIcon className="w-8 h-8" />,
            title: 'Fast Delivery',
            description: 'Hot pizza delivered to your door in 45 minutes',
        },
        {
            icon: <ClockIcon className="w-8 h-8" />,
            title: 'Open Late',
            description: 'Satisfying your cravings until 10 PM every day',
        },
        {
            icon: <HeartIcon className="w-8 h-8" />,
            title: 'Made with Love',
            description: 'Every pizza crafted with care and passion',
        },
    ];

    const testimonials = [
        {
            name: 'Sarah M.',
            rating: 5,
            text: 'Best pizza in Melbourne! The Margherita is absolutely divine.',
            location: 'Melbourne CBD',
        },
        {
            name: 'James K.',
            rating: 5,
            text: 'Fast delivery, hot pizza, amazing taste. What more could you want?',
            location: 'South Yarra',
        },
        {
            name: 'Emma L.',
            rating: 5,
            text: 'Love the vegan options! Finally a pizza place that caters to everyone.',
            location: 'Fitzroy',
        },
    ];

    return (
        <div className="min-h-screen">
            <Hero />
            {/* <PromoGrid /> */}
            <DailyZoneMenu />
            <BestSellerItems />
            <OpenNowMenu />
            <DoughStory />
            <UsersTestimonials />


        </div>
    );
}
