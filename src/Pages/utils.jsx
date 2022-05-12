import React, { useState } from 'react'
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
		<a className='base btn' target='_blank' rel='noreferrer' href={url}>
			Agregar al calendario
		</a>
	)
}

export const Map = ({ url }) => {
	return (
		<a className='base btn' target='_blank' rel='noreferrer' href={url}>
			¿Cómo llegar?
		</a>
	)
}

export const Hashtag = () => {
	return <p className='base'>Hashtag</p>
}

export const CopyToClipBoard = () => {
	const [copiado, setCopiado] = useState(false)
	const handleClick = () => {
		let content = '0140044103512658340405'
		navigator.clipboard
			.writeText(content)
			.then(() => {
				setCopiado(true)
				console.log('Text copied to clipboard...')
			})
			.catch((err) => {
				console.log('Something went wrong', err)
			})
	}
	return (
		<>
			<button className='base btn' onClick={handleClick}>
				Copiar CBU
			</button>
			{copiado && <p className='base mensaje'>CBU copiado!</p>}
		</>
	)
}

export const Confirm = ({ url }) => {
	return (
		<a className='base btn' target='_blank' rel='noreferrer' href={url}>
			Confirmar Asistencia
		</a>
	)
}

export const Marca = () => {
	return <img className='base marca sombra' src={logo} alt='logoKisar' />
}
