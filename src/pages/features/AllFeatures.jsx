import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FeatureTabs } from "../../components/assets/features/FeatureTabs";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import {
  MdMap,
  MdMonetizationOn,
  MdInsights,
  MdStore,
  MdHistory,
} from "react-icons/md";

export const AllFeatures = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Tracking System");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const features = [
    {
      id: "Tracking System",
      icon: <MdMap />,
      contents: [
        {
          title: "Tracking & Visit Monitoring",
          subtitle: "Real-Time Movement Tracking & Visit Analytics.",
          image: [
            "/features/tracking01.png",
            "/features/tracking02.jpg",
            "/features/tracking03.png",
          ],
          list: [
            // "Jadwal tahunan terorganisir",
            // "Monitoring progress",
            // "Import dari Excel",
            // "Evaluasi mudah",
          ],
        },
      ],
    },
    {
      id: "Revenue Tracking",
      icon: <MdMonetizationOn />,
      contents: [
        {
          title: "Real-Time Sales Revenue",
          subtitle: "Faster Decision-Making & Cash Flow Transparency.",
          image: ["/features/transaksi01.png", "/features/transaksi02.png"],
          list: [
            //   "Update stok otomatis",
            //   "Alert stok rendah",
            //   "Riwayat pemakaian",
            //   "Manajemen supplier",
          ],
        },
      ],
    },
    {
      id: "Product Insights",
      icon: <MdInsights />,
      contents: [
        {
          title: "Product Insights",
          subtitle:
            "Optimize Stock and Align Your Business Strategy with Market Trends.",
          image: ["/features/produk01.png", "/features/produk02.png"],
          list: [
            //   "Scan barcode",
            //   "Rekonsiliasi data",
            //   "Laporan selisih",
            //   "Approval digital",
          ],
        },
      ],
    },
    {
      id: "Store Profiles",
      icon: <MdStore />,
      contents: [
        {
          title: "Store Profiles",
          subtitle:
            "An integrated customer database directly linked to each store profile.",
          image: ["/features/profile01.png", "/features/profile02.png"],
          list: [
            //   "Scan barcode",
            //   "Rekonsiliasi data",
            //   "Laporan selisih",
            //   "Approval digital",
          ],
        },
      ],
    },
    {
      id: "Transaction History",
      icon: <MdHistory />,
      contents: [
        {
          title: "Transaction History",
          subtitle:
            "All transaction records, invoices, and payment statuses are securely stored and organized in a digital format.",
          image: ["/features/transaksi01.png", "/features/transaksi02.png"],
          list: [
            //   "Scan barcode",
            //   "Rekonsiliasi data",
            //   "Laporan selisih",
            //   "Approval digital",
          ],
        },
      ],
    },
  ];

  const currentData = features.find((f) => f.id === activeTab);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white py-12 font-sans">
      {/* Background Decor - Lingkaran Blur Halus */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full items-center justify-between px-6 pt-6 lg:px-12 xl:px-8"
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

      <div className="flex w-full max-w-7xl flex-col items-center">
        {/* Header Section */}
        <div className="mt-6 flex w-full justify-center">
          <img
            src="/Teks Sellgo.png"
            alt="Teks Sellgo Logo"
            className="h-auto w-[30%] object-contain lg:w-[40%] xl:w-[20%]"
          />
        </div>
        <div className="px-10 py-6 text-center lg:py-20 xl:py-6">
          <h1 className="text-primary py-2 text-2xl font-black uppercase tracking-tight lg:text-7xl xl:text-4xl">
            Features
          </h1>
          <p className="mt-4 text-sm font-semibold text-slate-500 lg:text-4xl xl:text-lg">
            Explore what you can manage
          </p>
        </div>

        {/* Dynamic Tab Navigation Component */}
        <div className="w-full overflow-hidden">
          <FeatureTabs
            items={features}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Content Section - Atas Bawah */}
        <div className="flex w-full items-center justify-center bg-slate-100 p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col gap-10"
            >
              {currentData.contents.map((content, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col items-center gap-20"
                >
                  {/* Title & Subtitle - Atas */}
                  <div className="w-full space-y-3 text-center">
                    <h2 className="text-primary text-4xl font-black leading-tight lg:text-7xl xl:text-5xl">
                      {content.title}
                    </h2>
                    <p className="text-xl font-bold leading-tight text-sky-400 lg:text-5xl xl:text-2xl">
                      {content.subtitle}
                    </p>
                  </div>

                  {/* Phone Frame - Bawah */}
                  <div className="flex w-full justify-center">
                    <div className="max-w-62.5 lg:max-w-100 xl:max-w-65 w-full">
                      <PhoneFrame screenshot={content.image} />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
