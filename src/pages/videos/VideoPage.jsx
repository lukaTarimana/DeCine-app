import React from 'react'
import VideoPlayer from '../../components/videos/VideoPlayer';
import VideoItems from '../../components/videos/VideoItems';
import classes from "../../modules/VideoPage.module.css";
import { Avatar, Button } from '@nextui-org/react';
import { videos } from "../../dummyArrays";
import { useParams } from 'react-router-dom';

const VideoPage = (props) => {
    const { videoId } = useParams();
    const video = videos[videoId];
  return (
    <div className={classes['video-page']}>
        <main>
            <VideoPlayer src={video.video} thumbnail={video.thumbnail}/>
            <strong>{video.title}</strong>
            <div className={classes['video-user-info']}>
                <div className={classes['video-user']}>
                  <Avatar src={video.avatar}  size="md" />
                  <div className={classes['video-channel-info']}>
                    <strong>{video.username}</strong>
                    <em>{video?.bio}</em>
                  </div>
                  <Button auto color="error">Subscribe</Button>
                </div>
                <div className={classes['video-ui-controls']}>
                    <Button auto color="secondary" icon={"🎁"}>Gift</Button>
                    <Button auto color="success" icon={"👍"}>{video?.likes || "2.3K"}</Button>
                    <Button auto color="error" iconRight={"👎"}></Button>
                    <Button auto color="secondary" icon={"🔗"}>Share</Button>
                    <Button css={{fontSize: "1.5rem", fontWeight: "bold"}} auto color="secondary" >···</Button>
                </div>
            </div>
            <div className={classes['video-description']}>
              {video?.description || "Hello. This is a test Description."}
            </div>
        </main>
        <aside>
          <VideoItems items={videos} />
        </aside>
    </div>
  )
}

export default VideoPage