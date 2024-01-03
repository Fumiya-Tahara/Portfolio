import { Link as Scroll } from "react-scroll";
import Image from "next/image";
import { push as Menu } from "react-burger-menu";

const bugerStyle = {
  bmBurgerButton: {
    position: "absolute",
    width: "36px",
    height: "30px",
    top: "25px",
    right: "20px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "30px",
    width: "30px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export default function Header() {
  return (
    <header className="text-gray-600 h-20 relative">
      <div
        className="w-full"
        style={{
          position: "fixed",
          backgroundColor: "rgba(255,255,255,0.9)",
          zIndex: 1,
        }}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between md:justify-nomal items-center">
          <Scroll
            className="flex title-font font-medium items-center text-gray-900 cursor-pointer"
            to="top"
            smooth={true}
            duration={600}
          >
            <Image
              src="/icon/barbell.svg"
              alt="barbell"
              width={40}
              height={40}
            />
            <span className="ml-3 text-xl">{"fmt's Portfolio"}</span>
          </Scroll>
          <nav>
            <div className="md:w-auto md:ml-auto flex flex-col md:flex-row flex-wrap items-center text-base justify-center hidden md:block">
              <Scroll
                className="mr-5 hover:text-gray-900 cursor-pointer"
                to="profile"
                smooth={true}
                duration={600}
              >
                Profile
              </Scroll>
              <Scroll
                className="mr-5 hover:text-gray-900 cursor-pointer"
                to="skills"
                smooth={true}
                duration={600}
              >
                Skills
              </Scroll>
              <Scroll
                className="mr-5 hover:text-gray-900 cursor-pointer "
                to="highlight"
                smooth={true}
                duration={600}
              >
                Highlight
              </Scroll>
            </div>
            <div className="md:hidden">
              <Menu
                right
                width={"50%"}
                styles={bugerStyle}
                outerContainerId={"outer-container"}
              >
                <Scroll
                  className="mr-5 hover:text-gray-900 cursor-pointer"
                  to="profile"
                  smooth={true}
                  duration={600}
                >
                  Profile
                </Scroll>
                <Scroll
                  className="mr-5 hover:text-gray-900 cursor-pointer"
                  to="skills"
                  smooth={true}
                  duration={600}
                >
                  Skills
                </Scroll>
                <Scroll
                  className="mr-5 hover:text-gray-900 cursor-pointer "
                  to="highlight"
                  smooth={true}
                  duration={600}
                >
                  Highlight
                </Scroll>
              </Menu>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
