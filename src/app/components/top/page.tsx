"use client";
import Image from "next/image";
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

export default function Top() {
  useEffect(() => {
    anime({
      targets: ".barbell-img",
      translateY: -200,
      loop: 5,
      direction: "alternate",
      easing: "easeInOutSine",
    });
  }, []);

  return (
    <div className="h-screen bg-gray-800 grid grid-cols-6 gap-4">
      <div className="barbell-img col-start-2 col-span-4 flex justify-center mt-96">
        <Image
          src="/icon/barbell01.svg"
          alt="barbell"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
