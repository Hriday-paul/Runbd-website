import React from "react";
import { Users, ShieldCheck, Tag, Headphones, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    icon: Users,
    title: "Trust by Thousand",
    description: "Over 10,000+ satisfied customers trusting our marketplace.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Safe & Secure",
    description: "100% secure payment gateways & verified digital products.",
  },
  {
    id: 3,
    icon: Tag,
    title: "Best Price",
    description: "Guaranteed top market value and exclusive instant discounts.",
  },
  {
    id: 4,
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Dedicated round-the-clock support ready to help you anytime.",
  },
];

export default function Section2() {
  return (
    <section aria-label="Why Choose Us" className="w-full pb-6 md:pb-10">
      <div className="container mx-auto">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEvenColumn = index % 2 === 0;
              const isTopRowMobile = index < 2;
              const isNotLastDesktop = index < features.length - 1;

              return (
                <div
                  key={feature.id}
                  className={cn(
                    "flex items-center gap-2.5 sm:gap-3.5 lg:gap-4 p-3.5 sm:p-5 lg:p-6 xl:p-7 transition-colors duration-200 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30",
                    // 2-column mobile borders (horizontal divider between row 1 & 2, vertical divider between col 1 & 2)
                    isEvenColumn && "border-r border-zinc-200/70 dark:border-zinc-800",
                    isTopRowMobile && "border-b border-zinc-200/70 dark:border-zinc-800",
                    // Desktop (lg) overrides: remove bottom border, apply right border to all except the last item
                    "lg:border-b-0",
                    isNotLastDesktop ? "lg:border-r" : "lg:border-r-0"
                  )}
                >
                  {/* Reduced icon size on small devices */}
                  <div className="shrink-0 text-primary dark:text-[#38bdf8]">
                    <Icon
                      className="size-6 sm:size-8 lg:size-10"
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Responsive Text Content */}
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-primary dark:text-[#38bdf8] font-medium text-xs sm:text-[15px] lg:text-[17px] leading-tight sm:leading-snug truncate sm:whitespace-normal">
                      {feature.title}
                    </h3>
                    <p className="text-[#3aa4e6] dark:text-zinc-400 text-[11px] sm:text-xs lg:text-[13px] leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-2 sm:line-clamp-none">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
