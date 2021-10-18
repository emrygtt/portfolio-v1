import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About    from './components/About';
import Resume   from './components/Resume';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Navbar   from './components/Navbar';

function App() {
  return (
    <div className= 'App'>
      <Router>
        <Navbar/>
        <div className= 'content'>
          <Switch>      
            <Route name= 'about'    path='/' exact    component={About}></Route>
            <Route name= 'projects' path='/projects'  component={Projects}></Route>
            <Route name= 'resume'   path='/resume'    component={Resume}></Route>
            <Route name= 'contact'  path='/contact'   component={Contact}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
