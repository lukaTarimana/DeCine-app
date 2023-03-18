import classes from "../../modules/VideoItems.module.css";
import VideoItem from "./VideoItem";


const VideoItems = (props) => {
  return (
    <div className={classes['video-items-div']}>
        {props.items.map((video, i) => {
          return (
            <VideoItem 
                key={i}
                id={i}
                thumbnail={video.thumbnail}
                title={video.title}
                channelName={video.username}
            />
          )
        })}
    </div>
  )
}

export default VideoItems