import GlobalStyled, { Wrapper } from "./GlobalStyled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./components/Pages/Home";
import Mission from "./components/Pages/Mission";
import Corporate from "./components/Pages/Corporate";
import Investment from "./components/Pages/Investment";

export const LINKS = [
  {
    name: "What is Jin",
    path: "/",
    components: <Home />,
  },
  {
    name: "Mission",
    path: "/mission-statement",
    components: <Mission />,
  },
  {
    name: "Corporate",
    path: "/corporate-structure",
    components: <Corporate />,
  },
  {
    name: "Investment",
    path: "/investment-approach",
    components: <Investment />,
  },
  {
    name: "Our Teams",
    path: "/biographies",
    components: <Home />,
  },
  {
    name: "Career",
    path: "/career-opportunities",
    components: <Home />,
  },
  {
    name: "Enquiries",
    path: "/enquiries",
    components: <Home />,
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyled />
        <Header />
        <Sidebar />
        <Switch>
          {LINKS.map((link, index) => {
            const { components, path } = link;
            return (
              <Route key={index} path={path} exact>
                {components}
              </Route>
            );
          })}
          {/*<Route exact path="/">*/}
          {/*  <Home />*/}
          {/*</Route>*/}
          {/*<Route exact path="/mission-statement">*/}
          {/*  <Mission />*/}
          {/*</Route>*/}
          {/*<Route exact path="/mission-statement">*/}
          {/*  <Mission />*/}
          {/*</Route>*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
