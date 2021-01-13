import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { FirstSection } from './components/firstsection/FirstSection';
import { Home } from './components/home/Home';
import { HtmlPage } from './components/htmlpage/HtmlPage';
import { CssPage } from './components/csspage/CssPage';
import { NpmPage } from './components/npmpage/NpmPage';
import { NodePage } from './components/nodepage/NodePage';
import { VcsPage } from './components/vcspage/VcsPage';
import { GitPage } from './components/gitpage/GitPage';

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
