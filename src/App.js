import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/home/Home";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import Layout from "./components/layout/Layout";
import "./styles.css";
import classes from "./modules/App.module.css";
import Home from "./pages/home/Home";
import { videos } from "./dummyArrays";
import VideoPage from "./pages/videos/VideoPage";

const App = () => {
  const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: false,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Router>
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Layout>
            <Routes>
              <Route path="/movies">{/* <Movies /> */}</Route>
              <Route path="/streaming">{/* <Streaming /> */}</Route>
              <Route path="/videos/:videoId" element={<VideoPage />}>
                {/* <Users /> */}
              </Route>
              <Route path="/" element={<Home items={videos} />}></Route>
            </Routes>
          </Layout>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
