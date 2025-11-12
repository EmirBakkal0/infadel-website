import React from "react";

export default function WeightGainNewborns() {
  return (
    <div >
      <SH>Weight Gain in Newborn Babies</SH>
      <div className=" flex justify-center  mb-10">
        <img src="/support/baby.jpg" alt="Weight Gain in Newborn Babies" width={640} />
      </div>

      <SP>
        A newborn enters a period of growth and development from the moment they are born. In this process, gaining weight is one of the most basic indicators of the baby's nutrition and health. However, every baby is different; therefore, trends and growth curves are as important as raw numbers.
      </SP>

      <SH2>📉 Weight Loss and Recovery in the Early Days</SH2>
      <SP>
        Babies generally lose 5–10% of their birth weight after birth. This is considered normal.
      </SP>
      <SP>
        This weight loss is expected to be recovered within 10–14 days after birth.
      </SP>
      <SP>
        If significant weight loss occurs, then feeding method, breastfeeding technique, or health condition should be reviewed.
      </SP>

      <SH2>📆 Expected Rate of Weight Gain</SH2>
      <SP>
        In the first months, weight gain is rapid; over time this rate slows:
      </SP>
      <SP>
        In the first several months: gaining approximately 140–200 grams per week is expected.
      </SP>
      <SP>
        At 3–4 months: there is a tendency to reach double the birth weight.
      </SP>
      <SP>
        By 12 months: many babies weigh about three times their birth weight.
      </SP>

      <SH2>📊 Why Each Baby's Gain Differs</SH2>
      <SP>
        Weight gain is not just related to nutrition; many factors play a role:
      </SP>
      <SP>
        Whether the baby is breastfed or formula‑fed
      </SP>
      <SP>
        The baby's metabolism and genetic makeup
      </SP>
      <SP>
        Breastfeeding technique, latch quality
      </SP>
      <SP>
        Health conditions (e.g. reflux, digestive issues)
      </SP>
      <SP>
        Activity level
      </SP>

      <SH2>✅ Tips & Observations to Watch</SH2>
      <SP>
        The number of wet and dirty diapers is a good indicator of whether the baby is being fed adequately (for example, 5‑7 wet diapers per day).
      </SP>
      <SP>
        If signs such as mouth closed, restlessness during feeding, weak latch, or frequent vomiting appear, consult a lactation consultant.
      </SP>
    </div>
  );
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
    <header className=" mt-4">
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
