import React, { Component } from 'react';
import './main.css';
import LoginHeader from '../../components/loginHeader.js';
import Separation from '../../components/separation.js';
// import DataTable from '../../components/dataTable.js';
import axios from 'axios';

class filteredJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobData: [],
      fullJobData: [],
      title: this.props.match.params.id
    }
  }

  componentDidMount() {
    axios.get(`http://api-empleos.net:8080/jobs/category?name=${this.props.match.params.id}`)
      .then((objResponse) => {
        this.setState({ fullJobData: objResponse.data, jobData: objResponse.data.data })
        console.log(JSON.stringify(objResponse, null, 2));
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })
  }

  renderStuff = () => {
    console.log("OUTSIDE: "+this.state.fullJobData.pages);
    if (typeof this.state.fullJobData.pages !== undefined) {
      console.log("INSIDE: " +this.state.fullJobData.pages);
      
      return (
        <div className="row">
          <h4 className="col-5">{this.state.fullJobData.itemCount} jobs
           in this category - page 1/{this.state.fullJobData.pageCount}</h4>
          <ul className="col-5 offset-2 pagination justify-content-end">
            <li className="page-item">
              <a className="page-link" href="" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>
      )
    }
    else{
      return (
        <div></div>
      )
    }
  }

  render() {
    return (
      <div className="container">

        <LoginHeader />
        <section id="header">
          <div className="searchbar">
            <nav className="navbar">
              <form className="form-inline">
                {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
              </form>
              <a className="btn btn-success text-white" href="/postAJob">Post a Job</a>
            </nav>
          </div>
        </section>

        <Separation title={this.state.title} />
        {/* <DataTable dataArray={this.state.jobData} /> */}

        {this.renderStuff()}

        <section id="footer"></section>
      </div>
    )
  }
}

export default filteredJobs;