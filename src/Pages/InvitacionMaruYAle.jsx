import React, { useState, useEffect } from 'react'
import { videosMYA } from '../Videos/utils'
import { Counter, Map, Confirm, Marca, Calendar, CopyToClipBoard } from './utils.jsx'

export function InvitacionMaruYAle() {
	const [id, setId] = useState(0)

	const handleClick = (e) => {
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
		2: <></>,
		3: <Counter date='2022-7-2' font='Playlist' pt='100px' />,
		4: <Calendar url='https://calendar.google.com/event?action=TEMPLATE&tmeid=N2ZiZHYwcDNsbnNqZTR1azVkNWYzYjFzajkgYXJpZWxwZW5uYUBt&tmsrc=arielpenna%40gmail.com' />,
		5: <Map url='https://goo.gl/maps/BgzQ7v1rc4wrn56z5' />,
		6: <CopyToClipBoard />,
		7: <Confirm url='https://docs.google.com/forms/d/e/1FAIpQLSd5WB1yPndRwD0bGnC-5bkD4fIwqVGkaZwdOz9IVbybTi2gUw/viewform' />,
		8: <Marca />,
	}

	useEffect(() => {
		document.title = 'Maru & Ale'
	}, [])

	return (
		<>
			<div className='invitacionVideo'>
				{videosMYA.map((video, index) => {
					return (
						<video id={index} key={index} className='video' width='355' height='660' autoPlay={true} muted={true} loop={true}>
							<source src={video} type='video/mp4' />
						</video>
					)
				})}
			</div>
			<div className='botonera'>
				<a className={`boton font left ${id === 0 && 'hidden'}`} name='menos' onClick={handleClick} href={`#${id}`}>
					{'<'}
				</a>

				<a className={`boton font right ${id === 8 && 'hidden'}`} name='mas' onClick={handleClick} href={`#${id}`}>
					{'>'}
				</a>
			</div>
			{action[id]}
		</>
	)
}
