import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    MuiImageListItem: 350,
  },
  imageList: {
    width: "auto",
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function GridImageList() {
  const classes = useStyles();
  const mystate = useSelector((state) => state.movFilter);
  const mName = useSelector((state) => state.movSearch);
  let navigate = useNavigate();
  return (
    <div className={classes.root}>
      <ImageList rowHeight={350} className={classes.imageList} cols={4}>
        {mystate
          .filter((item) => item.title.toLowerCase().includes(mName))
          .map((item) => (
            <ImageListItem key={item.id}>
              <div
                onClick={() => {
                  navigate("/movieinfo");
                }}
              >
                <img src={item.poster_url} alt={item.title} />
                <ImageListItemBar
                  title={item.title}
                  subtitle={
                    <span>
                      Released Date:{" "}
                      {new Date(item.release_date).toDateString()}
                    </span>
                  }
                />
              </div>
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
}
