export type Service = {
  slug: string;
  title: string;
  category: string;
  price: number;
  image: string;
};

export const serviceCategories = [
  "AI Tools",
  "Software",
  "Design",
  "Streaming",
  "VPN",
];

const base = {
  price: 25,
};

export const services: Service[] = [
  {
    ...base,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/serviceImg.webp",
    category: "Design",
  },
  {
    ...base,
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    category: "Software",
    image: "/serviceImg.webp",
  },
  {
    ...base,
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    category: "AI Tools",
    image: "/serviceImg.webp",
  },
  {
    ...base,
    slug: "balancing-productivity-and-focus",
    title: "Balancing Productivity and Focus",
    category: "Streaming",
    image: "/serviceImg.webp",
  },
  {
    ...base,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    category: "VPN",
    image: "/serviceImg.webp",
  },
  {
    ...base,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    category: "Software",
    image: "/serviceImg.webp",
  },
];