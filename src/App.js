import React from 'react'
import './index.css'
import './styles.css'
import { InvitacionMaruYAle } from './Pages/InvitacionMaruYAle'
import { FiestaMaruYAle } from './Pages/FiestaMaruYAle'
import { InvitacionRocio } from './Pages/InvitacionRocio'
import { Route, Routes } from 'react-router-dom'
import background from './images/background.png'

function App() {
	return (
		<>
			{/* invitaciones */}
			<div className='invitacion'>
				<Routes>
					<Route path='/invitacion-maru-y-ale' element={<InvitacionMaruYAle />} />
					<Route path='/invitacion-rocio' element={<InvitacionRocio />} />
				</Routes>
			</div>
			{/* muestras */}
			<div style={{ backgroundImage: `url(${background})`, minHeight: '1000px' }}>
				<Routes>
					<Route path='/fiesta-maru-y-ale' element={<FiestaMaruYAle />} />
				</Routes>
			</div>
		</>
	)
}

export default App
