import React, { Component } from 'react';
//import { Player } from 'video-react';
import Iframe from 'react-iframe';
import './video-react.css'
import './video.css'

class Video extends Component {
	render () {
		return (
			<div className="VideoWrapper">
				<Iframe url="https://www.youtube.com/embed/Pr0DAWwEx-E?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
					id="myId"
					className="myClassname"
					allow="autoplay"
					allowFullScreen
				/>
			</div>
		)
	}
}

export default Video;

/*export default (props) => {
  return (
    <Player
      autoPlay
      playsInline
      poster=""
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      src="/src/banner/components/DJI_0014.MOV"
    />
  )
}*/