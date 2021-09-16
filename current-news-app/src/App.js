import { Navbar } from 'react-bootstrap';
import './App.css';
import About from './Components/About';
import Articles from './Components/Articles';
import Home from './Components/Home';
import NavBars from './Components/NavBar';
import RandomPictue from './Components/RandomPictue';


function App() {
  return (
    <div className="App">
     {/* <NavBars /> */}
     {/* <RandomPictue /> */}
     {/* <About /> */}
     {/* <Home /> */}
     <Articles />
    </div>
  );
}

export default App;
