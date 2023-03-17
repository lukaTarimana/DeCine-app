import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Router>
      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/about">{/* <About /> */}</Route>
        <Route path="/users">{/* <Users /> */}</Route>
        <Route path="/"></Route>
      </Routes>
    </Router>
  );
};

export default App;
