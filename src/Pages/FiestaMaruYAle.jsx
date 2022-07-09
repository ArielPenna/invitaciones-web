import { Collapse, Container, Grid, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import VideoContainer from './VideoContainer'

export function FiestaMaruYAle() {
	const FOTOHISTORIA = 'https://mega.nz/embed/aRQizRAL#071LFC-Yl16j1HQSlTSL3r-48Xoca_9YwIwAbrnUFU4'
	const FIN_DE_FISTA = 'https://mega.nz/embed/XNJzHCba#PBjWzz-iq3QeW6KOziZyxY-KYpRj43AjUTd_wTHdW_4'
	const SAVE_THE_DATE = 'https://mega.nz/embed/uFx1hQzC#CCxHM9ctOibp22WLEx13o7xv0xsxhKNtg82UUjrokpo'

	return (
		<Container fluid justify='center'>
			<Spacer size='lg' />
			<Container gap={2} fluid align='center'>
				<p className='letraMYA'>Una Boda se vive 3 veces...</p>
				<p className='letraMYA'>...al Planearla, </p>
				<p className='letraMYA'> al Celebrarla </p>
				<p className='letraMYA'>y al Recordarla!</p>
			</Container>
			<Collapse.Group splitted>
				<Collapse title='Mirá nuestros Videos' bordered shadow>
					<div className='collapseContainer'>
						<VideoContainer url={SAVE_THE_DATE} />
						<VideoContainer url={FOTOHISTORIA} />

						<VideoContainer url={FIN_DE_FISTA} />
					</div>
				</Collapse>
				<Collapse title='Mirá nuestras Fotos' bordered shadow>
					<Text>MUY PRONTO...</Text>
				</Collapse>
			</Collapse.Group>
		</Container>
	)
}
