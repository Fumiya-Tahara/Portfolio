"use client";
import Image from "next/image";
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

export default function Top() {
  useEffect(() => {
    anime({
      targets: ".barbell-img",
      translateY: -120,
      loop: 5,
      direction: "alternate",
      easing: "easeInOutSine",
    });
  }, []);

  const chocoShake = () => {
    anime
      .timeline({
        endDelay: 1000,
        easing: "easeInOutQuad",
      })
      .add({ targets: ".screen", background: "#7e4736" }, 0);

    anime({
      targets: ".choco_shaker",
      rotate: ["-10deg", "10deg"],
      duration: 200,
      loop: 5,
      direction: "alternate",
      easing: "easeInOutQuad",
      complete: function () {
        anime({
          targets: ".choco_shaker",
          rotate: "0deg",
          duration: 200,
          easing: "easeInOutQuad",
        });
      },
    });
  };

  const matchaShake = () => {
    anime
      .timeline({
        endDelay: 1000,
        easing: "easeInOutQuad",
      })
      .add({ targets: ".screen", background: "#c5c56a" }, 0);

    anime({
      targets: ".matcha_shaker",
      rotate: ["-10deg", "10deg"],
      duration: 200,
      loop: 5,
      direction: "alternate",
      easing: "easeInOutQuad",
      complete: function () {
        anime({
          targets: ".matcha_shaker",
          rotate: "0deg",
          duration: 200,
          easing: "easeInOutQuad",
        });
      },
    });
  };

  const vanillaShake = () => {
    anime
      .timeline({
        endDelay: 1000,
        easing: "easeInOutQuad",
      })
      .add({ targets: ".screen", background: "#fffcdb" }, 0);

    anime({
      targets: ".vanilla_shaker",
      rotate: ["-10deg", "10deg"],
      duration: 200,
      loop: 5,
      direction: "alternate",
      easing: "easeInOutQuad",
      complete: function () {
        anime({
          targets: ".vanilla_shaker",
          rotate: "0deg",
          duration: 200,
          easing: "easeInOutQuad",
        });
      },
    });
  };

  return (
    <div
      className="screen h-screen grid grid-cols-12 gap-4 text-slate-200"
      style={{ backgroundColor: "#7e4736" }}
    >
      {/* <div className="barbell-img col-start-2 col-span-4 flex justify-center mt-96">
        <Image src="/icon/barbell.svg" alt="barbell" width={500} height={500} />
      </div> */}
      <div className="col-span-8 col-start-3 text-center text-6xl">
        {"fmt's protein shake"}
      </div>
      <div className="col-span-6 col-start-4 flex">
        <div className="choco_shaker flex justify-center" onClick={chocoShake}>
          <Image
            src="/icon/choco_shaker.svg"
            alt="choco_shaker"
            width={500}
            height={500}
          />
        </div>
        <div
          className="matcha_shaker flex justify-center"
          onClick={matchaShake}
        >
          <Image
            src="/icon/matcha_shaker.svg"
            alt="matcha_shaker"
            width={500}
            height={500}
          />
        </div>
        <div
          className="vanilla_shaker flex justify-center"
          onClick={vanillaShake}
        >
          <Image
            src="/icon/vanilla_shaker.svg"
            alt="vanilla_shaker"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
