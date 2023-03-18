import { Link } from "react-router-dom"
import classes from "../../modules/VideoItem.module.css";
import { Image } from "@nextui-org/react";

const VideoItem = (props) => {
  const {id } = props;
  return (
    <Link style={{minWidth: "80%"}} to={`/videos/${id}`}>
      <div className={classes['video-item-div']}>
          <Image 
          height={100}
          width={140}
          className={classes['video-item-image']}
          src={props.thumbnail}
          alt={props.title}
          objectFit="cover"
          />
          <div className={classes['video-item-info']}>
              <strong>{props.title}</strong>
              <span>{props.channelName}</span>
          </div>

      </div>
    </Link>
  )
}

export default VideoItem