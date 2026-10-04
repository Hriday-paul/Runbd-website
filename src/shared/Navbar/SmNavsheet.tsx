"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { RiMenu3Fill } from 'react-icons/ri';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { navitems } from './Navbar';
import Image from 'next/image';
import logo from "@/assets/logo.png";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { ChevronDown } from "lucide-react";
import Link from "next/link";



const SmNavSheet = () => {

    const routes = navitems;

    return (
        <div>
            <Sheet>
                <SheetTrigger className='border border-zinc-200 p-1 md:p-1.5 rounded cursor-pointer hover:bg-zinc-100 duration-150'>
                    <RiMenu3Fill className="text-xl md:text-2xl text-black" />
                </SheetTrigger>
                <SheetContent side={'right'} className="overflow-y-auto [&::-webkit-scrollbar]:w-1.5
[&::-webkit-scrollbar-track]:bg-white
[&::-webkit-scrollbar-thumb]:bg-gray-300
[&::-webkit-scrollbar-thumb]:rounded-full">
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription />

                        <div className=''>

                            <SheetTrigger>
                                <Link href={"/"}>
                                    <Image src={logo} alt='logo' className='h-12 w-auto object-cover' />
                                </Link>
                            </SheetTrigger>

                            <ul className="my-3">
                                <li className='font-montserrat text-base text-gray-800 font-normal hover:text-primary duration-200'>
                                    <Link href={"/"} className="border-b border-b-stroke py-4 font-montserrat text-sm text-black flex flex-row gap-x-1 items-center group duration-300 cursor-pointer">
                                        <SheetTrigger className="w-full flex flex-row gap-x-1 items-center cursor-pointer">
                                            {/* <p className="text-black text-xl font-montserrat">{t("home")}</p> */}
                                            <FaArrowLeftLong className="text-black block rotate-180 ml-1 group-hover:ml-2.5 duration-200" />
                                        </SheetTrigger>
                                    </Link>
                                </li>


                                <li className="py-4 border-b border-b-stroke ">
                                    <Menubar className="border-none shadow-none bg-transparent">
                                        <MenubarMenu>
                                            <MenubarTrigger className="font-normal text-black text-xl font-montserrat">
                                                {/* {t("categories")} */}
                                                <ChevronDown className="ml-2" size={20} />
                                            </MenubarTrigger>
                                            <MenubarContent className='p-0 rounded'>
                                                {/* {categories?.map(
                                                    (category, idx: number) => (
                                                        <div key={idx}>
                                                            <Link
                                                                href={category?.rout}
                                                                className='cursor-pointer'
                                                            >
                                                                <SheetTrigger>
                                                                    <MenubarItem className="cursor-pointer rounded-none py-3 px-4 w-60">
                                                                        <div className='flex flex-row gap-x-2 items-center'>
                                                                            <Image src={category?.icon} alt="runbd category icon" className="h-3 w-auto mx-auto" />
                                                                            <p className='font-montserrat'>{tc(category.name)}</p>
                                                                        </div>
                                                                    </MenubarItem>
                                                                </SheetTrigger>
                                                            </Link>
                                                            <hr />
                                                        </div>
                                                    ),
                                                )} */}
                                            </MenubarContent>
                                        </MenubarMenu>
                                    </Menubar>
                                </li>

                                {
                                    routes?.map(item => {
                                        return <li
                                            key={item?.id} className='text-base relative group my-2'>
                                            <Link href={item?.rout} className="border-b border-b-stroke py-4 font-montserrat text-sm text-black flex flex-row gap-x-1 items-center group duration-300 cursor-pointer">
                                                <SheetTrigger className="w-full flex flex-row gap-x-1 items-center cursor-pointer">
                                                    {/* <p className="text-black text-xl font-montserrat">{t(item?.label)}</p> */}
                                                    <FaArrowLeftLong className="text-black block rotate-180 ml-1 group-hover:ml-2.5 duration-200" />
                                                </SheetTrigger>
                                            </Link>
                                        </li>
                                    })
                                }

                            </ul>

                        </div>

                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
};


export default SmNavSheet;