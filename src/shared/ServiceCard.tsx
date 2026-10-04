import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Service } from "@/components/Home/Section3/services";
import { Button } from "@/components/ui/button";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

const ServiceCard = ({ service, className }: ServiceCardProps) => {
  const { slug, title, image, price, category } = service;

  return (
    <div
      className={cn(
        "group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow hover:border-primary/30",
        className
      )}
    >
      <div>
        {/* Image Container with Badges */}
        <Link
          href={`/shop/${slug}`}
          className="relative block w-full aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl bg-zinc-100 dark:bg-zinc-800"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Category Chip Overlay */}
          {category && (
            <span className="absolute top-3 left-3 z-10 rounded-full bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-primary shadow-xs font-montserrat">
              {category}
            </span>
          )}

        </Link>

        {/* Content */}
        <div className="mt-4">
          <Link href={`/shop/${slug}`} className="block">
            <h3 className="line-clamp-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100 font-montserrat transition-colors group-hover:text-primary leading-snug">
              {title}
            </h3>
          </Link>

          {/* Feature Badge */}
          <div className="mt-2.5 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
              ● Instant Access
            </span>
          </div>
        </div>
      </div>

      {/* Footer: Price + Buy Now CTA */}
      <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-3">
        <div>
          <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 block uppercase tracking-wider font-montserrat">
            Price
          </span>
          <span className="text-2xl font-bold text-text-blue dark:text-sky-400 font-montserrat">
            ${price}
          </span>
        </div>

        <Button
          asChild
          size="sm"
          className="rounded-xl px-4 py-2 font-montserrat font-semibold bg-primary hover:bg-primary/90 text-white shadow-xs hover:shadow-md transition-all gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
        >
          <Link href={`/shop/${slug}`}>
            <span>Buy Now</span>
            <ShoppingCart className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;