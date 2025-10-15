"use client";

import { useState } from "react";
import Form from "./Form";

export default function ContactButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsFormOpen(true)}
        className="  text-white cursor-pointer text-lg hover:opacity-70 transition-opacity"
      >
        Contact
      </button>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
