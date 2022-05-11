import React from 'react'
import './index.css'
import './styles.css'
import { InvitacionMaruYAle } from './Pages/InvitacionMaruYAle'
import { InvitacionRocio } from './Pages/InvitacionRocio'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='invitacion'>
			<Routes>
				<Route path='/invitacion-maru-y-ale' element={<InvitacionMaruYAle />} />
				<Route path='/invitacion-rocio' element={<InvitacionRocio />} />
			</Routes>
		</div>
	)
}

export default App
