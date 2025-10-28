import React from "react";

export default function PregnancyCalendar() {
  return (
    <div className="">
      <SH>Pregnancy Calendar: A 40‑Week Miracle</SH>
      <SP>
       Pregnancy is a story that grows with time. Following it week by week helps you understand the changes in your body and gently accompany each new development. A “calendar” can serve as a guide to the spirit of each week, helping you live this process with love. Imagining your baby’s growth weekly strengthens the bond between you.
      </SP>
      <SH2>The 3 Phases of Pregnancy: A Brief Look at the Trimesters</SH2>

      <table>
        <thead>
          <tr>
            <th className=" text-left p-2 border">Trimester</th>
            <th className=" text-left p-2 border">What Happens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" p-2 border align-top">First Trimester (Weeks 1-12)</td>
            <td className=" p-2 border"> The foundations of pregnancy are laid. Organ development begins, hormones shift, and your body begins sending signals.
            </td>
          </tr>
          <tr>
            <td className=" p-2 border align-top">Second Trimester (Weeks 13-26)</td>
            <td className=" p-2 border"> Fetal movements may be felt, growth accelerates, and the mother may feel more energetic.</td>
          </tr>
          <tr>
            <td className=" p-2 border align-top">Third Trimester (Weeks 27-40)</td>
            <td className=" p-2 border"> The baby gains weight, begins positioning for birth, and the preparations for delivery intensify.</td>
          </tr>

        </tbody>
      </table>






      

      <SH2>Some Special Moments in the Pregnancy Calendar</SH2>
      <SP>
       <b>Weeks 4-5:</b> After fertilization, the embryo attaches to the uterine wall. Your body may begin to send subtle signals.
      </SP>
      <SP>
       <b>Weeks 8</b> The heartbeat may be heard via ultrasound. The baby is growing rapidly.
      </SP>
     
      <SP>
       <b>Weeks 16-20:</b> You may begin to feel the first movements in your abdomen.
      </SP>
      <SP>
       <b>Week 28:</b> The third trimester begins; your baby’s growth quickens, and you become more careful about your body.
      </SP>
      <SP>
       <b>Week 36-40:</b>  You approach your due date. The baby starts to take the birth position.
      </SP>

      <STip>
        “Small weeks accumulate into a great miracle.”
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
