import React, { PureComponent } from 'react';
import '../pages/app/main.css';

class Separation extends PureComponent {

  renderText = (title, clickable) => {
    if(clickable) {
      return (
        <a href={`/filteredJobs/${title}`}><hr className="hr-text" data-content={title} /></a>        
      )
    }
    return (
      <hr className="hr-text" data-content={title} />     
    )
  }

  render() {
    const { title, clickable } = this.props; 
    return(
      <section className="separation">
        {this.renderText(title,clickable)}
      </section>
    )
  }
}

export default Separation;