import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';

const navLinks = [{ path: '/', name: 'Home' }, { path: '/about', name: 'About' }];

function App() {
	return (
		<Router>
			<Nav name="Pressure Calc" links={navLinks} />
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</Router>
	);
}

export default App;
