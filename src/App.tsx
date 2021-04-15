import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { Home } from "./pages/Home/Home";
import { HtmlPage } from "./pages/technologies/HtmlPage";
import { CssPage } from "./pages/technologies/CssPage";
import { NpmPage } from "./pages/technologies/NpmPage";
import { NodePage } from "./pages/technologies/NodePage";
import { VcsPage } from "./pages/technologies/VcsPage";
import { GitPage } from "./pages/technologies/GitPage";

import { ArrayBiography } from "./pages/ArrayBiography/ArrayBiography";

import { Pomodoro } from "./pages/Pomodoro/Pomodoro";
import RestCountries from "./pages/RestCountries/RestCountries";
import { DetailCoutnry } from "./pages/RestCountries/components/DetailCoutnry";
import LessonSeven from "./pages/LessonSeven/LessonSeven";
import "./index.scss";
import Layout from "./layout/Layout";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  return (
    <main>
      <div>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <div className='absolute__for__animation'>
              <Layout>
                <Switch location={item}>
                  <Route exact path='/onix' component={Home} />
                  <Route path='/html' component={HtmlPage} />
                  <Route path='/css' component={CssPage} />
                  <Route path='/npm' component={NpmPage} />
                  <Route path='/node' component={NodePage} />
                  <Route path='/vcs' component={VcsPage} />
                  <Route path='/git' component={GitPage} />
                  <Route path='/array' component={ArrayBiography} />
                  <Route path='/pomodoro' component={Pomodoro} />
                  <Route path='/counries' component={RestCountries} />
                  <Route path='/lessonseven' component={LessonSeven} />
                  <Route path='/:handle' component={DetailCoutnry} />
                </Switch>
              </Layout>
            </div>
          </animated.div>
        ))}
      </div>
    </main>
  );
}

export default App;
