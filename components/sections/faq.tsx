'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, MinusIcon, PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'features' | 'support';
}

const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'What is a URL shortener and how does it work?',
    answer:
      'A URL shortener takes long, complex URLs and creates shorter, more manageable links that redirect to the original destination. When someone clicks your short link, they are automatically redirected to the original URL while we track analytics and engagement.',
    category: 'general',
  },
  {
    id: '2',
    question: 'Is the service really free to start?',
    answer:
      'Yes! Our Starter plan is completely free and includes 1,000 links per month, basic analytics, custom short domains, and link expiration features. You can upgrade anytime as your needs grow.',
    category: 'pricing',
  },
  {
    id: '3',
    question: 'Can I use my own custom domain?',
    answer:
      'Absolutely! All paid plans include custom branded domains. You can use your own domain (like links.yourbrand.com) to maintain brand consistency and build trust with your audience.',
    category: 'features',
  },
  {
    id: '4',
    question: 'What analytics do you provide?',
    answer:
      'We provide comprehensive analytics including click tracking, geographic data, referrer information, device types, and time-based statistics. Pro and Business plans include advanced analytics with detailed insights and export capabilities.',
    category: 'features',
  },
  {
    id: '5',
    question: 'How reliable is your service?',
    answer:
      'We maintain 99.9% uptime with enterprise-grade infrastructure. Your links are backed by global CDN distribution, ensuring fast redirects worldwide. We also provide automatic failover and monitoring.',
    category: 'support',
  },
  {
    id: '6',
    question: 'Can I bulk create short links?',
    answer:
      'Yes! Pro and Business plans include bulk link creation tools. You can upload CSV files or use our API to create hundreds of links at once, perfect for marketing campaigns and large-scale operations.',
    category: 'features',
  },
  {
    id: '7',
    question: 'Do you offer API access?',
    answer:
      'Yes, our Pro and Business plans include full API access. You can integrate our URL shortening service directly into your applications, websites, or marketing tools with comprehensive documentation and SDKs.',
    category: 'features',
  },
  {
    id: '8',
    question: 'What happens if I exceed my plan limits?',
    answer:
      "If you approach your monthly link limit, we'll notify you in advance. You can upgrade your plan anytime, or additional links beyond your limit are charged at a small per-link fee. No links are ever broken or disabled.",
    category: 'pricing',
  },
  {
    id: '9',
    question: 'Can I cancel or change my plan anytime?',
    answer:
      'Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes take effect immediately for upgrades, or at the next billing cycle for downgrades. No long-term contracts or cancellation fees.',
    category: 'pricing',
  },
  {
    id: '10',
    question: 'How do you ensure link security and prevent abuse?',
    answer:
      'We employ advanced security measures including malware scanning, spam detection, and abuse monitoring. All links are checked against security databases, and we provide click fraud protection for enterprise users.',
    category: 'support',
  },
];

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'support', label: 'Support' },
];

interface FAQItemProps extends FaqItem {
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, index, isExpanded, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
      className={cn(
        'group border-border/60 rounded-lg border overflow-hidden',
        'transition-all duration-200 ease-in-out',
        isExpanded ? 'bg-card/30 shadow-sm' : 'hover:bg-card/50',
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <h3
          className={cn(
            'text-base font-medium transition-colors duration-200',
            'text-foreground/80',
            isExpanded && 'text-foreground',
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isExpanded ? 180 : 0,
            scale: isExpanded ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className={cn(
            'shrink-0 rounded-full p-0.5',
            'transition-colors duration-200',
            isExpanded ? 'text-primary' : 'text-muted-foreground',
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-border/40 border-t px-6 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section>
      {/* Top divider */}
      <div className="bg-gray-200 dark:bg-neutral-700 h-[1px] w-full" />
      
      <div className="max-w-7xl mx-auto border-l border-r border-gray-200 dark:border-neutral-700 py-16">
      {/* Header - matching testimonials and pricing structure */}
      <div className="mx-auto max-w-3xl text-center space-y-4 sm:space-y-6">
        <p className="text-sm text-muted-foreground">FAQ</p>
        <h2 className="text-3xl font-medium md:text-5xl">Frequently asked questions</h2>
        <p className="text-muted-foreground md:max-w-2xl mx-auto">
          Everything you need to know about our URL shortening service.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mt-8 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 rounded-full bg-muted/50 p-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setExpandedId(null); // Close any open FAQ when switching categories
              }}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="mt-12 mx-auto max-w-3xl space-y-2">
        <AnimatePresence>
          {filteredFaqs.map((faq, index) => (
            <FAQItem
              key={`${activeCategory}-${faq.id}`}
              {...faq}
              index={index}
              isExpanded={expandedId === faq.id}
              onToggle={() => toggleExpand(faq.id)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="mx-auto max-w-md space-y-4">
          <div className="bg-primary/10 text-primary mb-4 inline-flex items-center justify-center rounded-full p-3">
            <Mail className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <h3 className="text-foreground text-lg font-medium">
              Still have questions?
            </h3>
            <p className="text-muted-foreground text-sm">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
            </p>
          </div>
          <Button className="mt-4">
            Contact Support
          </Button>
        </div>
      </motion.div>
      </div>
      
      {/* Bottom divider */}
      <div className="bg-gray-200 dark:bg-neutral-700 h-[1px] w-full" />
    </section>
  );
}

export default FaqSection;
