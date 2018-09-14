import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Banner from '../../banner/components/banner';
import Servicios from '../../servicios/components/servicios';
import Beneficios from '../../beneficios/components/beneficios';
import Estrategia from '../../estrategia/components/estrategia';

class Home extends Component {
	render() {
		return (
			<HomeLayout>
				<Banner />
				<Servicios />
				<Beneficios />
				<Estrategia />	
			</HomeLayout>
		)
	}
}

export default Home;