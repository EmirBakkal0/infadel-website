import React from "react";

export default function PregnancyExercise() {
  return (
    <div className="">
      <SH>Exercise During Pregnancy: Move Your Body with Love</SH>
      <SP>
        Pregnancy is not just a physical transformation; it's a spiritual journey, a process of rediscovery. To experience this special period in a healthier, more comfortable, and stronger way, exercising can be one of the gentlest gifts you give your body.
      </SP>
      <SH2>Benefits of Exercise During Pregnancy</SH2>
      <SH3>Reduces Pain and Discomfort</SH3>
      <SP>
       Back, hip, and lower back pain are common during pregnancy. Light and regular exercise can strengthen muscles and help relieve these discomforts.
      </SP>

      <SH3>Supports the Digestive System</SH3>
      <SP>
        Digestion problems like constipation and bloating are common in pregnancy. Movement can stimulate your digestive system and help reduce these issues.
      </SP>


      <SH3>Boosts Mental Health</SH3>
      <SP>
        Exercise triggers the release of endorphins, which positively affect mood and wellbeing. Better sleep, less anxiety, and more emotional balance make this period easier to navigate.
      </SP>

      <SH3>May Lower Risks of Gestational Diabetes, Hypertension and Other Complications</SH3>

      <SP>
        
        Regular physical activity can lower the risk of gestational diabetes, preeclampsia, and other pregnancy-related complications. It might also reduce the likelihood of a cesarean delivery.
      </SP>
      <SH3>Prepares for Birth & Speeds Recovery</SH3>
      <SP>
      Increased endurance and muscle strength can make the birthing process smoother. Recovery after birth is often faster too.
      </SP>

      
      <STip>
        Important Note: Obtain medical clearance before beginning any exercise. Some health conditions may limit activity. Pay attention to hydration and avoid overheating during workouts.
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
