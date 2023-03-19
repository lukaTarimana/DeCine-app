import React from "react";
import VideoPlayer from "../../components/videos/VideoPlayer";
import VideoItems from "../../components/videos/VideoItems";
import classes from "../../modules/VideoPage.module.css";
import { Avatar, Button } from "@nextui-org/react";
import { videos } from "../../dummyArrays";
import { useParams } from "react-router-dom";
import {
  DislikeIcon,
  EllipsisIcon,
  GiftIcon,
  LikeIcon,
  ShareIcon,
} from "../../components/UI/Icons";

const VideoPage = (props) => {
  const { videoId } = useParams();
  const video = videos[videoId];
  return (
    <div className={classes["video-page"]}>
      <main>
        <VideoPlayer src={video.video} thumbnail={video.thumbnail} />
        <strong>{video.title}</strong>
        <div className={classes["video-user-info"]}>
          <div className={classes["video-user"]}>
            <Avatar src={video.avatar} size="md" />
            <div className={classes["video-channel-info"]}>
              <strong>{video.username}</strong>
              <em>{video?.bio}</em>
            </div>
            <Button auto color="error">
              Subscribe
            </Button>
          </div>
          <div className={classes["video-ui-controls"]}>
            <Button
              auto
              style={{ background: "#404040" }}
              icon={<GiftIcon width={18} height={18} fill="white" />}
            >
              Gift
            </Button>
            <Button
              auto
              style={{ background: "#404040" }}
              icon={<LikeIcon width={18} height={18} fill="white" />}
            >
              {video?.likes || "2.3K"}
            </Button>
            <Button
              auto
              style={{ background: "#404040" }}
              iconRight={<DislikeIcon width={18} height={18} fill="white" />}
            ></Button>
            <Button
              auto
              style={{ background: "#404040" }}
              icon={<ShareIcon width={18} height={18} fill="white" />}
            >
              Share
            </Button>
            <Button
              css={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                background: "#404040",
              }}
              auto
              icon={<EllipsisIcon width={20} height={20} fill="white" />}
            ></Button>
          </div>
        </div>
        <div className={classes["video-description"]}>
          {video?.description || "Hello. This is a test Description."}
        </div>
      </main>
      <aside>
        <VideoItems items={videos} />
      </aside>
    </div>
  );
};

export default VideoPage;
