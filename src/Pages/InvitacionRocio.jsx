import React, { useState, useEffect } from 'react'
import { videos } from '../Videos/utils'
import { Counter, Map, Hashtag, Confirm, Marca, Calendar } from './utils.jsx'

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

	const action = {
		0: <></>,
		1: <></>,
		2: <Counter />,
		3: <Calendar />,
		4: <Map />,
		5: <></>,
		6: <Confirm />,
		7: <Marca />,
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
				<a className={`boton left ${id === 0 && 'hidden'}`} name='menos' onClick={handleClick} href={`#${id}`}>
					<i className='bi bi-arrow-left-circle'></i>
				</a>

				<a className={`boton right ${id === 7 && 'hidden'}`} name='mas' onClick={handleClick} href={`#${id}`}>
					<i className='bi bi-arrow-right-circle'></i>
				</a>
			</div>
			{action[id]}
		</>
	)
}
