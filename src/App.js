import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Assignment from './pages/Assignment'
import Grade from './pages/Grade'
import Class from './pages/Class'
import FourOhFour from './pages/FourOhFour'
import Layout from './components/Partials/Layout'
import jwtDecode from 'jwt-decode'
import { Grommet } from 'grommet'
import { CaretDown } from 'grommet-icons'
// import { dark } from 'grommet/themes'

require('dotenv').config()
const authTokenPath = process.env.REACT_STORAGE_TOKEN

const theme = {
	global: {
		colors: {
			brand: '#0a64a0'
		},
		elevation: {
			light: {
				xsmall: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
				small: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
				medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
				large: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
				xlarge: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
			}
		},
		font: {
			family: "'Roboto', Arial, sans-serif",
			size: '14px'
		},
		input: {
			weight: 500
		}
	},
	button: {
		border: {
			radius: 0
		},
		padding: {
			vertical: '6px',
			horizontal: '24px'
		},
		extend: props => `
      font-weight: 500;
      text-transform: uppercase;
      font-size: 14px;

      ${props && props.primary && 'color: white;'}
    `
	},
	formField: {
		border: {
			position: 'outer',
			side: 'all'
		},
		label: {
			weight: 600,
			size: 'small',
			color: 'dark-4'
		}
	},
	heading: {
		font: {
			family: "'Roboto', Arial, sans-serif"
		}
	},
	select: {
		icons: {
			down: CaretDown,
			color: 'dark-5'
		}
	}
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  const [user, setUser] = useState({})

  const updateUserData = e => {setUser(e)}

  useEffect((currentUser, user) => {
    if (localStorage.getItem(authTokenPath) && token === ''){
      let decoded = jwtDecode(localStorage.getItem(authTokenPath))
      setIsLoggedIn(true)
      setToken(localStorage.getItem(authTokenPath))
      setCurrentUser(decoded)
    } else if (localStorage.getItem(authTokenPath) && token !== '') {
      setIsLoggedIn(true)
      setCurrentUser(jwtDecode(token))
		}
		if (user === {}){
			const authorizationHeader = {
				headers: { 'Authorization': `Bearer ${token}` }
			}
			axios
      .get(`/api/user/${currentUser.user_id}`, authorizationHeader)
      .then(res => {
        setUser(res.data)
      })
      .catch(err =>
        console.log(err, "You've hit an error in the axios call for user")
      )
		}
  }, [token])
	
	
	const logoutFunction = () => {
		if(localStorage.getItem(authTokenPath)){
			console.log('this is happening')
			localStorage.removeItem(authTokenPath)
			setCurrentUser({})
			setToken('')
			setUser({})
			setIsLoggedIn(false)
		}
	  return
	};
  

	return (
		<Grommet theme={theme} full={true}>
			<Layout user={user} isLoggedIn={isLoggedIn} logoutFunction={logoutFunction}>
				<Switch>
					<Route path='/about' component={About} />
					<Route path='/create' component={Signup} />
					<Route path='/get-in' render={(props) => <Login {...props} setToken={setToken} /> } />
					<Route path='/profile' render={(props) => <Profile {...props} currentUser={currentUser} token={token} updateUserData={updateUserData} /> } />
					<Route path='/assignment' render={(props) => <Assignment {...props} user={user} currentUser={currentUser} token={token} /> } />
					<Route path='/grade' component={Grade} />
					<Route path='/class' render={(props) => <Class {...props} user={user} currentUser={currentUser} token={token} /> } />
					<Route exact path='/' component={Home} />
					<Route path='*' component={FourOhFour} />
				</Switch>
			</Layout>
		</Grommet>
	)
}

export default App
