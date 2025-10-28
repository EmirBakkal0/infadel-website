import React from "react";

export default function PregnancyWeightGain() {
  return (
    <div className="">
      <SH>Pregnancy Weight Gain: Finding Healthy Boundaries</SH>
      <SP>
        Pregnancy is a time of gentle transformation. Gaining weight during these months is expected, even essential — it’s part of how your body nurtures another life. Yet, it’s not just the quantity of weight that matters, but how and where those kilos are accumulated. A balanced gain supports both you and your baby on this journey.
      </SP>
      <SH2> Why Does Weight Increase During Pregnancy?</SH2>
      <SP>
        When we think of pregnancy weight gain, we often picture just the baby. But the increase is multifaceted. It includes:
      </SP>

      <ul className="list-disc list-inside">
        <li>Increased blood volume and body fluids
</li>
        <li>Growth of the placenta and amniotic fluid
</li>
        <li>Nourishing fat stores and energy reserves
</li>
        <li>Expansion of maternal tissues to support the growing baby
</li>
      </ul> 

      <SP>
        All these changes are purposeful — your body is adapting to provide what your baby and you need.
      </SP>
      <SP>
        Based on the 2009 IOM (Institute of Medicine) guidelines, recommended weight gain ranges depend on your pre-pregnancy BMI:
      </SP>
      <ul className="list-disc list-inside">
        <li>Underweight (BMI &lt; 18.5): 28-40 pounds (about 12.7-18.1 kg)</li>
        <li>Normal weight (BMI 18.5-24.9): 25-35 pounds (about 11.3-15.9 kg)</li>
        <li>Overweight (BMI 25-29.9): 15-25 pounds (about 6.8-11.3 kg)</li>
        <li>Obese (BMI ≥ 30): 11-20 pounds (about 5-9.1 kg)</li>
      </ul>

      <SP>
        These ranges are designed to balance the benefits and risks of too little or too much weight gain.
      </SP>

      <STip>
        ⚠️ Note: These are guidelines, not strict rules. Your physician or midwife will help tailor them to your individual health, body, and pregnancy.
      </STip>

      <SH2>Patterns Over the Trimesters</SH2>
      <SP>  
        <b>First Trimester (Weeks 1–12):</b> Gains tend to be minimal; some women even lose weight due to nausea or appetite changes.
      </SP>
      <SP>  
          <b>First Trimester (Weeks 1–12):</b> Gains tend to be minimal; some women even lose weight due to nausea or appetite changes.
        </SP><SP>  
          <b>Second Trimester (Weeks 13–26):</b>Weight gain usually accelerates. Many women gain around 0.3–0.5 kg per week.
        </SP><SP>  
          <b>Third Trimester (Weeks 27–40):</b> The baby is growing rapidly, and additional weight comes from all supporting systems. The weekly increase may taper a bit toward the end.
        </SP>

      <SH2>Final Thought: Growth with Grace</SH2>
      <SP>
        Your body is doing an incredible job carrying and nurturing a new life. Weight gain in pregnancy is natural and beneficial — but its path is not a race. It’s about mindful growth, supporting your health and your baby’s development with respect and care.
      </SP>
      <SP>
        In every extra gram, remember — it’s part of a loving, life‑affirming journey.

      </SP>
      

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
    <header className=" mt-4">
      <h2 className="text-2xl font-bold mb-4">{children}</h2>
    </header>
  );
}
function SP({ children }) {
  return <p className="mb-4">{children}</p>;
}

function STip({ children }) {
  return <strong className=" text-yellow-600 ">{children}</strong>;
}
