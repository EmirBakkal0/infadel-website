"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Form({ isOpen, onClose }) {
    const [result, setResult] = useState("");
    
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "43b5a889-0ac6-4a2d-acdb-2dea00ca198d");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          setTimeout(() => {
            setResult("");
            onClose();
          }, 2000);
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


      if (!isOpen) return null;

  return (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-svw h-svh z-20"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex w-full justify-center items-center h-full m-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.4 
            }}
            className="relative z-30 transform bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:cursor-pointer hover:text-gray-700 text-2xl font-bold transition z-10"
            >
              ×
            </motion.button>

            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold mb-6 text-center text-black"
              style={{ fontFamily: "var(--font-audiowide)" }}
            >
              Contact Us
            </motion.h2>

            <form onSubmit={onSubmit} className="space-y-4 text-black">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007c7c] focus:border-transparent outline-none transition"
                  style={{ fontFamily: "var(--font-roboto)" }}
                />
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007c7c] focus:border-transparent outline-none transition"
                  style={{ fontFamily: "var(--font-roboto)" }}
                />
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007c7c] focus:border-transparent outline-none transition"
                  style={{ fontFamily: "var(--font-roboto)" }}
                />
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007c7c] focus:border-transparent outline-none transition resize-none"
                  style={{ fontFamily: "var(--font-roboto)" }}
                ></textarea>
              </motion.div>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#FFCAD4]  text-black py-3 rounded-lg font-semibold hover:bg-[#b950a2] transition"
                style={{ fontFamily: "var(--font-roboto)" }}
              >
                Send Message
              </motion.button>
            </form>

            {result && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mt-4 text-center font-medium ${
                  result.includes("Successfully")
                    ? "text-green-600"
                    : result.includes("Sending")
                    ? "text-blue-600"
                    : "text-red-600"
                }`}
                style={{ fontFamily: "var(--font-roboto)" }}
              >
                {result}
              </motion.p>
            )}
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
  );
}

export default Form;
