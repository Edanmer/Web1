import React, { PureComponent } from 'react';
import '../pages/app/main.css';

class Separation extends PureComponent {

  render() {
    const { title } = this.props; 
    return(
      <section className="separation">
        <hr className="hr-text" data-content={title} />
      </section>
    )
  }
}

export default Separation;