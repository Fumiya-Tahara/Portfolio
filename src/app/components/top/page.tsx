"use client";
import Image from "next/image";
import anime from "animejs/lib/anime.es.js";
import Header from "../header/header";

export default function Top() {
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
    <>
      <Header />
      <div
        id="top"
        className="screen grid grid-cols-12 gap-4 text-slate-200"
        style={{ backgroundColor: "#7e4736", height: "100vh" }}
      >
        <div className="col-span-12 md:col-span-10 md:col-start-2 text-4xl md:text-6xl text-center flex justify-center items-end">
          <div>{"Shake the protein!"}</div>
        </div>
        <div className="col-span-10 md:col-span-6 col-start-2 md:col-start-4 flex gap-2">
          <div className="choco_shaker flex items-center">
            <div className="cursor-pointer" onClick={chocoShake}>
              <Image
                src="/icon/choco_shaker.svg"
                alt="choco_shaker"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="matcha_shaker flex items-center">
            <div className="cursor-pointer" onClick={matchaShake}>
              <Image
                src="/icon/matcha_shaker.svg"
                alt="matcha_shaker"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="vanilla_shaker flex items-center">
            <div className="cursor-pointer" onClick={vanillaShake}>
              <Image
                src="/icon/vanilla_shaker.svg"
                alt="vanilla_shaker"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
