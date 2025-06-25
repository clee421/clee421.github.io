import React, { ReactElement } from "react";
import {
  HashRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

import Main from "./main";

gsap.registerPlugin(useGSAP, SplitText);

const App = (): ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
