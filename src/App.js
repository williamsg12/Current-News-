import { Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Articles from './Components/Articles';
import Home from './Components/Home';
import NavBars from './Components/NavBar';
import Quote from './Components/Quote';
import RandomPictue from './Components/RandomPictue';
import ParticleBackground from './Components/ParticleBackground';


function App() {
  return (
		<div className='App'>
			<NavBars />
		
		
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/picture' component={RandomPictue} />
			<Route path='/articles' component={Articles} />
			<Route path='/quote' component={Quote} />
			<ParticleBackground />
			
		</div>
	);
}

export default App;
