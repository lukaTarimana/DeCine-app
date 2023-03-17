import React from "react";
import classes from "./modules/App.module.css";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import  Home from "./pages/home/Home";
import { videos } from "./dummyArrays";
// import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/about">{/* <About /> */}</Route>
        <Route path="/users">{/* <Users /> */}</Route>
        <Route path="/" element={<Home items={videos} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
