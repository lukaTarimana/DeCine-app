import React from 'react';
import classes from "../../modules/VideoPlayer.module.css";
import "../../modules/VideoPlayer.css";
import { DefaultPlayer as Video } from 'react-html5video';
import "react-html5video/dist/styles.css";

const VideoPlayer = (props) => {
  return (
    <div className={classes['video']} >
        <Video style={{paddingBottom: "56.25%"}} poster={props.thumbnail} name="media">
            <source src={props.src} type="video/mp4" />
        </Video>
    </div>
  )
}

export default VideoPlayer