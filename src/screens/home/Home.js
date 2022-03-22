import React from "react";
import './Home.css';
import Header from '../../common/header/Header.js';
import moviesData from '../../common/moviesData.js';
import SingleLineImageList from "../../common/SingleLineList";
import GridImageList from "../../common/GridList";
import SimpleCard from "../../common/Card";
import genres from "../../common/genre.js";
import artists from "../../common/artists.js";


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            poster_url: [moviesData.map(data => data.poster_url)],
            title: [moviesData.map(data => data.title)],
        };
    }


    render(){
        return(
            <div className="Home">
            <div className="container-sub">
            <Header></Header>
              <div id="UpcomingHeading">
              <span>Upcoming Movies</span>
              </div>
              <SingleLineImageList dataList={moviesData}></SingleLineImageList>
            </div>
              <div className='flex-container'>
                 <div className='left'>
                     <GridImageList dataList={moviesData}></GridImageList>
                 </div>
                 <div className='right'>
                     <SimpleCard genres={genres} artists={artists}></SimpleCard>
                 </div>
              </div>
            </div>
        )
    }


}

export default Home;