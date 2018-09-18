import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './title.css';
import Video from './video.js';

class Title extends Component {

	state = {
		title: 'Danilo Viacava',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png',
		subtitle: 'Tecnología que cabe en la palma de tus manos',
	}

	constructor(props) {
		super(props)
		this.state = {
			title: props.title,
			image: props.image,
			subtitle: this.state.subtitle,
		}
	}

	handleClick = (event) => {
		//console.log(this.props.image);
		this.setState({
			title: 'Ricardo Celis',
		})
	}

	render() {
		/*const styles = {
			container: {
				fontSize: '20px',
				background: 'transparent',
				fontWeight: 'bold',
				fontFamily: 'cursive',
				width: 'auto',
			},
			img: {
				maxWidth: '100%',
				height: 'auto',
				display: 'block',
				width: '100%',
			}
		}*/

		return (
			<div className="TitleAbsolute">
				<p className="TitleMain">
					{this.props.title}
				</p>
				<h3>{this.state.subtitle}</h3>
				
			</div>
		)
	}
}

Title.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string,
	//type: PropTypes.onOff(['video', 'audio']),
}

export default Title;