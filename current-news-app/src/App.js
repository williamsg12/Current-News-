import { Navbar } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Articles from './Components/Articles';
import Home from './Components/Home';
import NavBars from './Components/NavBar';
import RandomPictue from './Components/RandomPictue';


function App() {
  return (
    <div className="App">

     <NavBars />


     <Route path='/about' component={About}/>
     <Route path='/picture' component={RandomPictue}/>
     <Route path='/articles' component={Articles}/>
    </div>

  );
}

export default App;
