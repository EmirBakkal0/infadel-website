import React from "react";
import Card from "@/components/ProductCard";
import ProductCardCarousel from "@/components/ProductCarouselCard";
function Products() {
  return (

    <div className="container mx-auto p-10 "
    >

    <div className="grid md:grid-cols-2 mb-10 justify-center items-center gap-12 font-[delius]">
        <img src="table2.webp" alt="" className="rounded-xl" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-5">Products for Babies</h1>
          <p  className="text-center text-pretty">
          Infadel offers a range of infant formulas and follow-on milks designed to support the healthy growth and development of babies from birth to 36 months. Our products are carefully formulated to meet the nutritional needs of infants and young children, providing essential vitamins, minerals, and nutrients for optimal health.
          </p>
        </div>

    </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 mt-20 font-[delius]">
        INFADEL Infant and Follow on Milk
      </h1>
      <div className="grid md:grid-cols-3 gap-6" 
      >
      
        <ProductCardCarousel
          imgfolder="infadel1"
          length={3}
          header="INFADEL 1"
          p="Infant Formula was developed to carefully meet your baby's nutritional needs. It can be used from birth as a sole source of nutrition or as part of a two-supplement diet.

You can use Infadel 1 Infant Formula for the first six months, then transition to complementary feeding after six months, and supplement this period with Infadel 2 Follow-on Milk."
        />

        <ProductCardCarousel
          imgfolder="infadel2"
          length={3}
          header="INFADEL 2"
          p="Follow on Milk was developed to carefully meet your baby's nutritional needs. It can be used as part of a two-supplement diet from 6 months onwards.

You can use Infadel 2 Follow on Milk from 6 to 12 months, and after 12 months, you can supplement this period with Infadel 3 Follow on Milk."
        /><ProductCardCarousel
          imgfolder="infadel3"
          length={3}
          header="INFADEL 3"
          p="Follow on Milk was developed to carefully meet your baby's nutritional needs. It can be used as part of a two-supplement diet from 12 months onwards.

You can use Infadel 3 Follow On Milk between 12 and 36 months, and after 36 months, you can support this period with KIDSLAC."
        />
        
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 mt-20 font-[delius]">
        Infadel Medical Formula
      </h1>
      
      <div className="grid md:grid-cols-3 gap-6" >
        <ProductCardCarousel
          imgfolder="infadelLF"
          length={1}
          header="INFADEL Lactose Free"
          p="From the moment they are born, babies receive their most essential support for growth and development through nutrition. However, some babies may experience intolerance or difficulty digesting milk sugar, known as lactose.

Lactose is a natural sugar found in milk and dairy products. During digestion, it is broken down by an enzyme called lactase so it can be absorbed by the body. Some babies, however, do not produce enough of this enzyme. In such cases, INFADEL LF, a specially developed lactose-free infant formula, helps babies feed comfortably and grow healthily.                                                                                                                            IMPORTANT: Every baby's metabolism is different; Therefore, the selection of appropriate food should be made under the supervision of a specialist."
        /><ProductCardCarousel
          imgfolder="infadelAR"
          length={1}
          header="INFADEL ANTI-REFLUX "
          p="Reflux is a common issue during breastfeeding. In the first months after birth, many babies regurgitate milk frequently because the stomach valve is still immature. This is usually a normal and temporary condition; however, when reflux becomes frequent and uncomfortable, the use of INFADEL AR anti-reflux formula can help.

Anti-reflux (AR) infant formulas are specially formulated to help prevent the upward flow of stomach contents in babies.                                                                                                 IMPORTANT: Every baby's metabolism is different; Therefore, the selection of appropriate food should be made under the supervision of a specialist."
        /><ProductCardCarousel
          imgfolder="infadelPRE"
          length={1}
          header="INFADEL PREMATURE"
          p="Every baby is unique, but premature babies need even more special care because they arrive a little earlier than expected.

Proper nutrition plays a vital role in their growth journey. Since their stomach, intestinal, and immune systems are still developing, they may have difficulty digesting food. INFADEL PRE, a specially formulated premature baby formula, provides the nutritional support your baby needs for healthy growth and development.            IMPORTANT: Every baby's metabolism is different; Therefore, the selection of appropriate food should be made under the supervision of a specialist."
        />
      </div>


      <div className="grid md:grid-cols-2 mt-16 mb-10 justify-center items-center gap-12 font-[delius]">
        <img src="alac.jpg" alt="" className="rounded-xl" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-5"> Products for Growing Babies</h1>
          <p className="text-center text-pretty">
          ALAC Cereals and Baby Foods are specially designed to support your baby's transition to solid foods after six months of age. These products are crafted with care to ensure they provide essential nutrients while being easy to digest for your little one.
          </p>
        </div>

    </div>



      <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 mt-20 font-[delius]">
        ALAC Cereals
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <ProductCardCarousel
          imgfolder="alacRiceandMilk"
          length={3}
          header="ALAC Rice and Milk Cereal  "
          p="Rice is one of the most suitable grains for babies' sensitive digestive systems. When combined with milk, it not only increases nutritional value but also improves consistency, making it suitable for babies' swallowing skills. The combination of milk and rice makes the formula rich in energy, carbohydrates, and calcium. This helps keep babies full and meet their daily energy needs."
        />

        <ProductCardCarousel
          imgfolder="alacWheatandFruit"
          length={3}

          header="ALAC Wheat and Fruit Cereal "
          p="The natural fillingness of grains combined with the slightly sweet flavor of fruit offers both flavor and nutrition. This makes it a suitable option for little ones exploring new tastes, making it a popular choice for solid food. Wheat is rich in fiber and carbohydrates, while fruit is a natural source of vitamins and minerals. The combination creates a balanced meal that meets your baby's daily energy needs."
        />
        <ProductCardCarousel
          imgfolder="alacWheatandOat"
          length={3}

          header="ALAC Wheat and Oat Cereal "
          p="During the transition to solid foods, babies prefer foods that are both easily digestible and keep them full for a long time. Wheat and oats, with their fiber content, consistency, and natural flavor, are among the most valuable grains in baby nutrition. Their rich fiber content supports the digestive system and reduces the risk of constipation. When combined with wheat, they provide a balanced fiber profile."
        />
        <ProductCardCarousel
          imgfolder="alacWheatandDate"
          length={3}

          header="ALAC Wheat and Date Cereal "
          p="Wheat and date spoon-fed formulas are a popular choice among mothers who want to develop their babies' palates while also providing them with nutritious ingredients during the transition to solid foods. The filling texture of wheat, combined with the natural sweetness and high nutritional value of dates, creates a meal that's both delicious and energizing. Dates are a fruit rich in natural sugars and fiber. They energize babies and, with their slightly sweet flavor, help them develop a love of new foods."
        />
  
       </div>
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 mt-20 font-[delius]">
        ALAC Baby Foods
      </h1>

       <div className="grid md:grid-cols-3 gap-6">
        {/* <ProductCardCarousel
          imgfolder="alacBabyFood"
          length={1}
          header="ALAC Baby Food "
          p="Around six months of age, babies begin their transition to solid foods, marking an exciting milestone for both little ones and parents. This stage opens the door to new tastes and experiences, but preparation, hygiene, and time management can sometimes be challenging. That is where ALAC Baby Food comes in, carefully prepared to make this important stage easier and more enjoyable.
ALAC Baby Food Puree types are perfect for your baby’s first steps into solid foods. They support the development of taste buds and are completely free from preservatives, additives, and added sugars. Every spoonful preserves the natural flavor and goodness of fruits and vegetables.
ALAC Baby Food offers convenience for parents and a safe, nutritious start for babies. Each first taste marks a meaningful step in shaping your child’s lifelong eating habits."/>
            */}
           <ProductCardCarousel
          imgfolder="alacBabyFood/apple"
          length={1}
          header="ALAC Apple Puree "
          p=" ALAC Apple Puree is a delicious and nutritious option for your baby's first solid foods. Made from carefully selected apples, this puree is rich in essential vitamins and fiber that support healthy digestion and overall growth. The natural sweetness of apples makes it appealing to little taste buds, helping to develop a love for fruits from an early age. Free from preservatives and additives, ALAC Apple Puree provides a safe and wholesome choice for your baby's dietary needs.
          " 
          /> <ProductCardCarousel
          imgfolder="alacBabyFood/apricot"
          length={1}
          header="ALAC Apricot Puree "
          p=" ALAC Apricot Puree is a delightful and nutritious option for your baby's introduction to solid foods. Made from carefully selected apricots, this puree is packed with essential vitamins, minerals, and antioxidants that support healthy growth and development. The natural sweetness and smooth texture of apricots make it appealing to little taste buds, helping to cultivate a love for fruits from an early age. Free from preservatives and additives, ALAC Apricot Puree offers a safe and wholesome choice for your baby's dietary needs." 
          /> 
          <ProductCardCarousel
          imgfolder="alacBabyFood/carrot-apple"
          length={1}
          header="ALAC Carrot-Apple Mix "
          p=" ALAC Carrot-Apple Mix is a delightful and nutritious option for your baby's introduction to solid foods. Made from carefully selected carrots and apples, this puree is packed with essential vitamins, minerals, and antioxidants that support healthy growth and development. The natural sweetness and smooth texture make it appealing to little taste buds, helping to cultivate a love for fruits and vegetables from an early age. Free from preservatives and additives, ALAC Carrot- Apple Puree offers a safe and wholesome choice for your baby's dietary needs." 
          /> 
          <ProductCardCarousel
          imgfolder="alacBabyFood/peach"
          length={1}
          header="ALAC Peach Puree "
          p=" ALAC Peach Puree is a delightful and nutritious option for your baby's introduction to solid foods. Made from carefully selected peaches, this puree is packed with essential vitamins, minerals, and antioxidants that support healthy growth and development. The natural sweetness and smooth texture make it appealing to little taste buds, helping to cultivate a love for fruits from an early age. Free from preservatives and additives, ALAC Peach Puree offers a safe and wholesome choice for your baby's dietary needs." 
          /> 
          <ProductCardCarousel
          imgfolder="alacBabyFood/pear"
          length={1}
          header="ALAC Pear Puree "
          p=" ALAC Pear Puree is a delightful and nutritious option for your baby's introduction to solid foods. Made from carefully selected pears, this puree is packed with essential vitamins, minerals, and antioxidants that support healthy growth and development. The natural sweetness and smooth texture make it appealing to little taste buds, helping to cultivate a love for fruits from an early age. Free from preservatives and additives, ALAC Pear Puree offers a safe and wholesome choice for your baby's dietary needs." 
          /> 
          <ProductCardCarousel
          imgfolder="alacBabyFood/strawberry-banana"
          length={1}
          header="ALAC Strawberry Banana Oat Mix "
          p=" ALAC Strawberry Banana Oat Mix is a delightful and nutritious option for your baby's introduction to solid foods. Made from carefully selected strawberries, bananas, and oats, this mix is packed with essential vitamins, minerals, and antioxidants that support healthy growth and development. The natural sweetness and smooth texture make it appealing to little taste buds, helping to cultivate a love for fruits and grains from an early age. Free from preservatives and additives, ALAC Strawberry Banana Oat Mix offers a safe and wholesome choice for your baby's dietary needs." 
          /> 

      
          
          
          </div>


    <div className="grid md:grid-cols-2 mt-16 mb-10 justify-center items-center gap-12 font-[delius]">
        <img src="table.webp" alt="" className="rounded-xl" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-5"> Products for Mothers and Growing Children</h1>
          <p className="text-center text-pretty">
          Infadel offers a range of nutritional products designed to support the health and well-being of mothers, teenagers, and children. Our products are carefully formulated to meet the unique nutritional needs of each life stage, providing essential vitamins, minerals, and proteins for optimal growth and development.
          </p>
        </div>

    </div>


      <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 mt-20 font-[delius]">
        MUMYLAC, TEENLAC, KIDSLAC
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        <ProductCardCarousel 
          imgfolder="mumylac"
          length={6}
          header="MUMYLAC  "
          p="Becoming a mother is an intense journey, both physically and emotionally. The body requires increased nutrition before, during, and after pregnancy, as well as throughout breastfeeding. During this time, a healthy diet plays a vital role not only in the mother’s well-being but also in the baby’s development. MUMYLAC, available in protein-rich cacao and vanilla flavors, supports mothers by helping maintain the health of both mother and child."
        />
        <ProductCardCarousel 
          imgfolder="teenlac"
          length={3}
          header="TEENLAC  "
          p="Teenagers have a fast and dynamic transition from childhood to adulthood, a period characterized by rapid growth, hormonal changes, and intense physical development. Nutrition during these years forms the foundation for lifelong health. TEENLAC provides a natural, food-based source of essential vitamins and proteins that support energy, growth, concentration, and immunity. Unlike artificial protein powders meant only as supplements, TEENLAC delivers balanced, wholesome nutrition that fuels healthy development from within."
        />
        <ProductCardCarousel 
          imgfolder="kidslac"
          length={3}
          header="KIDSLAC"
          p="Healthy growth and development in children are strongly linked to proper nutrition.  Vitamins and proteins are key to building strong muscles and bones, supporting immunity, and promoting healthy mental performance. KIDSLAC is specially formulated to provide the essential nutrients children need during their growth years. "
        />
      </div>

    </div>
  );
}

export default Products;
