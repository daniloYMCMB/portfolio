import React, { Component } from 'React'

import './button.css'

class Button extends Component {
	render () {
		return (
				<button 
					className="Button" 
					onClick={() => this.props.fullpageApi.moveSectionDown()}
				>
					Ordenar Ahora
				</button>
		)
	}
}

export default Button;