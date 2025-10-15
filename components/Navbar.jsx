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
    { href: "/products", label: "Products", type: "link" },
    { href: "/support", label: "Support Topics", type: "link" },
    { href: "/about", label: "About", type: "link" },
    { type: "button" }, // ContactButton
  ];

  return (
    <nav className='sticky top-0 w-full bg-[#F7AF9D] z-50 opacity-90 shadow-md h-24'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center p-5'>
        {/* Logo */}
        <Link href="/">
          <img src="infadel.png" alt="Infadel Logo" className='h-13 rounded-2xl p-1 ' />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-10 items-center'>
          {menuItems.map((item, index) => (
            <li key={item.href || `button-${index}`}>
              {item.type === "button" ? (
                <ContactButton />
              ) : (
                <Link href={item.href} className={"text-[var(--foreground)] text-lg hover:opacity-70 transition-opacity"}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden flex flex-col gap-1.5 z-50 relative'
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className='w-6 h-0.5 bg-white block'
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className='w-6 h-0.5 bg-white block'
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className='w-6 h-0.5 bg-white block'
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
                    key={item.href || `button-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.type === "button" ? (
                      <ContactButton />
                    ) : (
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className=' text-lg block hover:opacity-70 transition-opacity'
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
      
    </nav>
  )
}

export default Navbar