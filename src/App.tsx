import React, { createContext, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
// @ts-ignore
import Home from './pages/Home/Home.tsx';
// @ts-ignore
import HtmlPage from './pages/technologies/HtmlPage.tsx';
// @ts-ignore
import CssPage from './pages/technologies/CssPage.tsx';
// @ts-ignore
import NpmPage from './pages/technologies/NpmPage.tsx';
// @ts-ignore
import NodePage from './pages/technologies/NodePage.tsx';
// @ts-ignore
import VcsPage from './pages/technologies/VcsPage.tsx';
// @ts-ignore
import GitPage from './pages/technologies/GitPage.tsx';
// @ts-ignore
import ArrayBiography from './pages/ArrayBiography/ArrayBiography.tsx';
// @ts-ignore
import Pomodoro from './pages/Pomodoro/Pomodoro.tsx';
// @ts-ignore
import RestCountries from './pages/RestCountries/RestCountries.tsx';
// @ts-ignore
import DetailCoutnry from './pages/RestCountries/components/DetailCoutnry.tsx';
// @ts-ignore
import LessonSeven from './pages/LessonSeven/LessonSeven.tsx';
// @ts-ignore
import './index.scss';
// @ts-ignore
import Header from './layout/Header/Header.tsx';
// @ts-ignore
import Footer from './layout/Footer/Footer.tsx';

export const ThemeContext = createContext(false);

export const App = () => {
  const [darkTheme, setdarkTheme] = useState(false);
  const location = useLocation();
  const transitions = useTransition(
    location,
    (locations) => locations.pathname,
    {
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    },
  );
  return (
    <ThemeContext.Provider value={darkTheme}>
      <main>
        <div>
          {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <div className="absolute__for__animation">
                <Header setdarkTheme={setdarkTheme} />
                <Switch location={item}>
                  <Route exact path="/onix" component={Home} />
                  <Route path="/html" component={HtmlPage} />
                  <Route path="/css" component={CssPage} />
                  <Route path="/npm" component={NpmPage} />
                  <Route path="/node" component={NodePage} />
                  <Route path="/vcs" component={VcsPage} />
                  <Route path="/git" component={GitPage} />
                  <Route path="/array" component={ArrayBiography} />
                  <Route path="/pomodoro" component={Pomodoro} />
                  <Route path="/counries" component={RestCountries} />
                  <Route path="/lessonseven" component={LessonSeven} />
                  <Route path="/:handle" component={DetailCoutnry} />
                </Switch>
                <Footer />
              </div>
            </animated.div>
          ))}
        </div>
      </main>
    </ThemeContext.Provider>
  );
};
