import React from 'react';
import logo from './logo.svg';
import './App.css';
import tvShows from './TvShows'
import Filter from './Filter'
import TvList from './TvList'
import TvDetails from './TvDetails'

class App extends React.Component {
  constructor()
  {
    super();
    this.state =
    {
      shows: tvShows,
      filter: {type: "all"}
    }
  }

  //when filter changes
  filterHandler = (e) =>
  {
    const val = e.target.value;
    this.setState(
      {
        filter:{type: val},
        shows: val === 'all' ? tvShows : tvShows.filter(show => {return show.genre === val})
      }
    );
  }

  //when a movie is clicked in list
  liClicked = (e) =>
  {
    this.setState(
      {
        clickedShow: this.findShow(parseInt(e.target.id))
      }
    )
  }

  //return show from state that has matching id
  findShow = (id) =>
  {
    return this.state.shows.find(show => {return show.id === id})
  }


  render ()
  {
    return (
      <div className="App">
        <h2>Tv Show Lister</h2>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filter filterHandler={this.filterHandler} />
              <br/>
              <TvList shows={this.state.shows} liClicked={this.liClicked}/>
            </div>
            <div className="twelve wide column">
              {this.state.clickedShow ? <TvDetails show={this.state.clickedShow}/> : <h5>Click Title To view Details</h5> }
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
