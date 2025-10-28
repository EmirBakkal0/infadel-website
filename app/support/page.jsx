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
            { header: "Pre-Pregnancy Nutrition", link: "/support/support-categories/pre-nutrition", img: "support/nutrition.jpg" },
            { header: "Pre-Pregnancy Exercise", link: "/support/support-categories/pre-exercise", img: "support/exercise.jpg" },
            { header: "Pre-Pregnancy Mental Health", link: "/support/support-categories/pre-mental-health", img: "support/mental-health.jpg" }
          ]
        },
        {
          title: "During Pregnancy",
          cards: [
            { header: "Pregnancy Signs", link: "/support/support-categories/pregnancy-signs" , img: "support/sign.jpg" },
            { header: "Pregnancy Calendar", link: "/support/support-categories/pregnancy-calendar" , img: "support/calendar.jpg" },
            { header: "Nutrition During Pregnancy", link: "/support/support-categories/nutrition-during-pregnancy", img: "support/nutrition2.jpg" },
            { header: "Exercise During Pregnancy", link: "/support/support-categories/exercise-during-pregnancy" , img: "support/exercise-p.jpg" },
            { header: "Pregnancy Weight Gain", link: "/support/support-categories/pregnancy-weight-gain", img: "support/pregnancy.jpg"  },
            { header: "Mental Health During Pregnancy", link: "/support/support-categories/mental-health-during-pregnancy", img: "support/mental-health2.jpg"  }
          ]
        },
        {
          title: "Postpartum",
          cards: [
            { header: "Postpartum Recovery", link: "/support/support-categories/postpartum" , img: "stock2.jpg" }
          ]
        }
      ]
    },
    newborn: {
      title: "Newborn Care",
      cards: [
        { header: "Breastfeeding & Ideal Positions", link: "/support/support-categories/breastfeeding", img: "stock1.jpg" },
        { header: "Newborn Feedings", link: "/support/support-categories/newborn-feedings", img: "support/newborn-feeding.jpg" },
        { header: "Weight Gain in Newborn Babies", link: "/support/support-categories/weight-gain-newborns", img: "support/baby.jpg" },
        { header: "Newborn Sleep", link: "/support/support-categories/newborn-sleep", img: "support/baby-sleeping.jpg" },
        { header: "Baby Feeding", link: "/support/support-categories/baby-feeding", img: "support/baby-feeding.jpg" },
        { header: "Feeding Problems in Newborns and Babies", link: "/support/support-categories/feeding-problems", img: "support/baby-feeding2.jpg" }
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