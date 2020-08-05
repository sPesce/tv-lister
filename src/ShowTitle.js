import React from 'react';

class ShowTitle extends React.Component
{
  render()
  {
    return <div
      className="ui animated button"
      id={this.props.show.id}
      onClick={this.props.liClicked}>
        {this.props.show.title}
      </div>
  }
}

export default ShowTitle;