import React from "react";

import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import "./style.scss";

const HomeScreen = () => {
  return (
    <div id="home-page">
      <Box1 />
      <Box2 />
    </div>
  );
};

export default HomeScreen;
