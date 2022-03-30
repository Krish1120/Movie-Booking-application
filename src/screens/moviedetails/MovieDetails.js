import React from "react";
import "./MovieDetails.css";
import Header from "../../common/header/Header.js";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import YouTube from "react-youtube";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import BasicRating from "../../common/StarRating";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 10,
  },
  media: {
    height: 350,
  },
});

function MovieDetails() {
  const classes = useStyles();
  const mName = useSelector((state) => state.movSearch);
  const mystate = useSelector((state) => state.movFilter);
  let navigate = useNavigate();
  console.log(
    mystate
      .filter((item) => item.title.toLowerCase() === mName)
      .map((item) =>
        item.artists.map((item) => item.first_name + " " + item.last_name)
      )
  );
  return (
    <div className="MovieDetails">
      <div className="container-sub">
        <Header></Header>
        <Typography
          variant="subtitle1"
          id="back"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </Typography>
        <div className="container">
          <div id="left">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={mystate
                    .filter((item) => item.title.toLowerCase() === mName)
                    .map((item) => item.poster_url)}
                />
              </CardActionArea>
            </Card>
          </div>
          <div id="middle">
            <Typography variant="headline" component="h2">
              {mystate
                .filter((item) => item.title.toLowerCase() === mName)
                .map((item) => item.title)}
            </Typography>
            <div className="details">
              <span>Genre: </span>
              <Typography variant="body1">
                {mystate
                  .filter((item) => item.title.toLowerCase() === mName)
                  .map((item) => item.genres + ",")}
              </Typography>
            </div>
            <div className="details">
              <span>Duration: </span>
              <Typography variant="body1">
                {mystate
                  .filter((item) => item.title.toLowerCase() === mName)
                  .map((item) => item.duration)}
              </Typography>
            </div>
            <div className="details">
              <span>Release Date: </span>
              <Typography variant="body1">
                {mystate
                  .filter((item) => item.title.toLowerCase() === mName)
                  .map((item) => new Date(item.release_date).toDateString())}
              </Typography>
            </div>
            <div className="details">
              <span>Rating: </span>
              <Typography variant="body1">
                {mystate
                  .filter((item) => item.title.toLowerCase() === mName)
                  .map((item) => item.critics_rating)}
              </Typography>
            </div>
            <div className="details2 details">
              <span>Plot: </span>
              <Typography variant="body1">
                {mystate
                  .filter((item) => item.title.toLowerCase() === mName)
                  .map((item) => item.storyline)}
              </Typography>
            </div>
            <div className="details2">
              <span>Trailer: </span>
              <YouTube
                videoId={mystate
                  .filter((item) => item.title.toLowerCase() === mName)
                  .map((item) => item.trailer_url)}
              ></YouTube>
            </div>
          </div>
          <div id="right">
            <Typography variant="headline" component="h4">
              Rate this movie:
            </Typography>
            <BasicRating></BasicRating>
            <Typography variant="headline" component="h4" id="a1">
              Artists:
            </Typography>
            <div>
              <ImageList sx={{ width: 100, height: 10 }}>
                {mystate
                  .filter((item) => item.title.toLowerCase() === mName)
                  .map((item) =>
                    item.artists.map((item) => (
                      <ImageListItem key={item.id}>
                        <img src={item.profile_url} srcSet={item.profile_url} />
                        <ImageListItemBar
                          title={item.first_name + " " + item.last_name}
                        />
                      </ImageListItem>
                    ))
                  )}
              </ImageList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
