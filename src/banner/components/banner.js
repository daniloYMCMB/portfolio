import React, { Component } from 'react';
import Player from '../../banner/components/video'
import Title from '../../banner/components/title'

class Banner extends Component {
	render () {
		return (
			<div className="">
				<Player />
				<Title />
			</div>
		)
	}
}

export default Banner;