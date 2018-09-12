import React, { Component } from 'react';
import './title.css';

class Title extends Component {
	render() {

		const styles = {
			container: {
				fontSize: '20px',
				background: 'red',
				fontWeight: 'bold',
				fontFamily: 'cursive',
				width: 300,
			},
			img: {
				maxWidth: '100%',
				height: 'auto',
				display: 'block',
				width: '100%',
			}
		}

		return (
			<div style={styles.container}>
				<div className="Title">
					<p className="TitleMain">Hello Title</p>
					<img 
						style={styles.img}
						src="https://camo.githubusercontent.com/9c8486f1f9e23ad3e14e118bedc909cbc92ec937/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3331343939372f313535333237362f31313733373165362d346533312d313165332d393539632d3636613061303932376464352e706e67"
						alt=""
						width={"auto"}
						height={"auto"}
					/>
					<h3>Subtitle</h3>
				</div>
			</div>
		)
	}
}

export default Title;