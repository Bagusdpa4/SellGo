import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export const WhatIs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const problems = [
    "Unclear visit activity.",
    "Difficult team monitoring.",
    "Delayed reporting.",
    "Limited visibility on performance.",
    "Less accurate field data.",
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white px-6 py-8 font-sans lg:px-10 lg:py-12 xl:px-10 xl:py-10">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Header Halaman */}
      <div className="mb-4 flex w-full justify-center lg:mb-10 xl:mb-6">
        <img
          src="/Teks Sellgo.png"
          alt="Teks Sellgo Logo"
          className="h-auto w-[40%] object-contain lg:w-[50%] xl:w-[15%]"
        />
      </div>

      {/* Konten Tengah */}
      <div className="flex grow flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-5xl space-y-12 text-left"
        >
          {/* Section: What is SellGo? */}
          <div className="space-y-4">
            <h1 className="text-primary text-3xl font-black lg:text-7xl xl:text-4xl">
              What is SellGo?
            </h1>
            <p className="text-base font-medium leading-relaxed text-black lg:text-4xl xl:text-lg">
              SellGo is a mobile application designed to help businesses monitor
              field sales activities in one connected system. From team visits
              to sales performance, everything is recorded more clearly and can
              be reviewed faster.
            </p>
          </div>

          {/* Section: What problem does it solve? */}
          <div className="space-y-4">
            <h2 className="text-primary text-2xl font-black lg:text-6xl xl:text-3xl">
              What problem does it solve?
            </h2>
            <p className="black text-base font-medium lg:text-4xl xl:text-lg">
              SellGo helps solve common field sales problems such as:
            </p>

            <ul className="space-y-3 pt-2">
              {problems.map((problem, index) => (
                <li key={index} className="black flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500 lg:h-8 lg:w-8 xl:h-4 xl:w-4" />
                  <span className="text-sm font-medium lg:text-4xl xl:text-base">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-8 flex w-full justify-center lg:mt-12 xl:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-6 p-3 lg:gap-8 lg:p-6 xl:gap-4 xl:p-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="group flex cursor-pointer items-center gap-4 rounded-full border border-slate-100 bg-white px-6 py-2 shadow-lg transition-all hover:scale-110 hover:bg-slate-50 lg:px-12 lg:py-8 xl:px-4 xl:py-4"
          >
            <FaArrowLeft className="group-hover:text-primary text-lg text-slate-500 lg:text-4xl xl:text-xl" />
            <span className="group-hover:text-primary text-sm font-bold uppercase text-slate-500 lg:text-2xl xl:text-base">
              Kembali
            </span>
          </button>

          <div className="h-8 w-1 bg-slate-200 lg:h-16" />

          <button
            onClick={() => navigate("/")}
            className="bg-primary/10 text-primary hover:bg-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-14 xl:w-14"
          >
            <FaHome className="text-xl lg:text-5xl xl:text-2xl" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
