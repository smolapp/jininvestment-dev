import { createRef, useEffect, useState } from "react";
import GlobalStyled, { Wrapper } from "./GlobalStyled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./components/Pages/Home";
import Mission from "./components/Pages/Mission";
import Corporate from "./components/Pages/Corporate";
import Investment from "./components/Pages/Investment";
import Footer from "./components/Footer";
import Prefetch from "./components/Pages/Prefetch";
import Animate from "./components/Pages/Animate";
import Teams from "./components/Pages/Teams";
import Career from "./components/Pages/Career";
import Enquiry from "./components/Pages/Enquiry";

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
    components: <Teams />,
  },
  {
    name: "Career",
    path: "/career-opportunities",
    components: <Career />,
  },
  {
    name: "Enquiries",
    path: "/enquiries",
    components: <Enquiry />,
  },
];

function App() {
  const [animate, setAnimate] = useState(true);
  const [animateIntro, setAnimateIntro] = useState(true);
  const hasAgreed = localStorage.getItem("agree");

  const handleAnimationEnd = () => {
    setAnimate(false);
  };

  const handleAnimationIntroEnd = () => {
    setAnimateIntro(false);
  };

  return animate ? (
    <Animate onAnimationEnd={handleAnimationEnd} />
  ) : (
    <Router>
      {hasAgreed ? (
        <div
          className="App"
          style={!animateIntro ? { animation: "initial" } : {}}
          onAnimationEnd={handleAnimationIntroEnd}
        >
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
          <Footer />
        </div>
      ) : (
        <Prefetch />
      )}
    </Router>
  );
}

export default App;
