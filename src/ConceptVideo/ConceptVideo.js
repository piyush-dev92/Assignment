import React from 'react';
import {Carousel} from '3d-react-carousal';
import ReactPlayer from "react-player";
import './ConceptVideo.css';
const ConceptVideo = ()=>{
  const slides = [<ReactPlayer
        url="https://www.youtube.com/watch?v=PErQUzD5VzE"
      />,
    <ReactPlayer
        url="https://www.youtube.com/watch?v=TNVeYOcBd9M"
      />  ,
    <ReactPlayer
        url="https://www.youtube.com/watch?v=7-6lOTTGJ6Q"
      />  ];
		return (
			<div className="container-section height">
				<h1>Concept Videos</h1>
				<Carousel slides={slides} interval={1000}/>
			</div>
			
		)
}
export default ConceptVideo;
