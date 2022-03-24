import React from 'react'
import logo from '../images/logoKisar.png'

export const Counter = () => {
	let hoy = new Date()
	let fiesta = new Date('2022-4-29')
	let diferencia = fiesta - hoy
	let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))

	return (
		<div className='base container' style={{ paddingTop: '30px' }}>
			<p className='base dias'>{dias}</p>
		</div>
	)
}
export const Calendar = () => {
	return (
		<a className='base btn' target='_blank' href='https://calendar.google.com/calendar/u/0/r/month/2022/4/29?eid=MGdrNXM3Z3ByZjk0NXZpZTlibTdkamQzNjQgYXJpZWxwZW5uYUBt&rst=1&ctz=America/Argentina/Buenos_Aires&hl=es&es=1&sf=true&response_updated=1'>
			Agregar al calendario
		</a>
	)
}
export const Map = () => {
	return (
		<a
			className='base btn'
			target='_blank'
			href='https://www.google.com/maps/place/Janos+Pilar/@-34.4726289,-58.8905256,12z/data=!4m21!1m15!4m14!1m6!1m2!1s0x95bcbaf1af5b2387:0x24a290b93b03b03e!2sAu+Panamericana,+Provincia+de+Buenos+Aires!2m2!1d-58.6153511!2d-34.485358!1m6!1m2!1s0x95bc9ce3d9b1512b:0x6ec2c4b8b23193bc!2sJanos+Pilar,+Panamericana+Km+52,+B1629+Pilar,+Provincia+de+Buenos+Aires!2m2!1d-58.8917633!2d-34.4461729!3m4!1s0x95bc9ce3d9b1512b:0x6ec2c4b8b23193bc!8m2!3d-34.4461729!4d-58.8917633'
		>
			¿Cómo llegar?
		</a>
	)
}
export const Hashtag = () => {
	return <p className='base'>Hashtag</p>
}
export const Confirm = () => {
	return (
		<a className='base btn' target='_blank' href='https://forms.gle/rvG4xF7QyamVcdmw5'>
			Confirmar Asistencia
		</a>
	)
}
export const Marca = () => {
	return <img className='base marca sombra' src={logo} alt='logoKisar' />
}
