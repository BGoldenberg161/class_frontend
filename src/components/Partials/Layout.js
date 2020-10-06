import React from 'react'
import AppBar from './AppBar'
import FooterBar from './FooterBar'

const Layout = (props) => {

	return (
		<>
			<AppBar user={props.user} isLoggedIn={props.isLoggedIn} logoutFunction={props.logoutFunction} />
			<div style={{ marginBottom: '100px' }}>{props.children}</div>
			<FooterBar />
		</>
	)
}

export default Layout
