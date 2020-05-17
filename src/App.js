import React from 'react';
import Nav from './components/navbar/navbar';
import AboutMe from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import {BrowserRouter as Routers, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Routers>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />  
        <Route path="/AboutMe" exact component={AboutMe} />
        <Route path="/Resume" exact component={Resume} />
        <Route path="/Portfolio" exact component={Portfolio} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
    </div>
    </Routers>
  );
}

const Home = () => {
    return(
      <div className="App">
        <div className="welcome-card">
          <h2 className="great">Hello</h2>
          <h1 className="intro">I'm Siddhant</h1>
          <h3 className="details">A Creative Designer, Full Stack Developer  & dApp Developer</h3>
        </div>
      </div>
    );
}

export default App;
