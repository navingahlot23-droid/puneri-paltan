import '../css/header.css'
import { useState, useEffect } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import logo from "../assets/logo.gif"
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigation = [
        {
            name: 'Players',
            href: '/players',
            target: "_self"
        },
        {
            name: 'Standings',
            href: '/standings',
            target: "_self"
        },
        {
            name: 'Paltan World',
            href: '/paltan-world',
            target: "_self"
        },
        {
            name: 'Tickets',
            href: 'https://www.district.in/events/pkl-2025-chennai-team',
            target: "_blank"
        }
    ];

    // Header scroll up and down
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }

            lastScroll = currentScroll <= 0 ? 0 : currentScroll; // prevent negative
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header w-full fixed z-99 mx-auto transition-all duration-500 ease-in ${scrollDirection === "down" ? "nav-up top-[-150px]" : "nav-down  top-5 md:top-[30px]"}`}>
            <nav aria-label="Global" className="lg:skew-x-[-15deg] lg:transform bg-black/30 w-[90%]  h-[70px] md:h-[100px] relative mx-auto flex items-center  md:p-4 lg:gap-42 justify-between lg:justify-start max-[767px]:w-[95%]">
                <div className='lg:transform lg:skew-x-18'>
                    <Link to="/" className="mt-[-30px] md:mt-[-37px] md:p-1.5 h-[70px] md:h-[100px]">
                        <span className="sr-only">Puneri Paltan</span>
                        <img
                            alt="Puneri Paltan Logo"
                            src={logo} className='max-[767px]:-ml-2.5 max-[767px]:w-[90px]'
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-[15px] text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-5 lg:transform lg:skew-x-18">
                    {navigation.map((item) => (
                        <NavLink key={item.name} to={item.href} target={item.target} className={({ isActive }) => isActive ? 'tracking-[3px] capitalize text-[15px] italic text-primary-500 text-center font-[Exo] font-semibold transition-all duration-500 ease-out' : 'tracking-[3px] capitalize text-[15px] italic text-white hover:text-primary-500 text-center font-[Exo] font-semibold transition-all duration-500 ease-out'}>
                            {item.name}
                        </NavLink>
                    ))}
                </PopoverGroup>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                {/* <div className="fixed inset-0 z-50" /> */}
                <DialogPanel className="fixed top-0 left-0 w-full h-full z-100 overflow-y-auto bg-black p-6">
                    <div className="text-right">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className='flex flex-col items-center gap-6'>
                        {navigation.map((item) => (
                            <NavLink onClick={() => setMobileMenuOpen(false)} key={item.name} to={item.href} target={item.target} className={({ isActive }) => isActive ? 'tracking-[3px] capitalize text-[15px] italic text-primary-500 font-[Exo] font-semibold transition-all duration-500 ease-out' : 'tracking-[3px] capitalize text-[15px] italic text-white hover:text-primary-500 font-[Exo] font-semibold transition-all duration-500 ease-out'}>
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
