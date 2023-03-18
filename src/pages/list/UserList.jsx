import React from "react";
import { Grid } from "@nextui-org/react";
import Video from "../../components/videos/Video";

const UserList = (props) => {
  return (
    <Grid.Container justify="flex-start" gap={2}>
      {props.items.map((item, i) => {
        return (
            <Grid xs={12} sm={4} md={3}>
              <Video
                key={i}
                id={i}
                isFeatured={false}
                thumbnail={item.thumbnail}
                avatar={item.avatar}
                title={item.title}
                username={item.username}
                views={item.views}
                date={item.date}
              />
            </Grid>
        );
      })}
    </Grid.Container>
  );
};
export default UserList;
