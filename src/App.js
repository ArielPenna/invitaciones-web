import React from 'react'
import './index.css'
import { Route } from 'react-router-dom'
import Invitaciones from './Pages/Invitaciones'
import './styles.css'
//
function App() {
	return (
		<>
			<Route path='/'>
				<Invitaciones />
			</Route>
		</>
	)
}

export default App
