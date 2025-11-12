import React from 'react'

function BabyFeeding() {
  return (
    <div>
      <SH>Baby Feeding</SH>
      <div className=" flex justify-center  mb-10">
        <img src="/support/baby-feeding.jpg" alt="Breastfeeding & Ideal Positions" width={640} />
      </div>
      <SP>
        Proper nutrition is vital for a baby's healthy growth and development. Nutritional needs change at each stage of life. Here is a month-by-month basic feeding guide:
      </SP>

      <SH2>👶 0–6 Months: Exclusive Breastfeeding</SH2>
      <SP>
        The World Health Organization recommends exclusive breastfeeding for the first 6 months. Breast milk strengthens the immune system, is easy to digest, and is uniquely tailored for each baby.
      </SP>
      <SP>
        Formula should only be introduced if breast milk is insufficient or not available, and always with a doctor's recommendation.
      </SP>
      <SP>
        Newborns are usually fed every 2–3 hours.
      </SP>

      <SH2>👶 6–12 Months: Transition to Solid Foods</SH2>
      <SP>
        From the 6th month, complementary foods along with breast milk (or formula) are recommended. The first solid foods to start with include: Vegetable purées (carrot, zucchini, potato), fruit purées (apple, pear, banana), yogurt, rice or corn-based baby cereals.
      </SP>

      <SH2>👶 1–2 Years: Adjusting to the Family Table</SH2>
      <SP>
        By this stage, the baby can adapt to the family table. A balanced diet should include vegetables, fruits, grains, meat, and dairy products.
      </SP>
      <SP>
        Encouraging self-feeding is important for developing independence and motor skills.
      </SP>

      <SH2>👶 2 Years and Beyond: Healthy Eating Habits</SH2>
      <SP>
        A balanced intake from all food groups is essential. Processed, sugary, and salty foods should be limited as much as possible. Drinking water regularly should become a habit. Appetite may vary; children should be guided toward healthy foods without pressure.
      </SP>

      <SH2>💡 Things to Keep in Mind</SH2>
      <SP>
        Babies should not be given packaged fruit juices, sugary snacks, or salty foods. Each new food should be introduced one at a time to monitor for possible allergic reactions. Regular weight and height checks should be done, and any concerns about nutrition should be discussed with a doctor.
      </SP>
    </div>
  )
}

export default BabyFeeding





function SH({ children }) {
  return (
    <header className="mb-12 text-center">
      <h1 className="text-4xl font-bold mb-6">{children}</h1>
    </header>
  );
}

function SH2({ children }) {
  return (
    <header className=" mt-4">
      <h2 className="text-2xl font-bold mb-4">{children}</h2>
    </header>
  );
}

function SH3({ children }) {
  return (
    <header className="mt-4">
      <h3 className="text-xl font-bold mb-4">{children}</h3>
    </header>
  );
}
function SP({ children }) {
  return <p className="mb-4">{children}</p>;
}

function STip({ children }) {
  return <strong className=" text-yellow-600 ">{children}</strong>;
}
