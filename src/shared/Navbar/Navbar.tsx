"use client"
// import { Link } from '@/i18n/navigation';
import { FaFacebookF, FaInstagram, FaRegUser, FaTwitter } from "react-icons/fa"
import SmNavSheet from "./SmNavsheet"
import logo from "@/assets/logo.png"
import Image from 'next/image'
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"


export const navitems = [
    {
        id: 1,
        rout: "/",
        label: "Home"
    },
    {
        id: 2,
        rout: "/shop",
        label: "Shop"
    },
    {
        id: 4,
        rout: "/contact",
        label: "Contact"
    },
]

function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const handlePostAdd = () => {
        router.push(`/vendor/post-ad`);
    }
    const handleMoveProfile = () => {
        router.push(`/profile`);
    }

    return (

        <>

            <div className='bg-white shadow-md sticky top-0 z-50 border-y border-zinc-100 left-0'>
                <div className='container'>
                    <div className=' flex flex-row justify-between items-center gap-x-5'>
                        <Link href={"/"}>
                            <div className="flex flex-row gap-x-1 items-center">
                                <Image src={logo} alt='logo' className='h-12 md:h-16 xl:h-20 w-auto object-cover' />
                                <p className="font-montserrat text-text-blue font-bold text-3xl">DigiMart</p>
                            </div>
                        </Link>

                        <ul className='lg:flex flex-row gap-x-5 lg:gap-x-8 items-center hidden'>


                            {navitems?.map(i => {
                                return <li key={i?.id} className='font-montserrat text-base text-gray-800 font-medium hover:text-primary duration-200'>
                                    <Link href={i?.rout}>
                                        {i?.label}
                                    </Link>
                                </li>
                            })}

                        </ul>

                        <div className="flex flex-row gap-x-2.5 md:gap-x-4 lg:gap-x-5 items-center">

                            <button onClick={handlePostAdd} className="group relative inline-flex py-2 text-sm md:text-base items-center justify-center rounded-full bg-primary px-3 md:px-5 font-normal text-white transition hover:scale-105 cursor-pointer font-montserrat overflow-hidden">
                                {/* <span>+ {t("btn")}</span> */}
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                    <div className="relative h-full w-8 bg-white/20"></div>
                                </div>
                            </button>


                            <button onClick={handleMoveProfile} className='cursor-pointer bg-slate-50 border border-stroke rounded-full p-2.5'>
                                <FaRegUser className="text-lg md:text-xl text-gray-800" />
                            </button>

                            <section className='lg:hidden'>
                                <SmNavSheet />
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar