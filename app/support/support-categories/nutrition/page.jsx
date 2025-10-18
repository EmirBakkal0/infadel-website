import React from "react";

export default function Nutrition() {
  return (
    <div className="font-[delius]">
      <SH>Pre Pregnancy Nutrition: Preparing for a New Chapter in Life</SH>
      <SP>
        Pregnancy is not just the process of bringing a baby into the world — it
        is also a unique time of physical, emotional, and mental transformation.
        Preparing for this journey in a healthy way is one of the greatest gifts
        a woman can give herself and her future baby. One of the key foundations
        of this preparation is nutrition.
      </SP>
      <SH2>Why Is Pre-Pregnancy Nutrition Important?</SH2>
      <SP>
        Many women believe that they only need to pay attention to their
        nutrition after becoming pregnant. However, a woman's dietary habits
        before conception can influence both fertility and the risks associated
        with pregnancy.
      </SP>
      <SP>
        Eating the right foods at the right time can have lasting effects on the
        baby’s development, the mother’s immunity, and her overall well-being. A
        healthy beginning is the foundation for a healthy journey.
      </SP>
      <SH2>1. The Power of Balanced Nutrition</SH2>
      <SP>
        A well-balanced diet is essential for overall health and well-being,
        especially when preparing for pregnancy. This means incorporating a
        variety of foods from all food groups to ensure you’re getting a wide
        range of nutrients.
      </SP>
      <SP>
        During pregnancy, your body essentially works for two. That’s why it’s
        crucial to correct any deficiencies before conception. Iron: Deficiency
        can lead to fatigue, weakness, and a weakened immune system. Vitamin B12
        and Vitamin D: Crucial for the nervous system and bone health. Iodine:
        Supports thyroid function and brain development. Calcium: Important for
        the baby's bone and teeth development.
      </SP>
      <ul className="list-disc list-inside">
        <li>
          Fruits and vegetables: Rich in vitamins, minerals, and fiber. They
          support the immune system.
        </li>
        <li>Whole grains: Provide energy and aid digestion.</li>
        <li>
          Protein sources: Meat, poultry, fish, eggs, legumes — all support cell
          regeneration.
        </li>
        <li>
          Healthy fats: Olive oil, avocado, walnuts, almonds — essential for
          hormone balance.
        </li>
        <li>Dairy products: High in calcium, support bone development.</li>
      </ul>
      <STip>
         Tip: The more colorful your plate, the more diverse and nutritious your meal!
      </STip>
      <SH2>2. Folic Acid: Your Baby’s First Protector</SH2>

        <SP>Folic acid plays a critical role in preventing neural tube defects and supporting the baby's nervous system development. </SP>
        <ul>
            <li>Start taking folic acid at least 3 months before conception.</li>
            <li>400 mcg per day is generally recommended.</li>
            <li>Found in leafy green vegetables, legumes, and whole grains.</li>
        </ul>



        <SH2>
            3. Replenish Your Vitamin and Mineral Stores
        </SH2>
        <ul>
            <li>Iron: Deficiency can lead to fatigue, weakness, and a weakened immune system.</li>
            <li>Calcium: Important for the baby's bone and teeth development.</li>
            <li>Vitamin B12 and Vitamin D: Crucial for the nervous system and bone health.</li>
            <li>Iodine: Supports thyroid function and brain development.</li>
        </ul>
        <STip>🩺 Advice: Get a blood test under your doctor’s guidance before pregnancy to identify deficiencies and create a personalized nutrition plan.
        </STip>

        <SH2>4. Achieve a Healthy Weight</SH2>
        <SP>
            Being underweight or overweight can increase certain risks during pregnancy. Reaching a healthy Body Mass Index (BMI) through proper nutrition and exercise is beneficial.
        </SP>

        <STip>
            Gentle physical activities like walking, yoga, or pilates can help prepare your body for pregnancy and childbirth.
        </STip>

        <SH2>5. Say Goodbye to Harmful Habits</SH2>
        <SP>
            Once you begin planning for pregnancy, it’s important to leave behind certain habits:
        </SP>
        <ul className="list-disc list-inside">
            <li>Smoking can decrease fertility and harm the baby's development.</li>
            <li>Alcohol consumption is strictly discouraged during pregnancy.</li>
            <li>Excessive caffeine should also be avoided — aim for less than 200 mg per day.</li>
            <STip>
                Think of this time as a "cleansing phase" — one that will nourish both your body and your mind.
            </STip>
        </ul>


    </div>
  );
}

function SH({ children }) {
  return (
    <header className="mb-12 text-center">
      <h1 className="text-4xl font-bold mb-6">{children}</h1>
    </header>
  );
}

function SH2({ children }) {
  return (
    <header className="mb-8 mt-4">
      <h2 className="text-2xl font-bold mb-4">{children}</h2>
    </header>
  );
}
function SP({ children }) {
  return <p className="mb-4">{children}</p>;
}

function STip({ children }) {
    return (
        <strong className=" text-yellow-600 " >{children}</strong>
    )
}