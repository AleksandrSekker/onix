import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { Home } from "./components/pages/Home";
import { HtmlPage } from "./components/pages/HtmlPage";
import { CssPage } from "./components/pages/CssPage";
import { NpmPage } from "./components/pages/NpmPage";
import { NodePage } from "./components/pages/NodePage";
import { VcsPage } from "./components/pages/VcsPage";
import { GitPage } from "./components/pages/GitPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ArrayBiography } from "./components/pages/ArrayBiography";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <div className='dark'>
      <main>
        <Header />
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <div className='absolute__for__animation'>
              <Switch location={item}>
                <Route exact path='/onix' component={Home} />
                <Route path='/html' component={HtmlPage} />
                <Route path='/css' component={CssPage} />
                <Route path='/npm' component={NpmPage} />
                <Route path='/node' component={NodePage} />
                <Route path='/vcs' component={VcsPage} />
                <Route path='/git' component={GitPage} />
                <Route path='/array' component={ArrayBiography} />
              </Switch>
              <Footer />
            </div>
          </animated.div>
        ))}
      </main>
    </div>
  );
}

export default App;
