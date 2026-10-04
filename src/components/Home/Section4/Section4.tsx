"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Layers, LucideIcon } from "lucide-react";
import CountUp from "react-countup";

interface StatItem {
  id: number;
  icon: LucideIcon;
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    icon: CalendarDays,
    prefix: "Since ",
    value: 2020,
    suffix: "",
    label: "Serving with Trust",
  },
  {
    id: 2,
    icon: Users,
    prefix: "",
    value: 100,
    suffix: "+",
    label: "Active Customers",
  },
  {
    id: 3,
    icon: Layers,
    prefix: "",
    value: 50,
    suffix: "+",
    label: "Available Services",
  },
];

export default function Section4() {
  return (
    <section aria-label="Our Achievements" className="py-6 md:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col items-center justify-center text-center p-5 sm:p-6 lg:p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-primary/40 transition-all duration-300"
              >
                {/* Lucide Icon */}
                <div className="text-primary dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-7 sm:size-8 lg:size-10" strokeWidth={1.6} />
                </div>

                {/* Big Bold Stat Number */}
                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl lg:text-2xl font-semibold text-primary dark:text-[#38bdf8] font-montserrat tracking-tight leading-none">
                  {item.prefix && <span>{item.prefix}</span>}
                  <CountUp
                    end={item.value}
                    duration={2.5}
                    separator=""
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix && <span>{item.suffix}</span>}
                </h3>

                {/* Label Subtitle */}
                <p className="mt-2.5 sm:mt-3 text-sm sm:text-base font-normal text-[#3aa4e6] dark:text-zinc-400 font-montserrat leading-relaxed">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
