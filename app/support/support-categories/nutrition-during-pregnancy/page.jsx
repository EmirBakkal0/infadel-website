import React from "react";
import { SH, SH2, SH3, SP, STip } from "@/components/SupportComponents";

export default function NutritionPregnancy() {
  return (
    <div className="">
      <SH>Nutrition During Pregnancy</SH>
      <div className="flex justify-center  mb-10">
        <img src="/support/nutrition2.jpg" alt="Nutrition During Pregnancy" width={640} />

      </div>

      <SP>
       Pregnancy is a very special time when you carry not just yourself, but also a little life. During this period, your body works to meet not only your own needs but also those of your baby. That’s why nutrition during pregnancy is of great importance for both your health and your baby’s well-being.
      </SP>
      <SH2> Why Is Nutrition So Important?</SH2>
      <SP>
        As your baby's organs, bones, and tissues develop, they rely on the building blocks provided by the foods you eat.
      </SP> <SP>
       Adequate and balanced nutrition can reduce the risk of complications during pregnancy.
      </SP> <SP>
        Good nutrition supports your energy levels, strengthens your immune system, and promotes your general sense of well-being.
      </SP>

      <SH2>Key Nutrients and Their Sources</SH2>
      <table>
        <thead>
          <tr>
            <th className=" text-left p-2 border">Nutrient</th>
            <th className=" text-left p-2 border">Why it matters</th>
            <th className=" text-left p-2 border">Sources</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" p-2 border align-top">Folic Acid</td>
            <td className=" p-2 border">
              Supports your baby’s nervous system development and helps prevent neural tube defects
            </td>
            <td className=" p-2 border">
              Leafy greens, fortified cereals, citrus fruits, beans.
            </td>
          </tr>

          <tr>
            <td className=" p-2 border align-top">Iron</td>
            <td className=" p-2 border">
              Risk of deficiency increases due to expanded blood volume
            </td>
            <td className=" p-2 border">
              Supports your baby's nervous system development and helps prevent neural tube defects
            </td>
          </tr>
          <tr>  
            <td className=" p-2 border align-top">Calcium</td>
            <td className=" p-2 border">
              Essential for your baby’s bone and teeth development
            </td>

            <td className=" p-2 border">
              Dairy products, fortified plant-based milks, leafy greens, almonds.
            </td>
          </tr>
          <tr>
            <td className=" p-2 border align-top">Protein</td>
            <td className=" p-2 border">
              Supports cell growth and tissue repair for both you and your baby
            </td>
            <td className=" p-2 border">
              Lean meats, poultry, fish, eggs, beans, tofu, nuts.
            </td>
          </tr>
          <tr>
            <td className=" p-2 border align-top">Vitamin D</td>
            <td className=" p-2 border">
              Enhances calcium absorption and supports bone health
            </td>
            <td className=" p-2 border">
             Fatty fish, fortified milk, egg yolks.
            </td>
          </tr>
        </tbody>
      </table>
      <SH2> Hydration and Fluid Intake</SH2>
      <SP>
       Drinking plenty of water is vital for both you and your baby. Pregnancy increases fluid needs. Ensure you include water, soups, and fresh juices among your daily fluids.
      </SP>

      <SH2>Gentle Guidance & Precautions</SH2>
      <SP>
      The information above serves as a general guide. Every woman has unique nutritional needs. Throughout pregnancy, it’s best to work in coordination with an obstetrician, dietitian, or qualified health professional. Monitor your nutrition carefully and adjust based on medical advice to give the very best to yourself and your little miracle.</SP>
      

    </div>
  );
}


