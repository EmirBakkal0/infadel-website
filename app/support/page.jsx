import React from 'react'
import SupportCard from '@/components/SupportCard'

function Support() {
  const supportData = {
    pregnancy: {
      title: "Pregnancy",
      sections: [
        {
          title: "Before Pregnancy",
          cards: [
            { header: "Pre-Pregnancy Nutrition", link: "/support/nutrition", img: "stock2.jpg" },
            { header: "Pre-Pregnancy Exercise", link: "/support/exercise", img: "stock1.jpg" },
            { header: "Pre-Pregnancy Mental Health", link: "/support/mhealth", img: "stock2.jpg" }
          ]
        },
        {
          title: "During Pregnancy",
          cards: [
            { header: "Pregnancy Signs", link: "/support/psigns" , img: "stock1.jpg" },
            { header: "Pregnancy Calendar", link: "/support/pcalendar" , img: "stock2.jpg" },
            { header: "Nutrition During Pregnancy", link: "/support/pnutrition", img: "stock1.jpg" },
            { header: "Exercise During Pregnancy", link: "/support/pexercise" , img: "stock2.jpg" },
            { header: "Pregnancy Weight Gain", link: "/support/pweight", img: "stock1.jpg"  },
            { header: "Mental Health During Pregnancy", link: "/support/pmental", img: "stock2.jpg"  }
          ]
        },
        {
          title: "Postpartum",
          cards: [
            { header: "Postpartum Recovery", link: "/support/postpartum" , img: "stock2.jpg" }
          ]
        }
      ]
    },
    newborn: {
      title: "Newborn Care",
      cards: [
        { header: "Breastfeeding & Ideal Positions", link: "/support/breastfeeding", img: "stock1.jpg" },
        { header: "Newborn Feedings", link: "/support/newborn-feedings", img: "stock1.jpg" },
        { header: "Weight Gain in Newborn Babies", link: "/support/weight-gain-newborns", img: "stock1.jpg" },
        { header: "Newborn Sleep", link: "/support/newborn-sleep", img: "stock1.jpg" },
        { header: "Baby Feeding", link: "/support/baby-feeding", img: "stock1.jpg" },
        { header: "Feeding Problems in Newborns and Babies", link: "/support/feeding-problems", img: "stock1.jpg" }
      ]
    }
  }

  return (
    <section className='min-h-screen py-12 px-4 font-[delius]'>
      <div className='container mx-auto max-w-7xl'> 
        {/* Page Header */}
        <div className='mb-12 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-black mb-4'>
            Support Topics
          </h1>
          <p className='text-lg text-gray-600'>
            Comprehensive guidance for every stage of your journey
          </p>
        </div>

        {/* Pregnancy Section */}
        <div className='mb-16'>
          <h2 className='text-4xl text-center font-bold mb-8 text-black pb-2'>
            {supportData.pregnancy.title}
          </h2>

          {supportData.pregnancy.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className='mb-12'>
              <h3 className='text-2xl font-semibold mb-6 text-gray-800'>
                {section.title}
              </h3>
              <div className='grid md:grid-cols-3 gap-6'>
                {section.cards.map((card, cardIndex) => (
                  <SupportCard
                    key={cardIndex}
                    header={card.header}
                    link={card.link}
                    img={card.img}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newborn Care Section */}
        <div className='mb-16'>
          <h2 className='text-4xl font-bold mb-8 text-center pb-2'>
            {supportData.newborn.title}
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {supportData.newborn.cards.map((card, cardIndex) => (
              <SupportCard
                key={cardIndex}
                header={card.header}
                link={card.link}
                img={card.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support