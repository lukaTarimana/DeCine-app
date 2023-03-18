import React from "react";
import { Grid } from "@nextui-org/react";
import Video from "../../components/videos/Video";

const Home = (props) => {
  return (
    <Grid.Container justify="center" gap={1}>
      {props.items.map((item, i) => {
        return (
          <Grid xl={2} lg={3} md={4} sm={6}>
            <Video
              key={i}
              thumbnail={item.thumbnail}
              avatar={item.avatar}
              title={item.title}
              username={item.username}
              views={item.views}
              date={item.date}
              category={item?.category || "All"}
              id={i}
            />
          </Grid>
        );
      })}
    </Grid.Container>
  );
};
export default Home;
