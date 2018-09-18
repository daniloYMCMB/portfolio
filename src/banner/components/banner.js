import React, { Component } from 'react';
import Video from '../../banner/components/video'
import Title from '../../banner/components/title'
import Button from './button.js'

class Banner extends Component {
	render () {
		return (
			<div className="BannerContainer">
				<Title 
					title="Creamos diseños detallados"
					image="<htt></htt>ps://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png"
				/>
				<div className="Benefits">
					<ul>
						<li className="BenefitsHosting">
							<div className="BenefitsTop">
								<img src="https://www.flaticon.com/premium-icon/icons/svg/897/897972.svg" width="28" alt=""/>
								<p>
									<span>GRATIS</span>
								</p>
							</div>
							<div className="BenefitsInfo">
								<p>
									Hosting de por vida
								</p>
							</div>
						</li>
						<li className="BenefitsDesign">
							<div className="BenefitsTop">
								<img src="https://image.flaticon.com/icons/svg/1077/1077701.svg" width="28" alt=""/>
								<p>
									1 <span>mes</span>
								</p>
							</div>
							<div className="BenefitsInfo">
								<p>
									Diseño intuitivo
								</p>
							</div>
						</li>
						<li className="BenefitsVelocity">
							<div className="BenefitsTop">
								<img src="https://image.flaticon.com/icons/svg/146/146489.svg" width="28" alt=""/>
								<p>
									2.5 <span>s</span>
								</p>
							</div>
							<div className="BenefitsInfo">
								<p>
									Velocidad de carga
								</p>
							</div>
						</li>
						<li className="BenefitsStars">
							<div className="BenefitsTop">
								<img src="https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/models/hero/star.svg?20170619" width="28" alt=""/>
								<img src="https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/models/hero/star.svg?20170619" width="28" alt=""/>
								<img src="https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/models/hero/star.svg?20170619" width="28" alt=""/>
								<img src="https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/models/hero/star.svg?20170619" width="28" alt=""/>
								<img src="https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/models/hero/star.svg?20170619" width="28" alt=""/>
							</div>
							<div className="BenefitsInfo">
								<p>
									Seguridad 5 estrellas
								</p>
							</div>
						</li>
						<li>
							<Button 
								fullpageApi={this.props.fullpageApi}
							/>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Banner;