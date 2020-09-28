import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Assignment from './pages/Assignment';
import Grade from './pages/Grade';
import Class from './pages/Class';
import FourOhFour from './pages/FourOhFour';

import { Grommet } from 'grommet';

const theme = {
	global: {
		colors: {
			brand: '#EDA306',
		},
		font: {
			family: 'Roboto',
			size: '18px',
			height: '20px',
		},
	},
};

function App() {
	return (
		<Grommet theme={theme} themeMode='dark' full>
			<AppBar />
			<Switch>
			<Route path='/about' component={About} />
			<Route path='/signup' component={Signup} />
			<Route path='/login' component={Login} />
			<Route path='/profile' component={Profile} />
			<Route path='/assignment' component={Assignment} />
			<Route path='/grade' component={Grade} />
			<Route path='/class' component={Class} />
			<Route exact path='/' component={Home} />
			<Route path='*' component={FourOhFour} />
			</Switch>
		</Grommet>
	);
}

export default App;
