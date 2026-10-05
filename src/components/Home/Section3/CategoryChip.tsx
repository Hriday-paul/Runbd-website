"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type CategoryChipsProps = {
    categories: string[];
    defaultCategory?: string;
};

const CategoryChip = ({
    categories,
    defaultCategory = categories[0],
}: CategoryChipsProps) => {
    const [active, setActive] = useState(defaultCategory);

    return (
        <div className="mx-auto flex max-w-275 flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    aria-pressed={active === category}
                    onClick={() => setActive(category)}
                    className={cn(
                        "rounded-full px-4 py-2 text-sm transition-colors sm:px-3.5 sm:py-2 font-montserrat font-medium",
                        active === category
                            ? "bg-primary font-medium text-white"
                            : "bg-gray-50 text-primary-text hover:bg-gray-200 hover:text-black",
                    )}
                >
                    {category}
                </button>
            ))}
            <button
                type="button"
                className="px-2 py-2 text-sm font-medium text-brand hover:underline sm:text-base"
            >
                + More
            </button>
        </div>
    );
};


export default CategoryChip