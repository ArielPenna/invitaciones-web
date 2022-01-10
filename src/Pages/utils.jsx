import React, { useState, useEffect } from 'react'
import logo from '../images/logoKisar.png'

export const Counter = () => {
	let hoy = new Date()
	let fiesta = new Date(2022, 4, 29)
	let diferencia = fiesta - hoy
	let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))

	return (
		<div className='base container'>
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
		<a className='base btn' target='_blank' href='https://www.google.com/maps/place/Av.+Aim%C3%A9+Tschiffely+1801,+B1745JCD+La+Reja,+Provincia+de+Buenos+Aires/@-34.6501359,-58.8193694,17z/data=!4m5!3m4!1s0x95bc946fd8b85229:0x183369ee9f195b06!8m2!3d-34.6504081!4d-58.8174278'>
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
