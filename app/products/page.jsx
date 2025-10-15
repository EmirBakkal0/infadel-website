import React from "react";
import Card from "@/components/ProductCard";
function Products() {
  return (

    <div className="container mx-auto p-10 "
    >

    <div className="grid md:grid-cols-2 mb-10 justify-center items-center gap-12 font-[delius]">
        <img src="table2.png" alt="" className="rounded-xl" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-5">Products for Babies</h1>
          <p>
          Infadel offers a range of infant formulas and follow-on milks designed to support the healthy growth and development of babies from birth to 36 months. Our products are carefully formulated to meet the nutritional needs of infants and young children, providing essential vitamins, minerals, and nutrients for optimal health.
          </p>
        </div>

    </div>

      <div className="grid md:grid-cols-3 gap-6" 
      >
      
        <Card
          img="0.jpg"
          imgDesc="Infadel 1"
          header="Infadel 1"
          p="Infant Formula was developed to carefully meet your baby's nutritional needs. It can be used from birth as a sole source of nutrition or as part of a two-supplement diet.

You can use Infadel 1 Infant Formula for the first six months, then transition to complementary feeding after six months, and supplement this period with Infadel 2 Follow-on Milk."
        />

        <Card
          img="4.jpg"
          imgDesc="Infadel 2"
          header="Infadel 2"
          p="Follow on Milk was developed to carefully meet your baby's nutritional needs. It can be used as part of a two-supplement diet from 6 months onwards.

You can use Infadel 2 Follow on Milk from 6 to 12 months, and after 12 months, you can supplement this period with Infadel 3 Follow on Milk."
        /><Card
          img="8.jpg"
          imgDesc="Infadel 3"
          header="Infadel 3"
          p="Follow on Milk was developed to carefully meet your baby's nutritional needs. It can be used as part of a two-supplement diet from 12 months onwards.

You can use Infadel 3 Follow On Milk between 12 and 36 months, and after 36 months, you can support this period with KIDSLAC."
        />

      </div>
    </div>
  );
}

export default Products;
