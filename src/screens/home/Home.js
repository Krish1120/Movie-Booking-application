import React from "react";
import './Home.css';
import Header from '../../common/header/Header.js';
import moviesData from '../../common/moviesData.js';
import SingleLineImageList from "../../common/SingleLineList";
import GridImageList from "../../common/GridList";


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
              <Header></Header>
              <div id="UpcomingHeading">
              <span>Upcoming Movies</span>
              </div>
              <SingleLineImageList dataList={moviesData}></SingleLineImageList>
              <div className='flex-container'>
                 <div className='left'>
                     <GridImageList dataList={moviesData}></GridImageList>
                 </div>
                 <div className='right'>
                 </div>
              </div>
            </div>
        )
    }


}

export default Home;