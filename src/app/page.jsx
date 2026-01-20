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
import FAQSection from '@/components/FAQSection';
import PromoGrid from '@/components/PromoGrid';
import DailyZoneMenu from '@/components/DailyZoneMenu';
import DoughStory from '@/components/DoughStory';
import BestSellerItems from '@/components/BestSellerItems';
import UsersTestimonials from '@/components/UsersTestimonials';
import OpenNowMenu from '@/components/OpenNowMenu';
import LiveFeed from '@/components/LiveFeed';
import PizzaShowcase from '@/components/PizzaShowcase';

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Hero />

            {/* <PizzaShowcase /> */}
            <div className="space-y-0">
                <OpenNowMenu />
                <DoughStory />
                <UsersTestimonials />
            </div>

            {/* Real-time notifications */}
        </div>
    );
}
