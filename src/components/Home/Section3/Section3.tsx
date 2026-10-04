"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import CategoryChip from "./CategoryChip";
import ServiceCard from "@/shared/ServiceCard";
import { serviceCategories, services } from "./services";
import { Button } from "@/components/ui/button";

const Section3 = () => {
    return (
        <section className="py-6 md:py-12 container">

            <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto max-w-230 text-center"
            >
                <h2 className="text-3xl leading-[1.2] font-semibold text-black dark:text-white sm:text-3xl lg:text-4xl font-montserrat">
                    Available Services
                </h2>
                <p className="mt-4 text-base text-text-blue dark:text-sky-400 sm:text-base font-montserrat max-w-lg mx-auto">
                    Explore our wide range of services designed to meet your needs and help you achieve your goals.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 sm:mt-8"
            >
                <CategoryChip categories={serviceCategories} />
            </motion.div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
                {services.map((course, index) => (
                    <motion.div
                        key={course.slug}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.65,
                            delay: index * 0.08,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <ServiceCard service={course} />
                    </motion.div>
                ))}
            </div>

            {/* Centered See All Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 sm:mt-10 flex justify-center"
            >
                <Button
                    asChild
                    size="lg"
                    variant={"outline"}
                    className="rounded-full px-8 py-3 border-primary hover:bg-primary/90 text-text-blue hover:text-white font-montserrat font-semibold text-base shadow-sm hover:shadow-lg transition-all duration-300 gap-2 cursor-pointer"
                >
                    <Link href="/shop">
                        <span>See All</span>
                        <ArrowRight className="size-4" />
                    </Link>
                </Button>
            </motion.div>

        </section>
    );
};

export default Section3;