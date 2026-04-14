import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export const WhatIs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const problems = [
    "Many sales teams appear active, but lack measurable impact.",
    "Manual reporting is often delayed, inconsistent, and difficult to verify.",
    "As a result, businesses struggle to distinguish between activity and actual performance.",
  ];

  const coreValues = [
    {
      title: "Full Visibility",
      description:
        "Monitor sales activities in real time across all locations.",
    },
    {
      title: "Accountability You Can Trust",
      description:
        "Ensure every visit and transaction is verifiable and recorded.",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Make faster, more accurate decisions based on real field data.",
    },
    {
      title: "Performance Clarity",
      description:
        "Identify top performers and areas that require improvement.",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white px-6 py-8 font-sans lg:px-20 lg:py-16">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8 flex w-full items-center justify-between lg:mb-16 xl:mb-12"
      >
        {/* Tombol Kembali - kiri atas */}
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-primary group flex cursor-pointer items-center gap-2 rounded-full border border-primary bg-white px-4 py-2 shadow-lg transition-all hover:scale-110 lg:gap-4 lg:px-8 lg:py-4 xl:gap-3 xl:px-6 xl:py-3"
        >
          <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
          <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
            Back
          </span>
        </button>

        {/* Tombol Home - kanan atas */}
        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
        >
          <FaHome className="text-lg lg:text-5xl xl:text-xl" />
        </button>
      </motion.div>

      {/* Header Logo - Center */}
      <div className="mb-12 flex w-full justify-center lg:mb-20 xl:mb-20">
        <img
          src="/Teks Sellgo.png"
          alt="SellGo Logo"
          className="h-auto w-[40%] lg:w-[50%] xl:w-[20%]"
        />
      </div>

      {/* Main Container */}
      <div className="mx-auto w-full max-w-4xl grow">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col space-y-16"
        >
          {/* Section: What is SellGo? (Rata Kiri) */}
          <section className="space-y-4 text-left">
            <h1 className="text-primary text-3xl font-black lg:text-7xl xl:text-4xl">
              What is SellGo?
            </h1>
            <p className="max-w-4xl text-justify text-base font-medium leading-relaxed text-black lg:text-4xl xl:text-lg">
              SellGo is not just a sales tracking application. It is a system
              designed to transform your field sales operations into structured,
              measurable, and high-performing business activities.
            </p>
          </section>

          {/* Section: The Challenge (Agak ke Kanan / Center-Left) */}
          <section className="flex flex-col items-center space-y-4 self-center lg:pl-40">
            <div className="w-full">
              <h2 className="text-primary text-3xl font-black lg:text-7xl xl:text-4xl">
                The Challenge
              </h2>
              <ul className="mt-4 space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black lg:h-4 lg:w-4 xl:h-4 xl:w-4" />
                    <span className="text-base font-medium text-black lg:text-4xl xl:text-lg">
                      {problem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Core Value (Rata Kiri Lagi) */}
          <section className="space-y-6 text-left">
            <h2 className="text-primary text-3xl font-black lg:text-7xl xl:text-4xl">
              Core Value
            </h2>
            <div className="space-y-6">
              {coreValues.map((value, index) => (
                <div key={index} className="group">
                  <h3 className="pb-0 text-base font-bold text-black lg:pb-4 lg:text-5xl xl:pb-0 xl:text-lg">
                    {value.title}
                  </h3>
                  <p className="text-base font-normal text-black lg:text-4xl xl:text-lg">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Conclusion (Jorok ke Kanan) */}
          <section className="self-end pt-10 text-right lg:max-w-4xl">
            <p className="text-primary text-3xl font-bold lg:text-5xl xl:text-4xl">
              With SellGo, your sales operations become more transparent, more
              controlled, and better equipped to scale with confidence.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
