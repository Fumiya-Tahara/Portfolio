"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { pageVariants } from "@/app/features/animation_config";

export default function Profile() {
  return (
    <div className="bg-gray-300 py-24 min-h-screen">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={pageVariants}
      >
      <div className="flex justify-center mb-10">
        <span className="text-6xl">PROFILE</span>
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 bg-white rounded-lg flex justify-center items-center" style={{"aspectRatio": 1.618 / 1}}>
          <div className="flex justify-center pb-20 w-2/3">
            <div>
              <a href="https://github.com/Fumiya-Tahara">
                <Image src={"/icon/github-icon.svg"} alt="GitHub" width={100} height={100} />
              </a>
            </div>
            <div className="w-2/3 ml-6">
              <p>福岡県出身の学生エンジニア。大学では農学を学んでいる。プログラミングは大学入学の少し前に始めた。主にWeb開発に興味があり、現在はGoやTypeScriptを学んでいる。</p>
            </div>
          </div>
        </div>
      </div>
      </ motion.div>
    </div>
  )
}
