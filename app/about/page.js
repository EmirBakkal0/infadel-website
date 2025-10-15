"use client";
import React from "react";
import { motion } from "motion/react";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="h-screen  "
      style={{
        backgroundImage: "url('/about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex justify-center items-center h-full">
        <motion.div
          className=" bg-[var(--background)] text-[var(--foreground)] p-10 rounded-lg "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-3xl font-bold my-2">
              About Us
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg">
              Infadel was established to support the healthy development of babies
              and children. From day one, we have been dedicated to creating
              reliable, science-based products tailored to the needs of our most
              precious beings, our children.
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold my-5">
              Our Mission
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg my-5">
              Our mission is to provide essential vitamin, mineral, and protein
              supplements needed by every age group, from infancy to adolescence,
              with the utmost care, safety, and precision.
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold my-5">
              Our Vision
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg">
              Our vision is to become a globally trusted family brand that helps
              shape healthy futures for children through products developed to the
              highest international standards.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg my-5">
              Because at Infadel, we know that healthy generations are the
              foundation of a strong future.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg my-5">
              Thank you for trusting Infadel to be a part of your child's journey.
              We are honored to support you in nurturing a healthy and happy future
              for your little ones.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
