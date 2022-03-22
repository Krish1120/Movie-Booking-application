import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 'auto',
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function GridImageList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageList  rowHeight={350} className={classes.imageList} cols={4}>
        {props.dataList.map((item) => (
          <ImageListItem key={item.id}>
            <a href='#'><img src={item.poster_url} alt={item.title} />
              <ImageListItemBar 
              title={item.title}
              subtitle={<span>Released Date: {new Date(item.release_date).toDateString()}</span>}
              />
            </a>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
