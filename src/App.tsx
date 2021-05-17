import React, { createContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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

export const ThemeContext = createContext(false);

export const App = () => {
  const [darkTheme, setdarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={darkTheme}>
      <Header setdarkTheme={setdarkTheme} />
      <Switch>
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
        <Route path="/:handle" component={DetailCoutnry} />
      </Switch>
      <Footer />
    </ThemeContext.Provider>
  );
};
