import React from 'react'
import ShowTitle from './ShowTitle'

class TvList extends React.Component
{
  render()
  {
    return(
      <div className="grid ui">
        {this.props.shows.map(show => <ShowTitle show={show} liClicked={this.props.liClicked}/>)}
      </div>
    )
  }
}

export default TvList;