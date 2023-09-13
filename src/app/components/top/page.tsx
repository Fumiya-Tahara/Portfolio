// "use client"
import { motion } from "framer-motion"

export default function Top() {
  return (
    <div className="h-screen pt-24" style={{backgroundColor: "#04406F"}}>
      {/* <motion.div
        animate={{ x: 100 }}
        transition={{ delay: 1 }}
      /> */}
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div className="text-8xl text-white text-right ml-52 pr-4 pb-2 rounded-l-lg" style={{backgroundColor: "#2A708F"}}>Fumiya Tahara's Portfolio</div>
      <div className="text-2xl text-white text-right pr-4">My Engineering Diary</div>
    </div>
  )
}
