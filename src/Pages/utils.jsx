import React from 'react'
import logo from '../images/logoKisar.png'

export const Counter = ({ date, font, pt }) => {
	let hoy = new Date()
	let fiesta = new Date(date)
	let diferencia = fiesta - hoy
	let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))

	return (
		<div className='base container' style={{ paddingTop: '30px' }}>
			<p className='base dias' style={{ fontFamily: font, paddingTop: pt }}>
				{dias}
			</p>
		</div>
	)
}
export const Calendar = ({ url }) => {
	return (
		<a className='base btn' target='_blank' href={url}>
			Agregar al calendario
		</a>
	)
}
export const Map = ({ url }) => {
	return (
		<a className='base btn' target='_blank' href={url}>
			¿Cómo llegar?
		</a>
	)
}
export const Hashtag = () => {
	return <p className='base'>Hashtag</p>
}
export const Confirm = ({ url }) => {
	return (
		<a className='base btn' target='_blank' href={url}>
			Confirmar Asistencia
		</a>
	)
}
export const Marca = () => {
	return <img className='base marca sombra' src={logo} alt='logoKisar' />
}
