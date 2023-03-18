import React from 'react'
import VideoPlayer from '../../components/videos/VideoPlayer';
import VideoItems from '../../components/videos/VideoItems';
import classes from "../../modules/VideoPage.module.css";
import { Avatar } from '@nextui-org/react';
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
                <Avatar src={video.avatar}  size="md" />
                <em>{video.username}</em>
            </div>
        </main>
        <aside>
          <VideoItems items={videos} />
        </aside>
    </div>
  )
}

export default VideoPage