import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { FirstSection } from './components/firstsection/FirstSection';
import { Home } from './components/home/Home';
import { HtmlPage } from './components/pages/HtmlPage';
import { CssPage } from './components/pages/CssPage';
import { NpmPage } from './components/pages/NpmPage';
import { NodePage } from './components/pages/NodePage';
import { VcsPage } from './components/vcspage/VcsPage';
import { GitPage } from './components/pages/GitPage';

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

        <Footer />
      </Router>
    </>
  );
}

export default App;
