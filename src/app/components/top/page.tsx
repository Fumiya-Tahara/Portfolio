"use client";
import Image from "next/image";
import anime from "animejs/lib/anime.es.js";

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
    <div>
      <header className="text-gray-600 body-font h-20">
        <div
          className="w-full"
          style={{
            position: "fixed",
            backgroundColor: "rgba(255,255,255,0.9)",
            zIndex: 1,
          }}
        >
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image
                src="/icon/barbell.svg"
                alt="barbell"
                width={40}
                height={40}
              />
              <span className="ml-3 text-xl">{"fmt's Portfolio"}</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a
                href="#profile"
                className="mr-5 hover:text-gray-900 cursor-pointer"
              >
                Profile
              </a>
              <a
                href="#skills"
                className="mr-5 hover:text-gray-900 cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#highlight"
                className="mr-5 hover:text-gray-900 cursor-pointer"
              >
                Highlight
              </a>
            </nav>
          </div>
        </div>
      </header>
      <div
        className="screen grid grid-cols-12 gap-4 text-slate-200"
        style={{ backgroundColor: "#7e4736", height: "calc(100vh - 80px)" }}
      >
        <div className="col-span-8 col-start-3 text-center text-6xl flex justify-center items-end">
          <div>{"Shake the protein!"}</div>
        </div>
        <div className="col-span-6 col-start-4 flex">
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
    </div>
  );
}
