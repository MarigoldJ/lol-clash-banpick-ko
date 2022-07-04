import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "@screens/NotFound";
import Home from "@screens/Home";
import LinkInfo from "@screens/LinkInfo";
// import TeamBan from "@screens/TeamBan";
import ROUTES from "@utils/routes";
import GlobalStyle from "@styles/global";

// 서버와 socket connection을 미리하지 않게 하기 위함.
const TeamBan = lazy(() => import("@screens/TeamBan"));

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.link} element={<LinkInfo />} />
        <Route
          path={ROUTES.banpick}
          element={
            <Suspense fallback={<>...</>}>
              <TeamBan />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
