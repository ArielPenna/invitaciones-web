import React, { useState, useEffect } from 'react'
import logo from '../images/logoKisar.png'

export const Counter = () => {
	let hoy = new Date()
	let fiesta = new Date(2022, 4, 29)
	let diferencia = fiesta - hoy
	let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))

	return (
		<div className='base container'>
			<p className='base diasUp'>{dias}</p>
			<p className='base diasDown'> días</p>
		</div>
	)
}
export const Calendar = () => {
	return (
		<a className='base calendar' target='_blank' href='https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NGJiYjdtZWZyM25sdHN2cGpoMTRoNmw4cGsgYXJpZWxwZW5uYUBt&amp;tmsrc=arielpenna%40gmail.com'>
			<img border='0' src='https://www.google.com/calendar/images/ext/gc_button1_es.gif' />
		</a>
	)
}
export const Map = () => {
	return (
		<a className='base map' target='_blank' href='https://www.google.com/maps/place/Av.+Aim%C3%A9+Tschiffely+1801,+B1745JCD+La+Reja,+Provincia+de+Buenos+Aires/@-34.6501359,-58.8193694,17z/data=!4m5!3m4!1s0x95bc946fd8b85229:0x183369ee9f195b06!8m2!3d-34.6504081!4d-58.8174278'>
			Como llegar
		</a>
	)
}
export const Hashtag = () => {
	return <p className='base'>Hashtag</p>
}
export const Confirm = () => {
	return (
		<a className='base confirm' target='_blank' href='https://docs.google.com/forms/d/1r98AZuldqH9QtFENAFbgajI86M0W2tPS9uIBeaiwrwc/edit?usp=sharing'>
			Confirmar Asistencia
		</a>
	)
}
export const Marca = () => {
	return <img className='base marca sombra' src={logo} alt='logoKisar' />
}
