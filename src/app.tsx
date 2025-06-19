import React, { ReactElement } from "react";
import {
  HashRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

import Main from "./main";

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