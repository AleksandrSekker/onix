import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import { Home } from './pages/Home/Home.tsx';
import { HtmlPage } from './pages/technologies/HtmlPage.tsx';
import { CssPage } from './pages/technologies/CssPage.tsx';
import { NpmPage } from './pages/technologies/NpmPage.tsx';
import { NodePage } from './pages/technologies/NodePage.tsx';
import { VcsPage } from './pages/technologies/VcsPage.tsx';
import { GitPage } from './pages/technologies/GitPage.tsx';
import ArrayBiography from './pages/ArrayBiography/ArrayBiography.tsx';
import { Pomodoro } from './pages/Pomodoro/Pomodoro.tsx';
import RestCountries from './pages/RestCountries/RestCountries.tsx';
import { DetailCoutnry } from './pages/RestCountries/components/DetailCoutnry.tsx';
import LessonSeven from './pages/LessonSeven/LessonSeven.tsx';
import './index.scss';
import Layout from './layout/Layout.tsx';

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return (
    <main>
      <div>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <div className="absolute__for__animation">
              <Layout>
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
              </Layout>
            </div>
          </animated.div>
        ))}
      </div>
    </main>
  );
}
export default App;
