"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import ContactButton from './ContactButton';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "/products", label: "Products" },
    { href: "/support", label: "Support Topics" },
    { href: "/about", label: "About" },
    // { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className='container mx-auto '>
      <div className='flex justify-between items-center p-5'>
        {/* Logo */}
        <Link href="/">
          <img src="infadel.png" alt="Infadel Logo" className='h-13 bg-white rounded-2xl p-1 ' />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-10 items-center'>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={"text-white text-lg hover:opacity-70 transition-opacity"}>
                {item.label}
              </Link>
              
            </li>
          ))}
                <ContactButton />

        </ul>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden flex flex-col gap-1.5 z-50 relative'
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className='w-6 h-0.5 bg-logo block'
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className='w-6 h-0.5 bg-logo block'
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className='w-6 h-0.5 bg-logo block'
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className='fixed inset-0 bg-black/50 z-40 md:hidden'
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className='fixed top-0 right-0 h-full w-64 bg-[var(--background)] shadow-lg z-40 md:hidden'
            >
              <ul className='flex flex-col gap-6 p-8 mt-20'>
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className='text-logo text-lg block hover:opacity-70 transition-opacity'
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <ContactButton />
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar