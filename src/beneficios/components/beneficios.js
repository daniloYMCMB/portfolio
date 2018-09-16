import React, { Component } from 'react';
import './beneficios.css'

class Beneficios extends Component {
	render () {
		return (
			<div className="Beneficios">
				<h1 className="BeneficiosTitle">
					Precios
				</h1>
				<p className="BeneficiosSubtitle">
					Ofrecemos tres variantes de diseños. El 
					costo de cada diseño es fijo. Al elegir la
					 opción correcta, no encontrará costos adicionales ni servicios ocultos. No ciframos precios. Cumplimos con todos los requisitos y tomamos en cuenta los deseos necesarios.
				</p>
				<ul className="BeneficiosItem">
					<li className="BeneficiosItems">
						<span>
							S/. 500.00
						</span>
						<p>Economico</p>
						<ul>
							<li>
								<p>100MB Disco Duro</p>
								<p>Ancho de banda ilimitado</p>
								<p>Correos ilimitados</p>
							</li>
						</ul>
						<img src="https://image.flaticon.com/icons/svg/171/171504.svg" alt=""/>
					</li>
					<li className="BeneficiosItems">
						<span>
							S/. 1000.00
						</span>
						<p>Estándar</p>
						<ul>
							<li>
								<p>500MB Disco Duro</p>
								<p>Ancho de banda ilimitado</p>
								<p>Correos ilimitados</p>
							</li>
						</ul>
						<img src="https://www.flaticon.com/premium-icon/icons/svg/981/981484.svg" alt=""/>
					</li>
					<li className="BeneficiosItems">
						<span>
							S/. 1500.00
						</span>
						<p>Premium</p>
						<ul>
							<li>
								<p>1TB Disco Duro</p>
								<p>Ancho de banda ilimitado</p>
								<p>Correos ilimitados</p>
							</li>
						</ul>
						<img src="https://www.flaticon.com/premium-icon/icons/svg/981/981484.svg" alt=""/>
					</li>
				</ul>
			</div>
		)
	}
} 

export default Beneficios;