import React from 'react';
import classes from "../../modules/VideoPlayer.module.css";

const VideoPlayer = (props) => {
  return (
    <div>
        <video className={classes['video']} controls autoPlay name="media">
            <source src={props.src} type="video/mp4" />
        </video>
    </div>
  )
}

export default VideoPlayer