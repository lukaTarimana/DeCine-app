import React from "react";
import classes from "../../modules/Video.module.css";
import { Card, Link, Image, Avatar } from "@nextui-org/react";

const Video = (props) => {
  return (
    <Link href={`/videos/${props.id}`}>
      <Card>
        <Card.Header css={{ width: "unset" }}>
          <Image
            width={320}
            height={180}
            css={{ borderRadius: "1.5rem" }}
            src={props.thumbnail}
            alt={"DeCine Video Thumbnail"}
            objectFit={"cover"}
          />
        </Card.Header>
        <Card.Body>
          <div className={classes["video-info"]}>
            <Avatar src={props.avatar} size="md" />
            <div className={classes["video-description"]}>
              <strong>{props.title}</strong>
              <span>{props.username}</span>
              <span>
                {props.views} views · {props.date}
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default Video;
