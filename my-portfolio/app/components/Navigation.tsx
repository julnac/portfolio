'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from "next/link";
import {MdClose} from "react-icons/md";
import {TbDotsVertical} from "react-icons/tb";

export function Navigation() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/contact", label: "Let's chat" },
    ];

    return (
        <nav className="bg-background fixed top-0 left-0 w-full z-50">
            <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
                <Link
                    href="/projects"
                    className='nav-text'
                >
                    Julia Pozorska
                </Link>

                <div className="hidden md:flex space-x-12 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-text hover:text-primary transition-colors ${pathname === link.href ? 'text-foreground' : 'text-muted'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* <ThemeSwitch/> */}
                </div>

                <div className="flex md:hidden space-x-6 items-center">
                    {/*<ThemeSwitch/>*/}
                    <button onClick={toggleMenu}>
                        {isOpen ? <MdClose className="w-5 h-5 text-foreground"/> :
                            <TbDotsVertical className="w-5 h-5 text-foreground"/>}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col space-y-2 bg-background w-full mt-2 border-b-0.2 border-mutedBackground">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block text-lg px-4 py-2 mx-2 ${
                                pathname === link.href
                                    ? "text-primary"
                                    : "text-foreground hover:bg-mutedBackground hover:rounded-sm"
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>

    );
}
