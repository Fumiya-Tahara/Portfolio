import { Link as Scroll } from "react-scroll";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

const bugerStyle = {
  bmBurgerButton: {
    position: "relative",
    width: "36px",
    height: "30px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    color: "rgb(17 24 39)",
    height: "30px",
    width: "30px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    top: "0",
    zIndex: "1000",
    height: "100vh",
  },
  bmMenu: {
    background: "rgba(40,40,40,0.9)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#bdc3c7",
    padding: "1em",
  },
  bmItem: {
    display: "block",
    padding: "1em",
  },
  bmItemHover: {
    color: "red",
  },
  bmOverlay: {
    display: "none",
  },
};

export default function Header() {
  return (
    <header className="w-full h-20">
      <div
        className="w-full"
        style={{
          position: "fixed",
          backgroundColor: "rgba(255,255,255)",
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
            <div className="md:hidden text-gray-900">
              <Menu
                right
                width={"50%"}
                styles={bugerStyle}
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
              >
                <Scroll
                  className="hover:text-gray-50 cursor-pointer"
                  to="profile"
                  smooth={true}
                  duration={600}
                >
                  Profile
                </Scroll>
                <Scroll
                  className="hover:text-gray-50 cursor-pointer"
                  to="skills"
                  smooth={true}
                  duration={600}
                >
                  Skills
                </Scroll>
                <Scroll
                  className="hover:text-gray-50 cursor-pointer "
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
