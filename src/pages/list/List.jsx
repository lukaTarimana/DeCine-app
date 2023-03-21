import React, { useRef, useState } from "react";
import "../../modules/List.css";
import { Grid, Input } from "@nextui-org/react";
import Video from "../../components/videos/Video";
import { useLocation } from "react-router-dom";
import { SearchIcon } from "../../components/UI/Icons";

const List = (props) => {
  const [searchList, setSearchList] = useState(props.items || []);

  const location = useLocation();
  const categoryId = location?.pathname?.split("/")?.[2];

  const searchRef = useRef(null);

  const handleSearch = () => {
    setSearchList([]);
    props?.items?.map((item) => {
      if (
        item?.title
          ?.toLowerCase()
          .includes(searchRef?.current?.value?.toLowerCase())
      ) {
        setSearchList((prev) => [...prev, item]);
      }
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Grid.Container justify="flex-start" gap={2}>
      {searchList?.map((item, i) => {
        if (!!categoryId && categoryId === item?.category?.toLowerCase()) {
          return (
            <>
              {item.isFeatured ? (
                <Grid xs={6} key={i}>
                  <h1 style={{ alignSelf: "flex-start" }}>Featured</h1>
                </Grid>
              ) : null}
              {i === 2 ? (
                <Grid xs={12} key={i}>
                  <h1 style={{ alignSelf: "flex-start" }}> Recommended</h1>
                </Grid>
              ) : null}
              {i === 4 ? (
                <Grid xs={12} key={i}>
                  <h1 style={{ alignSelf: "flex-start" }}> Trending</h1>
                </Grid>
              ) : null}
              {i === 0 && (
                <Grid xs={6} key={i}>
                  <Input
                    onKeyDown={handleKeyDown}
                    type={"serach"}
                    contentLeftStyling={false}
                    css={{
                      w: "40%",
                      marginLeft: "auto",
                      "@xsMax": {
                        mw: "300px",
                      },
                      "& .nextui-input-content--left": {
                        h: "100%",
                        ml: "$4",
                        dflex: "center",
                      },
                    }}
                    placeholder="Search..."
                    ref={searchRef}
                  />
                  <span
                    onClick={handleSearch}
                    style={{
                      cursor: "pointer",
                      height: "fit-content",
                      margin: "auto 10px",
                    }}
                  >
                    <SearchIcon
                      fill="var(--nextui-colors-accents6)"
                      size={16}
                    />
                  </span>
                </Grid>
              )}
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
                <Grid xs={6} key={i}>
                  <h1 style={{ alignSelf: "flex-start" }}>Featured</h1>
                </Grid>
              ) : null}
              {i === 1 ? (
                <Grid xs={12} key={i}>
                  <h1 style={{ alignSelf: "flex-start" }}> Recommended</h1>
                </Grid>
              ) : null}
              {i === 4 ? (
                <Grid xs={12} key={i}>
                  <h1 style={{ alignSelf: "flex-start" }}> Trending</h1>
                </Grid>
              ) : null}
              {i === 0 && (
                <Grid xs={6} key={i}>
                  <Input
                    type={"serach"}
                    contentLeftStyling={false}
                    css={{
                      w: "40%",
                      marginLeft: "auto",
                      "@xsMax": {
                        mw: "300px",
                      },
                      "& .nextui-input-content--left": {
                        h: "100%",
                        ml: "$4",
                        dflex: "center",
                      },
                    }}
                    placeholder="Search..."
                    ref={searchRef}
                    onKeyDown={handleKeyDown}
                  />
                  <span
                    onClick={handleSearch}
                    style={{
                      cursor: "pointer",
                      height: "fit-content",
                      margin: "auto 10px",
                    }}
                  >
                    <SearchIcon
                      fill="var(--nextui-colors-accents6)"
                      size={16}
                    />
                  </span>
                </Grid>
              )}
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
