import React, {Component} from 'react';
import './servicios.css'

class Servicios extends Component {
	render() {
		return (
			<div className="Servicios">
				<h1 className="ServiciosTitle">
					Hacemos
				</h1>
				<ul className="ServiciosItem">
					<li className="ServiciosItems">
						<p>Páginas web</p>
						<img src="https://image.flaticon.com/icons/svg/171/171504.svg" alt=""/>
					</li>
					<li className="ServiciosItems">
						<p>Análisis de datos</p>
						<img src="https://www.flaticon.com/premium-icon/icons/svg/981/981484.svg" alt=""/>
					</li>
					<li className="ServiciosItems">
						<p>SEO</p>
						<img src="https://image.flaticon.com/icons/svg/327/327013.svg" alt=""/>
					</li>
				</ul>
			</div>
		)
	}
}

export default Servicios;