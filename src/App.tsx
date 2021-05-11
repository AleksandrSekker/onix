import React, { createContext, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import Home from './pages/Home/Home';
import HtmlPage from './pages/technologies/HtmlPage';
import CssPage from './pages/technologies/CssPage';
import NpmPage from './pages/technologies/NpmPage';
import NodePage from './pages/technologies/NodePage';
import VcsPage from './pages/technologies/VcsPage';
import GitPage from './pages/technologies/GitPage';
import ArrayBiography from './pages/ArrayBiography/ArrayBiography';
import Pomodoro from './pages/Pomodoro/Pomodoro';
import DetailCoutnry from './pages/LessonSeven/components/DetailCountry';
import LessonSeven from './pages/LessonSeven/LessonSeven';
import './index.scss';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Chat from './pages/Chat/Chat';

export const ThemeContext = createContext(false);

export const App = () => {
  const [darkTheme, setdarkTheme] = useState(true);
  const location = useLocation();
  const transitions = useTransition(location, (locations) => locations.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  });
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
                  <Route path="/lessonseven" component={LessonSeven} />
                  <Route path="/chat" component={Chat} />
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
