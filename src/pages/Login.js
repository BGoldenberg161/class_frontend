import React from 'react'
import LoginForm from '../components/Auth/LoginForm'



const Login = props => {
	
	return (
		<div>
			<LoginForm setToken={props.setToken}/>
		</div>
	)
}

export default Login
