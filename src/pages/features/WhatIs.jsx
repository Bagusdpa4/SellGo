import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome, FaRobot, FaUserFriends } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoReceipt } from "react-icons/io5";
import { CiMapPin } from "react-icons/ci";
import { CiCircleCheck, CiCircleMore } from "react-icons/ci";
import { CgSandClock } from "react-icons/cg";

export const WhatIs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const coreValues = [
    {
      title: "Full Visibility",
      description:
        "Monitor sales activities in real time across all locations.",
      icon: <AiOutlineGlobal />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "Accountability You Can Trust",
      description:
        "Ensure every visit and transaction is verified and recorded.",
      icon: <FaRobot />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Make faster, more accurate decisions using real field data.",
      icon: <IoReceipt />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "Performance Clarity",
      description: "Identify top performers and areas for improvement.",
      icon: <CiMapPin />,
      bgIcon: "bg-slate-200",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white px-6 py-8 font-sans lg:px-10 lg:py-10 xl:px-4 xl:py-10">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8 flex w-full items-center justify-between lg:mb-12 xl:mb-12"
      >
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-primary border-primary group flex cursor-pointer items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-lg transition-all hover:scale-110 lg:gap-4 lg:px-8 lg:py-4 xl:gap-3 xl:px-6 xl:py-3"
        >
          <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
          <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
            Back
          </span>
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
        >
          <FaHome className="text-lg lg:text-5xl xl:text-xl" />
        </button>
      </motion.div>

      {/* Main Container */}
      <div className="mx-auto w-full max-w-5xl grow">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col space-y-10"
        >
          {/* LOGO */}
          <div className="flex w-full justify-center pb-6">
            <img
              src="/Teks Sellgo.png"
              alt="Teks Sellgo Logo"
              className="h-auto w-[30%] object-contain lg:w-[45%] xl:w-[30%]"
            />
          </div>

          {/* WHAT IS SELLGO - plain text, no card */}
          <section className="space-y-3">
            <h2 className="text-primary text-2xl font-black lg:text-6xl xl:text-4xl">
              What is SellGo?
            </h2>
            <p className="text-justify text-sm font-semibold leading-relaxed text-slate-600 lg:text-[40px] xl:text-2xl">
              SellGo is a system designed to transform your field sales
              operations into structured, measurable, and high-performing
              workflows.
            </p>
          </section>

          {/* CORE PILLARS */}
          <section className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 lg:text-4xl xl:text-xl">
              Core Pillars
            </span>
            <div className="space-y-6 pt-10">
              {coreValues.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-slate-300 bg-white px-5 py-6 shadow-xl"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-xl lg:h-24 lg:w-24 xl:h-12 xl:w-12 ${item.bgIcon}`}
                  >
                    {React.cloneElement(item.icon, {
                      className: "text-lg lg:text-6xl xl:text-3xl text-black",
                    })}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-sm font-bold lg:text-5xl xl:text-2xl">
                      {item.title}
                    </p>
                    <p className="text-bold text-sm leading-snug text-slate-500 lg:text-4xl xl:text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CONCLUSION */}
          <section className="pb-10 text-left">
            <p className="text-primary text-justify text-xl font-bold leading-snug lg:text-5xl xl:text-2xl">
              With SellGo, your sales operations become more transparent,
              controlled, and scalable.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
