import React, { useState, useEffect } from 'react'
import v0 from '../Videos/0.mp4'
import { videos } from '../Videos/utils'

export function InvitacionRocio() {
	const [id, setId] = useState(0)

	console.log(id)
	const handleClick = (e) => {
		console.log('e.target.name :', e.target.name)
		if (e.target.name === 'mas') {
			setId(id + 1)
			return id
		}
		if (e.target.name === 'menos') {
			setId(id - 1)
			return id
		}
	}
	return (
		<>
			<div className='invitacionVideo'>
				{videos.map((video, index) => {
					return (
						<video id={index} key={index} className='video' width='355' height='660' autoPlay={true} muted={true} loop={true}>
							<source src={video} type='video/mp4' />
						</video>
					)
				})}
			</div>
			<div className='botonera'>
				<a className='boton left' name='menos' onClick={handleClick} href={`#${id}`}>
					{'<'}
				</a>
				<a className='boton right' name='mas' onClick={handleClick} href={`#${id}`}>
					{'>'}
				</a>
			</div>
			{/* validacion para cada pantalla */}
			{id === 2 && <p className='ejemplo'>Aca iria el counter de cuantos dias faltan</p>}
		</>
	)
}
