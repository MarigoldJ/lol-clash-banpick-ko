import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { darkTheme, GlobalStyles } from "./styles";
import routes from "./routes";
import Home from "./screens/Home";
import TeamBan from "./screens/TeamBan";
import NotFound from "./screens/NotFound";
import { ThemeProvider } from "styled-components";
import LinkInfo from "./screens/LinkInfo";

function App() {
  //   const [blueName, setBlueName] = useState(null);
  // const [redName, setRedName] = useState(null);

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route path={routes.home} component={Home} exact />
            <Route path={routes.link} component={LinkInfo} exact />
            <Route path={routes.banpick} component={TeamBan} />

            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
