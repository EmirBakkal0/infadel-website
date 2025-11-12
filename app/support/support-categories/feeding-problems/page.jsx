import React from 'react'

export default function FeedingProblems() {
  return (
    <div>
      <SH>Feeding Problems in Newborns and Babies</SH>
        <div className="flex justify-center  mb-10">
        <img src="/support/baby-feeding2.jpg" alt="Feeding Problems in Newborns and Babies" width={640} />

      </div>
      <SP>
        Feeding is very important for both the healthy development of babies and the peace of mind of parents. However, not every baby feeds in the same way, and in some cases, feeding problems may occur. Here are the most common feeding problems and their solutions:
      </SP>

      <SH2>🤱 1. Breastfeeding Problems</SH2>
      <SP>
        Difficulty latching: If the baby cannot latch onto the breast correctly, the mother may feel pain and the baby may not get enough milk. Different breastfeeding positions should be tried, and if necessary, support should be sought from a lactation consultant.
      </SP>

      <SH2>🍼 2. Concerns About Low Milk Supply</SH2>
      <SP>
        Some mothers may think their milk is not enough. The real indicators are the baby's weight gain and having 6–8 wet diapers per day. Frequent breastfeeding increases milk production. If needed, formula can be given under the supervision of a doctor.
      </SP>

      <SH2>😣 3. Colic</SH2>
      <SP>
        The baby may cry for long periods, especially in the evenings, and may have abdominal bloating and gas problems. The baby should be burped after each feeding.
      </SP>
      <SP>
        If the mother is breastfeeding, she should avoid gas-producing foods. Abdominal massage, baby massage, and holding the baby can provide relief.
      </SP>

      <SH2>🤢 4. Reflux</SH2>
      <SP>
        Symptoms include frequent vomiting, fussiness, and coughing after feeding. It is important to keep the baby upright after feeding.
      </SP>
      <SP>
        Small but frequent feedings may be necessary. In severe cases, consult a doctor.
      </SP>

      <SH2>🌡️ 5. Allergies and Food Intolerance</SH2>
      <SP>
        Symptoms may include skin rashes, diarrhea, constipation, and excessive fussiness.
      </SP>
      <SP>
        New foods should be given one at a time and in small amounts. If there is any doubt, consult a doctor and have allergy tests done if necessary.
      </SP>

      <SH2>🚼 6. Constipation</SH2>
      <SP>
        This is often seen especially during the transition to solid foods.
      </SP>
      <SP>
        Water intake should be increased, and fiber-rich foods (vegetable and fruit purées) should be preferred. Laxatives or medication should not be given without a doctor's advice.
      </SP>

      <SH2>💡 Conclusion</SH2>
      <SP>
        Every baby is different, and feeding problems can appear in different ways in each family. Parents should be patient, observe the symptoms closely, and seek professional support when necessary.
      </SP>
    </div>
  )
}


function SH({ children }) {
  return (
    <header className="mb-5 text-center">
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
