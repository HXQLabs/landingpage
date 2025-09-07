'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { AnimatedShinyText } from '../magicui/animated-shiny-text';

const TIERS = [
  {
    id: 'growth',
    name: 'Growth',
    description: 'Early stage teams',
    price: {
      monthly: 80,
      yearly: 64, // 20% discount
    },
    features: [
      'Up to 5 active agents',
      '50 simulation runs',
      'Visual builder access',
      'GitHub + Zapier integration',
      'Basic support',
      '1 team workspace',
      'Workflow APIs',
      'Community Slack access',
    ],
    cta: 'Start building',
    href: '/sign-up',
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Fast moving companies',
    price: {
      monthly: 120,
      yearly: 96, // 20% discount
    },
    features: [
      'Up to 25 active agents',
      '150 simulation runs',
      'Visual builder access',
      'GitHub + Zapier integration',
      'Priority support',
      '3 team workspace',
      'Workflow APIs',
      'Priority Slack access',
    ],
    cta: 'Start for free',
    href: '/sign-up',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Large enterprises',
    price: {
      monthly: 250,
      yearly: 200, // 20% discount
    },
    features: [
      'Unlimited active agents',
      'Unlimited simulation runs',
      'Visual builder access',
      'GitHub + Zapier integration',
      'Priority support',
      'Unlimited team workspace',
      'Workflow APIs',
      'Priority Slack access',
      'Access to Fight Club',
    ],
    cta: 'Contact sales',
    href: '/contact',
  },
];

// Animated number component
const AnimatedNumber = ({ value }: { value: number }) => {
  const digits = value.toString().padStart(3, '0').split('');
  
  return (
    <div className="flex items-center">
      {digits.map((digit, index) => (
        <div
          key={index}
          className="relative inline-block w-[1ch] overflow-hidden leading-none tabular-nums"
        >
          <div className="invisible">0</div>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <span
              key={num}
              className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out"
              style={{
                transform: `translateY(${(parseInt(digit) - num) * 24}px)`,
                opacity: parseInt(digit) === num ? 1 : 1,
              }}
            >
              {num}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

const BillingToggle = ({
  isYearly,
  onToggle,
}: {
  isYearly: boolean;
  onToggle: (yearly: boolean) => void;
}) => {
  return (
    <div className="relative mt-8 flex items-center gap-4 rounded-xl bg-gray-50 p-2 dark:bg-neutral-800">
      {/* Pattern overlay */}
      <div className="absolute inset-0 z-10 m-auto h-full w-full rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 opacity-50 bg-[image:repeating-linear-gradient(315deg,_theme(colors.gray.200)_0,_theme(colors.gray.200)_1px,_transparent_0,_transparent_50%)] dark:bg-[image:repeating-linear-gradient(315deg,_theme(colors.neutral.700)_0,_theme(colors.neutral.700)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]" />
      
      <button
        onClick={() => onToggle(false)}
        className="relative z-20 flex w-32 justify-center py-1 text-center sm:w-40"
      >
        <span className="relative z-20 flex items-center gap-2 text-sm sm:text-base">
          Monthly
        </span>
      </button>
      
      <button
        onClick={() => onToggle(true)}
        className="relative z-20 flex w-32 justify-center py-1 text-center sm:w-40"
      >
        {isYearly && (
          <motion.div
            layoutId="billing-toggle"
            className="absolute inset-0 h-full w-full rounded-md bg-white dark:bg-neutral-950 shadow-lg"
            initial={false}
            transition={{ type: 'spring', duration: 0.4 }}
          />
        )}
        <span className="relative z-20 flex items-center gap-2 text-sm sm:text-base">
          Yearly
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full px-2 py-1 text-xs font-medium">
            Save 20%
          </span>
        </span>
      </button>
    </div>
  );
};

const PricingCard = ({
  tier,
  isYearly,
}: {
  tier: typeof TIERS[0];
  isYearly: boolean;
}) => {
  const price = tier.price[isYearly ? 'yearly' : 'monthly'];
  
  return (
    <div className="p-4 md:p-8">
      <h3 className="text-xl font-medium text-gray-900 dark:text-neutral-100">
        {tier.name}
      </h3>
      <p className="text-base text-gray-600 dark:text-neutral-400">
        {tier.description}
      </p>
      
      <div className="mt-6 flex items-baseline text-2xl font-medium dark:text-white">
        <span>$</span>
        <AnimatedNumber value={price} />
        <span className="ml-2 text-sm font-normal">/seat</span>
      </div>
      
      {/* Features - visible on mobile */}
      <div className="flex flex-col gap-4 px-0 py-4 md:hidden">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-900 dark:text-neutral-100">
            <Check className="h-4 w-4 shrink-0" />
            {feature}
          </div>
        ))}
      </div>
      
      <a
        href={tier.href}
        className={cn(
          "block rounded-xl px-6 py-2 text-center text-sm font-medium transition duration-200 active:scale-[0.98] sm:text-base mt-6 w-full",
          tier.popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
        )}
      >
        {tier.cta}
      </a>
    </div>
  );
};

const FeatureGrid = () => {
  return (
    <div className="max-w-7xl mx-auto hidden md:block">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-gray-200 dark:divide-neutral-700">
        {TIERS.map((tier) => (
          <div key={tier.id} className="flex flex-col gap-4 p-4 md:p-8">
            {tier.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-2 text-gray-900 dark:text-neutral-100">
                <Check className="h-4 w-4 shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PricingNewSection() {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section className="">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center pt-10 pb-10">
        <AnimatedShinyText>
          Pricing
        </AnimatedShinyText>
        <h2 className="text-gray-900 dark:text-neutral-100 text-center text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl mt-4">
          Simple, transparent pricing
        </h2>
        <p className="text-gray-600 dark:text-neutral-400 text-center text-base md:text-lg mt-4 max-w-2xl">
          Choose the plan that works best for your team. All plans include our core features.
        </p>
        
        <BillingToggle isYearly={isYearly} onToggle={setIsYearly} />
      </div>
      
      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-gray-200 dark:divide-neutral-700 border border-gray-200 dark:border-neutral-700 rounded-2xl overflow-hidden bg-white dark:bg-neutral-950">
          {TIERS.map((tier) => (
            <PricingCard key={tier.id} tier={tier} isYearly={isYearly} />
          ))}
        </div>
        
        {/* Feature Grid */}
        <FeatureGrid />
      </div>
    </section>
  );
}
