import { Navbar } from 'react-bootstrap';
import './App.css';
import NavBars from './Components/NavBar';
import RandomPictue from './Components/RandomPictue';


function App() {
  return (
    <div className="App">
     {/* <NavBars /> */}
     <RandomPictue />
    </div>
  );
}

export default App;
