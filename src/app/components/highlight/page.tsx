"use client";
import { Record } from "./components/record";
import "../../css/highlight.css";
import { motion } from "framer-motion";
import { pageVariants } from "@/app/features/animation_config";

export default function Highlight() {
  return (
    <div className="bg-gray-300 py-12 lg:py-24 min-h-screen">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={pageVariants}
      >
        <div className="flex justify-center mb-4 lg:mb-10">
          <span className="text-4xl lg:text-6xl">HIGHLIGHT</span>
        </div>
        <div className="flex justify-center">
          <div className="w-2/3 bg-white rounded-lg flex justify-center py-10">
            <div className="w-4/5">
              <div className="flex flex-col">
                <Record
                  date="2021年3月"
                  title="Hello World!"
                  description="Pythonで初めてプログラムを書いた"
                />
                <Record
                  date="2022年4月"
                  title="初のハッカソンに参加"
                  description="ほとんど何も貢献できなかったがチームメイトに支えられ、なんとか完走できた。"
                />
                <Record
                  date="2023年8月"
                  title="北九州ハッカソンに参加"
                  description="運営、開発ともに参加して開発チームでは優秀賞を受賞した。"
                />
                <Record
                  date="2023年10月"
                  title="技育CAMPのマンスリーハッカソンに参加"
                  description="約１ヶ月の準備で臨んだ。受賞はできなかったが楽しかった。"
                />
                <Record
                  date="2023年10月"
                  title="JPHACKSに参加"
                  description="サントリースポンサー賞を受賞した。"
                />
                <Record
                  date="2023年10月"
                  title="未踏福岡第3期Solve採択"
                  description="UECS対応の農業機器制御ソフトウェアのノーコード開発アプリの開発。"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
