
import Ppn from "./ppn";

export default async function SupportCategory({ params }) {
  const { cat } = await params;
  return (
    <div
      className="h-screen pt-32 "
      style={{
        backgroundImage: "url('/support.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" py-10 p-5 rounded-2xl container mx-auto flex justify-center items-center z-5  bg-gray-200 opacity-80">
        {/* Category: {cat} */}

        {cat==="nutrition" && <Ppn />}
        {cat!=="nutrition" && <h1 className="text-3xl font-bold text-center">Content coming soon!</h1>}  
        
        
      </div>
    </div>
  );
}
