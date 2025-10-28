import React from "react";

export default function SupportLayout({ children }) {
  return (
    <main >
      <div
        className="h-full py-12 "
        style={{
          backgroundImage: "url('/support.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" py-10 p-5 rounded-2xl container mx-auto flex justify-center items-center z-5 font-[delius]  bg-gray-200 opacity-80">
          {children ? children : <h1>Loading...</h1>}
        </div>
      </div>
    </main>
  );
}
