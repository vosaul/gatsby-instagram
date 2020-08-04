import React from 'react';
import BgVideo from '../../static/video/bg.mp4';

const Video = () => {
  return (
    <div className="intro">
      <video autoPlay muted loop id="myVideo">
        <source src={BgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
