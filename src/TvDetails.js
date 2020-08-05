import React from 'react';

class TvDetails extends React.Component
{
  render()
  {
    const {title,releaseYear,genre,pic} = this.props.show;
    return(
      <div class="ui card">
        <div class="image">
          <img src={pic}/>
        </div>
        <div class="content">
          <div class="header">{title}</div>
          <div class="meta"><span class="date">Released In {releaseYear}</span></div>
          <div class="genre">Genre: {genre}</div>
        </div>
        <div class="extra content">
        </div>
      </div>
    )
  }
}

export default TvDetails;