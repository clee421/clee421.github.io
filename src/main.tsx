import React, { ReactElement } from "react";
import { Body2, Title1 } from "@fluentui/react-components";

import './main.scss';

const Main = (): ReactElement => {
  return (
    <div className="main-container">
      <div>
        <Title1>calvin lee</Title1>
      </div>
      <div className="text">
        <Body2>Welcome to my playground for frontend things. To see my personal site go to <a href="https://calvinlee.dev/">calvinlee.dev</a></Body2>
      </div>
    </div>
  )
};

export default Main;