import React from "react";
import { Grid } from "@nextui-org/react";
import Video from "../../components/videos/Video";

const List = (props) => {
  return (
    <Grid.Container justify="flex-start" gap={2}>
      {props.items.map((item, i) => {
        return (
          <>
            {item.isFeatured ? (
              <Grid xs={12}>
                <h1 style={{ alignSelf: "flex-start" }}>Featured</h1>
              </Grid>
            ) : null}
            {i === 1 ? (
              <Grid xs={12}>
              <h1 style={{ alignSelf: "flex-start" }}> Recommended</h1>
              </Grid>
            ) : null}
            {i === 4 ? (
              <Grid xs={12}>
              <h1 style={{ alignSelf: "flex-start" }}> Trending</h1>
              </Grid>
            ) : null}
            <Grid
              xs={item.isFeatured ? 12 : null}
              sm={item.isFeatured ? 12 : 6}
              md={item.isFeatured ? 12 : 4}
            >
              <Video
                key={i}
                id={i}
                isFeatured={item.isFeatured}
                thumbnail={item.thumbnail}
                avatar={item.avatar}
                title={item.title}
                username={item.username}
                views={item.views}
                date={item.date}
              />
            </Grid>
          </>
        );
      })}
    </Grid.Container>
  );
};
export default List;
