import React, { Component } from 'react';
import Video from '../../banner/components/video'
import Title from '../../banner/components/title'

class Banner extends Component {
	render () {
		return (
			<div className="">
				<Video />
				<Title 
					title="Creamos diseños detallados"
					image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png"
				/>
			</div>
		)
	}
}

export default Banner;