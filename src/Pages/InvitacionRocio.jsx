import React, { useState, useEffect } from 'react'
import { videosROCIO } from '../Videos/utils'
import { Counter, Map, Confirm, Marca, Calendar } from './utils.jsx'

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
		2: <Counter date='2022-4-29' font='BrittanySignature' pt='60px' />,
		3: <Calendar url='https://calendar.google.com/calendar/u/0/r/month/2022/4/29?eid=MGdrNXM3Z3ByZjk0NXZpZTlibTdkamQzNjQgYXJpZWxwZW5uYUBt&rst=1&ctz=America/Argentina/Buenos_Aires&hl=es&es=1&sf=true&response_updated=1' />,
		4: (
			<Map url='https://www.google.com/maps/place/Janos+Pilar/@-34.4726289,-58.8905256,12z/data=!4m21!1m15!4m14!1m6!1m2!1s0x95bcbaf1af5b2387:0x24a290b93b03b03e!2sAu+Panamericana,+Provincia+de+Buenos+Aires!2m2!1d-58.6153511!2d-34.485358!1m6!1m2!1s0x95bc9ce3d9b1512b:0x6ec2c4b8b23193bc!2sJanos+Pilar,+Panamericana+Km+52,+B1629+Pilar,+Provincia+de+Buenos+Aires!2m2!1d-58.8917633!2d-34.4461729!3m4!1s0x95bc9ce3d9b1512b:0x6ec2c4b8b23193bc!8m2!3d-34.4461729!4d-58.8917633' />
		),
		5: <></>,
		6: <Confirm url='https://forms.gle/rvG4xF7QyamVcdmw5' />,
		7: <Marca />,
	}

	useEffect(() => {
		document.title = 'Rocio'
	}, [])

	return (
		<>
			<div className='invitacionVideo'>
				{videosROCIO.map((video, index) => {
					return (
						<video id={index} key={index} className='video' width='355' height='660' autoPlay={true} muted={true} loop={true}>
							<source src={video} type='video/mp4' />
						</video>
					)
				})}
			</div>
			<div className='botonera'>
				<a className={`boton left ${id === 0 && 'hidden'}`} name='menos' onClick={handleClick} href={`#${id}`}>
					{'<'}
				</a>

				<a className={`boton right ${id === 7 && 'hidden'}`} name='mas' onClick={handleClick} href={`#${id}`}>
					{'>'}
				</a>
			</div>
			{action[id]}
		</>
	)
}
