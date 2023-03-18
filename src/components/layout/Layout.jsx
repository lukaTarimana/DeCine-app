import React, { useState } from "react";
import { Navbar,  Link, Text, styled, Spacer } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import "./layout.css";

const subscribedChannels = [
  "MrBeast",
  "Ninja",
  "Bedford Falls",
  "The Net Ninja",
];

const navigationItems = [
  {
    title: "Movies",
    link: "/movies",
    categories: ["Horror", "Comedy", "Action", "Fantasy", "Anime"],
    id: 1,
  },
  {
    title: "Streaming",
    link: "/streaming",
    categories: ["Learning", "Comedy", "Finance", "Technologies", "Sience"],
    id: 2,
  },
  {
    title: "Videos",
    link: "/videos",
    categories: ["Gaming", "Study", "DIY", "ASMR", "Unboxing", "Review"],
    id: 3,
  },
  { title: "Subscribed", link: "/subscribed", id: 4 },
];

const Layout = ({ children }) => {
  const location = useLocation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  console.log(navigationItems, "here 1");

  return (
    <LayoutWrapper>
      <Navbar
        isBordered
        css={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#000",
          color: "white",
          borderBottom: "2px solid #505050",
        }}
      >
        <Navbar.Brand>
          <Navbar.Toggle
            onChange={(e) => setIsNavbarVisible(e)}
            aria-label="toggle navigation"
          />
          <Link href="/">
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
              DeCine
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          {navigationItems.map((item) => (
            <Navbar.Link
              isActive={item.link === location.pathname}
              href={item.link}
              key={item.id}
            >
              {item.title}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content css={{backgroundColor: "transparent"}}>
          {/* <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item> */}
          <ConnectButton  />
        </Navbar.Content>
        <Navbar.Collapse
          css={{
            width: "200px",
            position: "absolute",
            backgroundColor: "#000",
            overflowY: "none",
          }}
          isOpen={isNavbarVisible}
        >
          {navigationItems.map((item, index) => {
            if (item.link === location.pathname && !!item.categories) {
              return item.categories.map((category, index) => (
                <Navbar.CollapseItem key={index} hidden={!isNavbarVisible}>
                  <Link
                    color="inherit"
                    css={{
                      minWidth: "50%",
                    }}
                    href="#"
                  >
                    {category}
                  </Link>
                </Navbar.CollapseItem>
              ));
            } else {
              return null;
            }
          })}
          <Spacer
            y={1}
            x={0}
            css={{ borderTop: "1px solid #fff", width: "100%" }}
          />
          <Text className="white-text navbar-subtitle">Subscriptions</Text>
          {subscribedChannels.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "50%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <Box
        css={{
          px: "$12",
          marginTop: "80px",
          marginLeft: isNavbarVisible ? "200px" : "0",
          "@xsMax": { px: "$10" },
          position: "relative",
        }}
      >
        {children}
      </Box>
    </LayoutWrapper>
  );
};

const LayoutWrapper = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
  </Box>
);

const Box = styled("div", {
  boxSizing: "border-box",
});

const AcmeLogo = () => (
  <svg
    className=""
    fill="none"
    height="36"
    viewBox="0 0 32 32"
    width="36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default Layout;
