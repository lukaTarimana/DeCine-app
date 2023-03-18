import React from "react";
import classes from "../../modules/Video.module.css";
import { Card, Link, Image, Avatar } from "@nextui-org/react";


const Video = (props) => {  

  
  return (
    <Link css={{minWidth: "100%"}} href={`/videos/${props.id}`}>
      <div className={classes['video-div']} >
          <Image
            width={"100%"}
            height={props.isFeatured ? 360 : 180}
            css={{ borderRadius: "1.5rem" }}
            src={props.thumbnail}
            alt={"DeCine Video Thumbnail"}
            className={classes['video-thumbnail']}
            objectFit={"cover"}
          />
            <div className={classes["video-description"]}>
              <strong>{props.title}</strong>
              {/* <span>{props.username}</span> */}
              <span>
                {props.views} viewers
              </span>
            </div>
      </div>
    </Link>
  );
};
export default Video;
