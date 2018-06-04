import React, { Component } from 'react';
import './main.css';

class filteredJobs extends Component {

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

        <section className="separation">
          <hr className="hr-text" data-content="Design" />
        </section>

        <section className="jobTable">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Location</th>
                <th>Position</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paris, France</td>
                <td>Web Developer</td>
                <td>Sensio Labs</td>
              </tr>

              <tr>
                <td>Paris, France</td>
                <td>Web Developer</td>
                <td>Sensio Labs</td>
              </tr>
              <tr>
                <td>Venecia, Italy</td>
                <td>Web Developer</td>
                <td>Sensio Labs</td>
              </tr>
            </tbody>
          </table>

          <div className="row">
            <h3 className="col-5"># jobs in this category - page #/#</h3>
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
                <a className="page-link" href="">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="footer"></section>
      </div>
    )
  }
}

export default filteredJobs;