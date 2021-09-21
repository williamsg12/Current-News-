import { Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Articles from './Components/Articles';
// import Home from './Components/Home';
import Home from './Components/Home';
import NavBars from './Components/NavBar';
import Quote from './Components/Quote';
import RandomPictue from './Components/RandomPictue';
import Stock from './Components/Stock';


function App() {
  return (
		<div className='App'>
			<NavBars />

			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/picture' component={RandomPictue} />
			<Route path='/articles' component={Articles} />
			<Route path='/quote' component={Quote} />
			<Route path='/stock' component={Stock} />
		</div>
	);
}

export default App;
