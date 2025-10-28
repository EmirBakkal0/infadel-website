import React from "react";

export default function PregnancySigns() {
  return (
    <div className="">
      <SH>Possible Early Signs of Pregnancy</SH>
      <SP>
        Below are common signals that may appear during the first weeks of
        pregnancy. They might not look the same for every woman—some may notice
        only light signs, others more pronounced experiences.
      </SP>
      <SH2>1. Missed Period</SH2>
      <SP>
        If your cycle is usually regular, not having your period at the expected
        time can be a significant clue. But when cycles are irregular, this sign
        may not always be reliable.
      </SP>

      <SH2>2. Breast Tenderness and Changes</SH2>
      <SP>
        Hormonal changes in early pregnancy can cause fullness, tenderness, or
        mild tingling in the breasts. The areola may darken, or veins may become
        more visible.
      </SP>
      <SH2>3. Fatigue</SH2>
      <SP>
        Many expectant mothers feel much more tired in the first weeks than they
        would otherwise. Your body uses extra energy to adapt to new hormone
        levels.
      </SP>
      <SH2>4. Nausea (Day or Night)</SH2>
      <SP>
        Although often called “morning sickness,” nausea can occur at any time.
        Some women also experience vomiting alongside it.
      </SP>

      <SH2>5. Mood Swings</SH2>
      <SP>
       Shifts in hormone levels can lead to emotional fluctuations—joy in one moment, sadness or sensitivity in the next. </SP>
      <SH2>6. Heightened Sense of Smell & Taste Changes</SH2>
      <SP>
       Some scents may be perceived more strongly; you might lose appetite for favorite foods or even find them repulsive.
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
