import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import Layout from "./components/layout/Layout";

import "@rainbow-me/rainbowkit/styles.css";
import "./styles.css";
import classes from "./modules/App.module.css";

import { videos } from "./dummyArrays";

import Home from "./pages/home/Home";
import VideoPage from "./pages/videos/VideoPage";
import Movies from "./pages/movies/Movies";
import CreateVideo from "./pages/create-video/CreateVideo";
import NotFound from "./pages/404/404";

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
              <Route path="/movies/:movieCategory" element={<Movies />} />
              <Route exact path="/movies/" element={<Movies />} />
              {/* <Movies /> */}
              <Route path="/streaming/:streamingCategory" />
              {/* <Streaming /> */}
              <Route
                path="/videos/:videoCategory/:videoId"
                element={<VideoPage />}
              />
              {/* <Users /> */}

              <Route path="/create-video" element={<CreateVideo />} />
              <Route path="/" element={<Home items={videos} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
