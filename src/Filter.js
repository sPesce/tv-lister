import React from 'react';

class Filter extends React.Component
{
  render()
  {
    return(
      <div className="ui form">
        <h3>Genre</h3>
        <div className="field">
          <select 
            name="type" 
            id="type"
            onChange={this.props.filterHandler}
          >
   
            <option value="all">All</option>
            <option value="comedy">Comedy</option>
            <option value="animation">Animation</option>
            <option value="horror">Horror</option>
            <option value="crime">Crime</option>
            <option value="sci-fi">Sci-Fi</option>
          </select>
        </div>        
      </div>
    );
  }
}

export default Filter;