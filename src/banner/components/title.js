import React, { Component } from 'react';
import './title.css';
import Video from './video.js';

class Title extends Component {

	state = {
		title: 'Danilo Viacava'
	}

	constructor(props) {
		super(props)
		this.state = {
			title: props.title,
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
			<div className="Relative">
				<Video />
				<div className="TitleAbsolute">
					<p className="TitleMain">{this.state.title}</p>
					<img 
						className="TitleImage"
						src={this.props.image}
						alt=""
						width={"auto"}
						height={"auto"}
					/>
					<h3>Subtitle</h3>
					<button className="ButtonBanner" onClick={this.handleClick}>Presioname</button>
				</div>
			</div>
		)
	}
}

export default Title;