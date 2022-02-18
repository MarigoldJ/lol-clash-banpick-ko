import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "@screens/NotFound";
import Home from "@screens/Home";
import LinkInfo from "@screens/LinkInfo";
import TeamBan from "@screens/TeamBan";
import ROUTES from "@utils/routes";
import GlobalStyle from "@styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.link} element={<LinkInfo />} />
        <Route path={ROUTES.banpick} element={<TeamBan />} />
      </Routes>
    </>
  );
}

export default App;
