import './App.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import Home from './pages/home';
import AboutMe from './pages/about-me';
import MicrogreenGuide from './pages/microgreen-guide';
import Interactive from './pages/interactive';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
        <Link to="/">
          <Button variant="success">Home</Button> {' '}
        </Link>

        <Link to="/aboutMe">
          <Button variant="success">About Me</Button> {' '}
        </Link>
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="plants">
            Plants
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to="/microgreenGuide">
              <Dropdown.Item href="#/action-1">Microgreens</Dropdown.Item>
            </Link>
            <Link to="/interactive">
              <Dropdown.Item href="#/action-2">Placeholder</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>

        <Link to="/interactive">
          <Button variant="success">Interactive Component</Button> {' '}
        </Link>
        </nav>
      </div>

      <Switch>
        <Route path="/aboutMe">
          <AboutMe />
        </Route>
        <Route path="/microgreenGuide">
          <MicrogreenGuide />
        </Route>
        <Route path="/interactive">
          <Interactive />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
