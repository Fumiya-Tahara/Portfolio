"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { pageVariants } from "@/app/features/animation_config";

export default function Profile() {
  return (
    <div id="profile" className="bg-gray-300 py-12 lg:py-24 min-h-screen">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={pageVariants}
      >
        <div className="flex justify-center mb-4 lg:mb-10">
          <span className="text-4xl lg:text-6xl">PROFILE</span>
        </div>
        <div className="flex justify-center">
          <div
            className="w-2/3 px-4 py-4 bg-white rounded-lg flex justify-center items-center"
            style={{ aspectRatio: 1.618 / 1 }}
          >
            <div className="flex flex-col lg:flex-row justify-center pb-20 lg:w-2/3">
              <div>
                <a
                  href="https://github.com/Fumiya-Tahara"
                  className="flex justify-center"
                >
                  <Image
                    src={"/icon/github-icon.svg"}
                    alt="GitHub"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="mt-4 text-center lg:text-right lg:w-2/3 lg:ml-6">
                <p>
                  福岡県出身の学生エンジニア。大学では農学を学んでいる。プログラミングは大学入学の少し前に始めた。主にWeb開発に興味があり、現在はGoやTypeScriptを学んでいる。
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
