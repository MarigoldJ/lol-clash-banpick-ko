import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { darkTheme, GlobalStyles } from "./styles";
import routes from "./routes";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import { ThemeProvider } from "styled-components";
import InfoLink from "./screens/InfoLInk";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route path={routes.home} exact>
              <Home />
            </Route>
            <Route path={routes.infoLink} exact>
              <InfoLink />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
