import React from "react";

export default function PreExercise() {
  return (
    <div className="">
      <SH>Pre‑Pregnancy Exercise: Prepare Your Body and Mind for Birth</SH>
      <div className=" flex justify-center  mb-10">
        <img src="/support/exercise.jpg" alt="Pre Pregnancy Exercise" width={640}/>
      </div>
      <SP>
        Pregnancy may be one of life’s most special journeys. Yet before
        embarking on this path, thoughtful preparations can greatly influence
        the health of both the mother-to-be and the baby. Among the most
        important of these preparations is adopting regular exercise and an
        active lifestyle.
      </SP>
      <SH2>Why Does Pre‑Pregnancy Exercise Matter?</SH2>
      <SP>
        Many women focus on physical activity only during or after pregnancy.
        However, exercising before conception is one of the most effective ways
        to prepare your body for what’s ahead.
      </SP>
      <SP>
        The stronger, more flexible, and more balanced your body is, the more
        comfortable your pregnancy journey will be.
      </SP>
      <SH2>Benefits of Pre‑Pregnancy Exercise</SH2>

      <SH3>1. Enhances Fertility</SH3>
      <SP>
        Regular exercise positively influences hormonal balance. Conditions such
        as excess weight or insulin resistance may negatively affect ovulation.
        An active lifestyle can help regulate the menstrual cycle and increase
        the chances of conceiving.
      </SP>
      <SH3>2. Reduces Stress and Calms the Mind</SH3>
      <SP>
        During exercise, endorphins (the “feel-good” hormones) are released,
        balancing mood and reducing anxiety. It’s a natural way to cope with the
        stress that can accompany planning a pregnancy.
      </SP>

      <SH3>3. Strengthens and Prepares the Body</SH3>
      <SP>
        Strengthening pelvic floor, back, abdominal, and leg muscles helps
        prevent discomfort during pregnancy and eases the birthing process.
      </SP>
      <SH3>4. Supports Healthy Weight Control</SH3>
      <SP>
        Reaching and maintaining a healthy weight before pregnancy reduces risks
        during gestation. Exercise can help you lose excess weight or maintain
        your target weight.
      </SP>

      <SH3>5. Improves Sleep Quality </SH3>

      <SP>
        Regular movement aids in falling asleep and promotes deeper, more
        restorative sleep — boosting both mental and physical resilience.
      </SP>
       <SH3>6. Enhances Metabolic Health</SH3>

      <SP>
        Physical activity enhances insulin sensitivity and metabolic balance. This is especially beneficial in conditions like PCOS (polycystic ovary syndrome), potentially improving fertility.
      </SP>
       <SH3>7. Boosts Self‑Confidence</SH3>

      <SP>
      A healthy connection with your body strengthens the confidence needed during pregnancy. An expectant mother who knows and trusts her body faces this journey more serenely.
      </SP>


      <SH2>Which Exercises Are Suitable?</SH2>
      <SP>
        During pre‑pregnancy, prioritize sustainable and safe movements over high-intensity workouts. Here are some recommended types:
      </SP>

      <ul className="list-disc list-inside">
        <li>
         Walking - The simplest and most effective form of cardio. A brisk 30‑minute walk daily is sufficient.
        </li>
        <li>Yoga - Supports breathing, flexibility, and mental balance. Prenatal yoga techniques are especially beneficial.</li>
        <li>
         Pilates - Helps strengthen the abdominal and pelvic regions.
        </li>
        <li>
          Swimming - Gentle on joints and engages the entire body.
        </li>
        <li>Dance and light aerobic exercises - Fun and muscle-activating.</li>
      </ul>
      <STip>
        Note: It is important to consult a physician before starting any exercise plan, especially if you have an existing health condition.
      </STip>
      <SH2>Conclusion: Take Action Today for a Healthier Tomorrow</SH2>

      <SP>
        Remember, preparing for pregnancy is not just about test results. By preparing your body, mind, and spirit for this transformation, you pave the way for a more comfortable, peaceful, and healthy pregnancy.
      </SP>
    
      <SP>
        Every step you take is a meaningful investment — for you and for your future baby.
      </SP>

      <STip>
         A Gentle Reminder: “Caring for yourself now is the first act of love you offer the child to come.”
      </STip>
      
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
