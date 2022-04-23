import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import About from './pages/About';
import Projects from './pages/Projects';
import Objectives from './pages/Objectives';
import Events from './pages/Events';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Joinus from './pages/Joinus';
import Gallery from './pages/Gallery';
import Support from './pages/Support';

function App() {
  return (
    <div className="App">
            <Router>
           <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/about' component={About} />
             <Route exact path='/projects' component={Projects} />
             <Route exact path='/objectives' component={Objectives} />
             <Route exact path='/events' component={Events} />
             <Route exact path='/team' component={Team} />
             <Route exact path='/contact' component={Contact} />
             <Route exact path='/join-us' component={Joinus} />
             <Route exact path='/gallery' component={Gallery} />
             <Route exact path='/support' component={Support} />
           </Switch>
       </Router>
    </div>
  );
}

export default App;
