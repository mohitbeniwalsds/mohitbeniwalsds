import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import responseVideo from '../assets/response.mp4';


const sources = {
  sintelTrailer: 'responseVideo',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};

export default class VideoPlayer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources.bunnyMovie
    };

 
  }

  

  render() {
    return (
        <>
        <div className="container">
        
      <div className="videoplayer">
      <h3 className="mt-5 mb-5"><span className="heading-1">HOW TO</span>&nbsp;<span className="heading-2">USE THE PLATFORM</span></h3>

        <Player
          ref={player => {
            this.player = player;
          }}
          autoPlay
        >
         <source src={responseVideo} />
          <ControlBar autoHide={false} />
        </Player>
      </div>
      </div>
      </>
    );
  }
}