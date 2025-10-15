import React from 'react'
import Link from 'next/link'

function SupportCard(props) {
  return (
    <div className='group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-logo/30'>
      {/* Image Container */}
      {props.img && (
        <div className='relative h-48 overflow-hidden'>
          <img 
            src={props.img} 
            alt={props.header} 
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
        </div>
      )}
      
      {/* Content Container */}
      <div className='p-6'>
        {/* Header */}
        <h3 className='text-xl font-semibold text-gray-800 mb-3 group-hover:text-logo transition-colors duration-300'>
          {props.header}
        </h3>
        
        {/* Description */}
        {props.p && (
          <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
            {props.p}
          </p>
        )}
        
        {/* Learn More Link */}
        <Link 
          href={props.link}
          className='inline-flex items-center gap-2 text-logo font-medium hover:gap-3 transition-all duration-300 group/link'
        >
          Learn More 
          <svg 
            className='w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300' 
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default SupportCard