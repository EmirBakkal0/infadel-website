import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className='container mx-auto '>
      <ul className=' flex gap-10 p-5 items-center '>
        <li>
            <Link href="/">
                <img src="infadel.png" alt="Infadel Logo" className='h-13 ' />
            </Link>
        </li>
        <li>
            <Link href="/products" className='text-logo text-lg'>Products</Link>
        </li>
        <li>
            <Link href="/support" className='text-logo text-lg'>Support Topics</Link>
        </li>
        <li>
            <Link href="/about" className='text-logo text-lg'>About</Link>
        </li>
        <li>
            <Link href="/contact" className='text-logo text-lg'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}



export default Navbar