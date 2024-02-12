"use client";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { headerTheme } from "./theme/header-theme";
import { Link as Scroll } from "react-scroll";
import Image from "next/image";

export default function Header() {
  return (
    <Box position="static" sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={headerTheme}>
        <AppBar
          sx={{ height: "64px", display: "flex", justifyContent: "center" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
            </Typography>
            <div className="hidden md:block">
              <Scroll
                className="mr-6 hover:text-gray-900 cursor-pointer"
                to="profile"
                smooth={true}
                duration={600}
              >
                Profile
              </Scroll>
              <Scroll
                className="mr-6 hover:text-gray-900 cursor-pointer"
                to="skills"
                smooth={true}
                duration={600}
              >
                Skills
              </Scroll>
              <Scroll
                className="mr-6 hover:text-gray-900 cursor-pointer "
                to="highlight"
                smooth={true}
                duration={600}
              >
                Highlight
              </Scroll>
            </div>
            <div className="md:hidden text-gray-900">
              <IconButton>
                <MenuIcon fontSize="large" />
              </IconButton>

              {/* <Scroll
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
                </Scroll> */}
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
