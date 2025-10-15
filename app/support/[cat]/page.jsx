export default async function SupportCategory({ params }) {
  const { cat } = await params;
  return (
    <div
      className="h-screen  "
      style={{
        backgroundImage: "url('/about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" py-10 container mx-auto flex justify-center items-center z-5  bg-gray-200 opacity-80">
        Category: {cat}
      </div>
    </div>
  );
}
