import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/pages/Home';
import { HtmlPage } from './components/pages/HtmlPage';
import { CssPage } from './components/pages/CssPage';
import { NpmPage } from './components/pages/NpmPage';
import { NodePage } from './components/pages/NodePage';
import { VcsPage } from './components/pages/VcsPage';
import { GitPage } from './components/pages/GitPage';
import { Header } from './components/Header';
import { FirstSection } from './components/FirstSection';
import { Footer } from './components/Footer';
import { ArrayBiography } from './components/pages/ArrayBiography';

function App() {
  return (
    <>
      <Router>
        <Header />

        <FirstSection />
        <Route exact path="/onix" component={Home} />
        <Route path="/html" component={HtmlPage} />
        <Route path="/css" component={CssPage} />
        <Route path="/npm" component={NpmPage} />
        <Route path="/node" component={NodePage} />
        <Route path="/vcs" component={VcsPage} />
        <Route path="/git" component={GitPage} />
        <Route path="/array" component={ArrayBiography} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
