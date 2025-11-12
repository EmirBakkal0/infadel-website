import React from "react";

export default function Breastfeeding() {
  return (
    <div className="">
      <SH>Breastfeeding & Ideal Positions: A Journey Nourished with Love</SH>
      <div className=" flex justify-center  mb-10">
        <img src="/support/breast-feeding.jpg" alt="Breastfeeding & Ideal Positions" width={640} />

      </div>
      <SP>
        Breastfeeding is a special bond between mother and baby. When done with careful technique and comfortable positions, it becomes more effective, more comfortable for the mother, and more nourishing for the baby. Below, you’ll find key practices to keep in mind during breastfeeding and some commonly used positions.</SP>
      <SH2>Core Principles of Breastfeeding</SH2>
      
      <SP>
      The baby’s head, shoulders, and hips should form a straight line.</SP>
      <SP>
        The baby’s nose should align with the nipple, and the torso should face the mother (no twisting).</SP>
      <SP>
        The baby’s mouth should open wide, taking in not only the nipple but part of the areola.</SP>
      <SP>
        The mother should be in a comfortable, supported position, using pillows or cushions to relieve strain on her back, arms, and shoulders.  </SP>
      
      
      <SH2>Common Breastfeeding Positions</SH2>
      <SH3>Cradle Hold</SH3>
      <SP>
      The baby’s head rests in the bend of your elbow, with the torso parallel to your body. This is a widely used and classic position.</SP>
      <SH3>Cross-Cradle Hold (Reverse Cradle)</SH3>
      <SP>You support the baby with the opposite arm (for example, feeding from the right breast while holding the baby with your left arm). This gives you good control of guiding the baby’s head and helping latch.</SP>
      <SH3>Football Hold / Clutch Hold</SH3>
      <SP> The baby lies beside you, tucked under your arm (like holding a football). This position avoids pressure on the abdomen and is recommended especially after a C‑section or for mothers with larger breasts.</SP>
      <SH3>Side-Lying / Lateral Hold</SH3>
      <SP>You and baby lie on your sides facing each other. This is often comfortable for night feeds and during recovery after childbirth.</SP>
      <SH3>Upright / Koala / “Sitting-On-Lap” Hold</SH3>
      <SP>The baby sits upright on your lap, facing you. This position is particularly useful for babies with reflux or ear infections.</SP>
      <SH3>Laid-Back / Biological Nurturing Position</SH3>
      <SP>You recline comfortably while the baby lies on your chest, tummy to tummy. This position encourages natural rooting and latching reflexes.</SP>

      <SH2>When to Use Which Position?</SH2>
      <SP>
      After C‑section → Football hold or side‑lying help avoid pressure on the abdomen.</SP>
      <SP>
      Large breasts → Football hold or laid-back position can provide better access.</SP>
      <SP>
        Reflux, gas, or digestive issues → Upright (Koala) or slightly angled cross or cradle holds can help.</SP>
      <SP>Nighttime feeding / rest → Side‑lying position allows both mother and baby to rest more easily.</SP>

      
      <SH2>Final Tips for a Successful Breastfeeding Journey</SH2>
      <SP>
        Use a breastfeeding pillow or rolled towel to help support the baby at the right angle.
        </SP>
      <SP>If you experience nipple pain, cracks, or difficulties latching, try changing position and consult a lactation consultant.  </SP>
      <SP>Don’t hesitate to experiment — the “ideal position” may differ from one pair of mother and baby to another.</SP>
      <SP>While choosing positions, always prioritize mother’s comfort and the baby’s effective latch. </SP>
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
