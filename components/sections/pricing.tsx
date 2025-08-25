'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import NumberFlow from '@number-flow/react';
import { BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const PAYMENT_FREQUENCIES: ('monthly' | 'yearly')[] = ['monthly', 'yearly'];
const TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    price: {
      monthly: 'Free',
      yearly: 'Free',
    },
    description: 'Perfect for personal projects',
    features: [
      '1,000 links per month',
      'Basic analytics',
      'Custom short domains',
      'Link expiration',
      'Basic support',
    ],
    cta: 'Get started',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: {
      monthly: 9,
      yearly: 7,
    },
    description: 'Great for professionals & small teams',
    features: [
      '50,000 links per month',
      'Advanced analytics & insights',
      'Custom branded domains',
      'Bulk link creation',
      'API access',
      'Priority support',
    ],
    cta: 'Start Pro trial',
    popular: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: {
      monthly: 29,
      yearly: 24,
    },
    description: 'Perfect for growing businesses',
    features: [
      '250,000 links per month',
      'Team collaboration tools',
      'Advanced integrations',
      'White-label options',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: 'Get started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 'Custom',
      yearly: 'Custom',
    },
    description: 'For large organizations',
    features: [
      'Unlimited links',
      'Advanced security features',
      'Custom integrations',
      'Multi-team management',
      'Premium support',
      'Custom contracts',
    ],
    cta: 'Contact Us',
    highlighted: true,
  },
];

const HighlightedBackground = () => (
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:45px_45px] opacity-100 dark:opacity-30" />
);

const PopularBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(240,119,119,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,119,118,0.3),rgba(255,255,255,0))]" />
);

const Tab = ({
  text,
  selected,
  setSelected,
  discount = false,
}: {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  discount?: boolean;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        'relative z-20 flex w-32 justify-center py-1 text-center sm:w-40 transition-colors',
        discount && 'items-center gap-2',
      )}
    >
      {selected && (
        <motion.div
          layoutId="tab-background"
          transition={{ type: 'spring', duration: 0.4 }}
          className="absolute inset-0 h-full w-full rounded-md bg-white dark:bg-neutral-950 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        />
      )}
      <span className="relative z-20 flex items-center gap-2 text-sm sm:text-base font-medium">
        {text}
        {discount && (
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full px-2 py-1 text-xs font-medium">
            Save 20%
          </span>
        )}
      </span>
    </button>
  );
};

const PricingCard = ({
  tier,
  paymentFrequency,
}: {
  tier: (typeof TIERS)[0];
  paymentFrequency: keyof typeof tier.price;
}) => {
  const price = tier.price[paymentFrequency];
  const isHighlighted = tier.highlighted;
  const isPopular = tier.popular;

  return (
    <div
      className={cn(
        'relative flex flex-col gap-8 overflow-hidden rounded-2xl border p-6 shadow',
        isHighlighted
          ? 'bg-foreground text-background'
          : 'bg-background text-foreground',
        isPopular && 'outline outline-[#eb638a]',
      )}
    >
      {isHighlighted && <HighlightedBackground />}
      {isPopular && <PopularBackground />}

      <h2 className="flex items-center gap-3 text-xl font-medium capitalize">
        {tier.name}
        {isPopular && (
          <Badge className="mt-1 bg-orange-900 px-1 py-0 text-white hover:bg-orange-900">
            🔥 Most Popular
          </Badge>
        )}
      </h2>

      <div className="relative h-12">
        {typeof price === 'number' ? (
          <>
            <NumberFlow
              format={{
                style: 'currency',
                currency: 'USD',
                trailingZeroDisplay: 'stripIfInteger',
              }}
              value={price}
              className="text-4xl font-medium"
            />
            <p className="-mt-2 text-xs font-medium">Per month</p>
          </>
        ) : (
          <h1 className="text-4xl font-medium">{price}</h1>
        )}
      </div>

      <div className="flex-1 space-y-2">
        <h3 className="text-sm font-medium">{tier.description}</h3>
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                'flex items-center gap-2 text-sm font-medium',
                isHighlighted ? 'text-background' : 'text-foreground/60',
              )}
            >
              <BadgeCheck strokeWidth={1} size={16} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button
        className={cn(
          'h-fit w-full rounded-lg',
          isHighlighted && 'bg-accent text-foreground hover:bg-accent/95',
        )}
      >
        {tier.cta}
      </Button>
    </div>
  );
};

export default function PricingSection() {
  const [selectedPaymentFreq, setSelectedPaymentFreq] = useState<
    'monthly' | 'yearly'
  >(PAYMENT_FREQUENCIES[0]);

  return (
    <section>
      {/* Top divider */}
      <div className="bg-gray-200 dark:bg-neutral-700 h-[1px] w-full" />
      
      <div className="max-w-7xl mx-auto border-l border-r border-gray-200 dark:border-neutral-700 py-16">
      {/* Header - matching testimonials structure */}
      <div className="mx-auto max-w-3xl text-center space-y-4 sm:space-y-6">
        <p className="text-sm text-muted-foreground">PRICING</p>
        <h2 className="text-3xl font-medium md:text-5xl">Simple, transparent pricing</h2>
        <p className="text-muted-foreground md:max-w-2xl mx-auto">
          Choose the perfect plan for your needs. Start free, upgrade when you grow.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="mt-8 flex justify-center">
        <div className="relative flex items-center gap-4 rounded-xl bg-gray-50 p-2 dark:bg-neutral-800">
          {/* Pattern overlay */}
          <div className="absolute inset-0 z-10 m-auto h-full w-full rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 opacity-50 bg-[image:repeating-linear-gradient(315deg,_theme(colors.gray.200)_0,_theme(colors.gray.200)_1px,_transparent_0,_transparent_50%)] dark:bg-[image:repeating-linear-gradient(315deg,_theme(colors.neutral.700)_0,_theme(colors.neutral.700)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]" />
          {PAYMENT_FREQUENCIES.map((freq) => (
            <Tab
              key={freq}
              text={freq}
              selected={selectedPaymentFreq === freq}
              setSelected={(text) =>
                setSelectedPaymentFreq(text as 'monthly' | 'yearly')
              }
              discount={freq === 'yearly'}
            />
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid w-full max-w-6xl mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TIERS.map((tier, i) => (
          <PricingCard
            key={i}
            tier={tier}
            paymentFrequency={selectedPaymentFreq}
          />
        ))}
      </div>
      </div>
      
      {/* Bottom divider */}
      <div className="bg-gray-200 dark:bg-neutral-700 h-[1px] w-full" />
    </section>
  );
}
