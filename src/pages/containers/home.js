import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import FullpageWrapper from '../../fullPage/FullpageWrapper'

class Home extends Component {
	render() {
		return (
			<HomeLayout>
				<FullpageWrapper />
			</HomeLayout>
		)
	}
}

export default Home;