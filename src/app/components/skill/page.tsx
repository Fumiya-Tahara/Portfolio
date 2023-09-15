"use client";
import { SkillCard } from "./components/skill_card";
import { motion } from "framer-motion";
import { pageVariants } from "@/app/features/animation_config";

export default function Skill() {
  const path: string = "/icon/gopher.svg";

  return (
    <div className="bg-gray-100 py-24 min-h-screen">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={pageVariants}
      >
        <div className="flex justify-center mb-10">
          <span className="text-6xl">SKILLS</span>
        </div>
        <div className="flex justify-center">
          <div className="w-2/3 grid grid-cols-3 gap-10 px-10">
            <SkillCard 
              path="/icon/go.svg" 
              name="Go" 
              width={200} 
              height={122} 
              description="現在アルバイトで使っている。ポインタが難しい..."
            />
            <SkillCard 
              path="/icon/javascript.svg" 
              name="JavaScript" 
              width={100} 
              height={100} 
              description="フロントでは主にこれを使ってきた。"
            />
            <SkillCard 
              path="/icon/python.svg" 
              name="Python" 
              width={100} 
              height={100} 
              description="最初に触った言語。思い入れがある。"
            />
            <SkillCard
              path="/icon/typescript-icon.svg"
              name="TypeScript"
              width={100}
              height={100}
              description="最近フロントで使っている。このポートフォリオにもTypeScriptを用いた。"
            />
            <SkillCard 
              path="/icon/laravel.svg"
              name="Laravel"
              width={100}
              height={100}
              description="初めての開発系アルバイトで使ったWebフレームワーク。素のPHPはあまり使えない。"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
