import React, { Component } from 'react';
import { Player } from 'video-react';
import './video-react.css'
import './video.css'

export default (props) => {
  return (
    <Player
      autoPlay
      playsInline
      poster=""
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      src="/src/banner/components/DJI_0014.MOV"
    />
  )
}