import React from "react";

export default function PreMentalHealth() {
  return (
    <div className="">
      <SH>Pre‑Pregnancy Mental Health: A Journey of Inner Readiness</SH>
      <div className=" flex justify-center  mb-10">
        <img src="/support/mental-health.jpg" alt="Pre Pregnancy Mental Health" width={640}  />
      </div>
      <SP>
        Pregnancy is not only a transformation of the body, but also of the
        spirit. Before embarking on this path, preparing ourselves mentally lays
        a strong, balanced, and compassionate foundation for both mom and baby.
      </SP>
      <SP>
        The process of preparing for pregnancy brings many expectations,
        excitement, and uncertainties. During this planning stage, stress,
        anxiety, shifting relationships, or past emotional experiences can all
        impact our mental health. That’s why emotional stability is not separate
        from physical health. Protecting mental well‑being makes managing stress
        easier. A strong mind contributes to a more peaceful pregnancy journey.
      </SP>
      <SH2>Ways to Support Your Mind Before Pregnancy</SH2>
      <SH2>Know and Express Your Emotions</SH2>
      <SP>
        Fears, hopes, anxieties—all of these are normal. Instead of suppressing
        these feelings, recognizing and expressing them is the first step to
        managing them.
      </SP>
      <SH2>Be Gentle With Yourself</SH2>
      <SP>
        Striving for perfection is exhausting. Know that mistakes are normal.
        Sincerity counts more than flawlessness. Show yourself the same
        compassion you would give a dear friend.
      </SP>
      <SH2>Support Your Mind Through Physical Activity</SH2>
      <SP>
        Exercise is good not only for the body, but also for the mind: gentle
        walking, yoga, pilates can lower stress. Movement stimulates endorphins
        and refreshes mental clarity.
      </SP>

      <SH2>Do Not Hesitate to Seek Professional Help</SH2>
      <SP>
        If you have experienced depression, anxiety, or similar struggles:
        schedule a meeting with a psychologist, psychiatrist, or counselor. Be
        open about your medical history and any medication use. Preventive
        support can mitigate future crises.
      </SP>

      <SH2>Healthy Sleep, Nutrition & Rest Rituals</SH2>
      <SP>
       To strengthen the mind, daily basic needs matter: regular sleep supports emotional balance, balanced nutrition influences mood, and rest moments help reset the mind.
      </SP>




      <SH2>
       Final Thoughts: Inner Readiness Nourished by Outer Care
      </SH2>
      <SP>
        If pregnancy is to become a miracle, its foundation is built on spiritual resilience. Alongside caring for the body, nurturing the mind—with love, patience, and kindness—will make this journey more balanced and peaceful for both you and your baby.
      </SP>
      <STip>
      The care you show yourself now is the first act of love you will give your child.
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
function SP({ children }) {
  return <p className="mb-4">{children}</p>;
}

function STip({ children }) {
  return <strong className=" text-yellow-600 ">{children}</strong>;
}
