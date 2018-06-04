import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import lodash from 'lodash';
import Separation from '../../components/separation.js';
import DataTable from '../../components/dataTable.js';
import LoginHeader from '../../components/loginHeader.js';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobData: [],
      categoryData: []
    }
  }

  componentDidMount() {
    axios.get('http://api-empleos.net:8080/jobs')
      .then((objResponse) => {
        this.setState({ jobData: objResponse.data.data })
        console.log(JSON.stringify(objResponse, null, 2));
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })

    axios.get('http://api-empleos.net:8080/categories')
      .then((objResponse) => {
        this.setState({ categoryData: objResponse.data })
        console.log(JSON.stringify(objResponse, null, 2));
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })
  }

  renderCategorySeparation = () => {
    const categories = this.state.categoryData;
    const jobs = this.state.jobData;

    let empty = [];
    let html = categories.map((item, index) => {
      let filteredjobs = lodash.filter(jobs, { "category": item.name });
      if( lodash.isEmpty(filteredjobs) ) {
        empty.push(index);
      }
      return (
        <div key={item._id}>
          <Separation title={item.name} />
          <DataTable dataArray={filteredjobs} />
        </div>
      )
    });
    if( !lodash.isEmpty(empty) ){
      empty.forEach(element => {
        html.splice(element, 1);
      });
    }

    return html;
  }

  render() {
    return (
      <div className="container">

        <LoginHeader />

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

        {this.renderCategorySeparation()}

        <section id="footer"></section>
      </div>
    );
  }
}

export default Home;