import React from "react";
import { SH, SH2, SH3, SP, STip } from "@/components/SupportComponents";

export default function NewbornFeedings() {
  return (
    <div >
      <SH> Newborn Feedings</SH>
    <div className="flex justify-center  mb-10">
        <img src="/support/newborn-feeding.jpg" alt="Newborn Feedings" width={640} />

      </div>
      <SH2> Breastfeeding</SH2>
      <SP>
        Exclusive breastfeeding is recommended for the first 6 months. The first milk (colostrum) is rich and highly valuable for the immune system. Feeding is usually every 2–3 hours. Correct breastfeeding positions and ensuring that the baby latches properly are very important.
      </SP>

      <SH2>Formula Feeding</SH2>
      <SP>
        Formula may be preferred if breast milk is insufficient or in special cases. It should be used only under a doctor's advice. Hygiene rules are very important when preparing formula (boiled water, sterilized bottles). The amount should be adjusted according to the baby's weight and age.
      </SP>

      <SH2> Mixed Feeding (Breast Milk + Formula)</SH2>
      <SP>
        Breast milk should be prioritized as much as possible. Formula can be given as a supportive option with the doctor's recommendation.
      </SP>

      <SH2> Feeding Frequency and Routine</SH2>
      <SP>
        Newborns are generally breastfed 8–12 times a day. They also need to be fed regularly at night. Signs that your baby is hungry include rooting, sucking reflex, and restlessness.
      </SP>

      <SH2> Signs That the Baby Is Full</SH2>
      <SP>
        If your baby has 6–8 wet diapers a day and gains weight regularly, you can understand that your baby is well-fed. Relaxation and quick transition to sleep after feeding are also signs of fullness.
      </SP>

      <SH2> Transition to Solid Foods</SH2>
      <SP>
        Exclusive breastfeeding is recommended for the first 6 months. After 6 months, complementary foods can be introduced with a doctor's recommendation.
      </SP>
    </div>
  );
}


