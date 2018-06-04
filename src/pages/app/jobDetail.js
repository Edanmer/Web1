import React, { Component } from 'react';
import './main.css';
import axios from 'axios';

class jobDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      jobData: []
    }
  }

  componentDidMount() {
    axios.get(`http://api-empleos.net:8080/jobs/${this.props.match.params.id}`)
      .then((objResponse) => {
        this.setState({ jobData: objResponse.data })
        console.log(JSON.stringify(objResponse.data, null, 2));
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })
  }

  render() {
    return (
      <div className="container">

        <section id="header">
          <div className="searchbar">
            <nav className="navbar">
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              <a className="btn btn-success text-white" href="/postAJob">Post a Job</a>
            </nav>
          </div>
        </section>

        <section id="title">
          <div className="row h200">
            <div className="col-8 d-flex flex-column justify-content-between">
              <h2>{this.state.jobData.company}</h2>
              <h3>{this.state.jobData.address}</h3>
              <div>
                <hr />
              </div>
              <h3>{this.state.jobData.position} - {this.state.jobData.type}</h3>
              <div>
                <hr />
              </div>
            </div>
            <div className="col-4 text-right">
              <img className="img-fluid" src="http://via.placeholder.com/200x200" alt="" />
            </div>
          </div>

        </section>

        <section id="detail">
          <p className="text-justify">
            {this.state.jobData.description}
          </p>
        </section>

        <section id="footer"></section>
      </div>
    )
  }
}
export default jobDetail;