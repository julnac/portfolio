'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from "next/link";

export function Navigation() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-light">
            <div className='flex justify-between items-center uppercase p-12 min-w-full'>

                {/* Logo / Brand Name */}
                <Link className={`link ${pathname === '/' ? 'text-dark' : ''}`} href="/">
                    Julia Pozorska
                </Link>

                {/* Hamburger Menu Button for Mobile */}
                <button 
                    onClick={handleToggleMenu} 
                    className="flex flex-col justify-between items-stretch h-4 md:hidden">
                    <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
                    <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
                    <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
                </button>

                {/* Desktop Navigation */}
                <div className='hidden md:flex justify-between items-center w-2/6 text-gray'>
                    <NavLink href="/projects" isActive={pathname === '/projects'}>
                        Projects
                    </NavLink>
                    <NavLink href="/about" isActive={pathname === '/about'}>
                        About
                    </NavLink>
                    <NavLink href="/contact" isActive={pathname === '/contact'}>
                        Let's chat
                    </NavLink>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden flex flex-col items-center bg-light text-gray uppercase transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-60 py-4' : 'max-h-0'
                }`}
            >
                <NavLink href="/projects" isActive={pathname === '/projects'} onClick={() => setIsOpen(false)}>
                    Projects
                </NavLink>
                <NavLink href="/about" isActive={pathname === '/about'} onClick={() => setIsOpen(false)}>
                    About
                </NavLink>
                <NavLink href="/contact" isActive={pathname === '/contact'} onClick={() => setIsOpen(false)}>
                    Let's chat
                </NavLink>
            </div>
        </nav>
        
    );
  }

const NavLink = ({ href, isActive, children, onClick }: { href: string; isActive: boolean; children: React.ReactNode; onClick?: () => void }) => (
    <Link
        href={href}
        className={`px-3 py-2 text-sm font-medium ${isActive ? 'text-dark font-bold' : 'hover:text-dark'}`}
        onClick={onClick}
    >
        {children}
    </Link>
);