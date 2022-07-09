import React from 'react'

export default function VideoContainer({ url }) {
	return <iframe className='iframe' frameborder='0' src={url} allowFullScreen allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
}
