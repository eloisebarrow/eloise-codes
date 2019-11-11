import React from 'react';
import ReactPlayer from 'react-player';
import './ReactPlayerComp.css';

export default function ReactPlayerComp() {
  // https://www.npmjs.com/package/react-player
  return (
    <div className="video-container">
      <ReactPlayer url="https://www.youtube.com/watch?v=3gbYHt20IV4&list=RD3gbYHt20IV4&start_radio=1" controls />
    </div>
  )
}
