import React from 'react';
import { notFound } from 'next/navigation';
import Ppn from './ppn'

// Generate static paths for all support categories
export async function generateStaticParams() {
  const categories = [
    'nutrition',
    'exercise',
    'mhealth',
    'psigns',
    'pcalendar',
    'pnutrition',
    'pexercise',
    'pweight',
    'pmental',
    'postpartum',
    'breastfeeding',
    'newborn-feedings',
    'weight-gain-newborns',
    'newborn-sleep',
    'baby-feeding',
    'feeding-problems'
  ]

  return categories.map((cat) => ({
    cat: cat,
  }))
}

export default function SupportCategory({ params }) {
  const { cat } = params

  // Define content for each category
  const categoryContent = {
    'nutrition': {
      title: 'Pre-Pregnancy Nutrition',
      content: 'Information about nutrition before pregnancy...'
    },
    'exercise': {
      title: 'Pre-Pregnancy Exercise',
      content: 'Information about exercise before pregnancy...'
    },
    'mhealth': {
      title: 'Pre-Pregnancy Mental Health',
      content: 'Information about mental health before pregnancy...'
    },
    'psigns': {
      title: 'Pregnancy Signs',
      content: 'Information about pregnancy signs...'
    },
    'pcalendar': {
      title: 'Pregnancy Calendar',
      content: 'Information about pregnancy calendar...'
    },
    'pnutrition': {
      title: 'Nutrition During Pregnancy',
      content: 'Information about nutrition during pregnancy...'
    },
    'pexercise': {
      title: 'Exercise During Pregnancy',
      content: 'Information about exercise during pregnancy...'
    },
    'pweight': {
      title: 'Pregnancy Weight Gain',
      content: 'Information about weight gain during pregnancy...'
    },
    'pmental': {
      title: 'Mental Health During Pregnancy',
      content: 'Information about mental health during pregnancy...'
    },
    'postpartum': {
      title: 'Postpartum Recovery',
      content: 'Information about postpartum recovery...'
    },
    'breastfeeding': {
      title: 'Breastfeeding & Ideal Positions',
      content: 'Information about breastfeeding...'
    },
    'newborn-feedings': {
      title: 'Newborn Feedings',
      content: 'Information about newborn feedings...'
    },
    'weight-gain-newborns': {
      title: 'Weight Gain in Newborn Babies',
      content: 'Information about weight gain in newborns...'
    },
    'newborn-sleep': {
      title: 'Newborn Sleep',
      content: 'Information about newborn sleep...'
    },
    'baby-feeding': {
      title: 'Baby Feeding',
      content: 'Information about baby feeding...'
    },
    'feeding-problems': {
      title: 'Feeding Problems in Newborns and Babies',
      content: 'Information about feeding problems...'
    }
  }

  const content = categoryContent[cat]

  if (!content) {
    notFound()
  }

  return (
    <div
      className="h-screen pt-32 "
      style={{
        backgroundImage: "url('/support.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" py-10 p-5 rounded-2xl container mx-auto flex justify-center items-center z-5  bg-gray-200 opacity-80">
        {/* Category: {cat} */}

        {cat==="nutrition" && <Ppn />}
        {cat!=="nutrition" && <h1 className="text-3xl font-bold text-center">Content coming soon!</h1>}  
        
        
      </div>
    </div>
  );
}
