import React from "react";
import { Grid } from "@nextui-org/react";
import Video from "../../components/videos/Video";
import { useLocation } from "react-router-dom";

const List = (props) => {
  const location = useLocation();
  const categoryId = location?.pathname?.split("/")?.[2];
  return (
    <Grid.Container justify="flex-start" gap={2}>
      {props.items.map((item, i) => {
        if (!!categoryId && categoryId === item?.category?.toLowerCase()) {
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
        } else if (!categoryId) {
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
        }
      })}
    </Grid.Container>
  );
};
export default List;
