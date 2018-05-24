import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  renderTableRows = () => {
    return (
      <tr>
        <td>Punta Cana</td>
        <td>QA Engineer</td>
        <td>Confidencial</td>
      </tr>
    )
  }

  render() {
    return (
      <div className="">
        <div className="backgroundcolor">
          <div className="ui container ui secondary menu ">
            <div className="right menu">
              <a className="ui item">
                Logout
            </a>
            </div>
          </div>
        </div>
        <div className="ui container" style={{ height: 40, marginTop: 40 }}>
          <div style={{ float: "left" }}>
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="circular search link icon"></i>
            </div>
            <button className="ui primary button">
              Search
          </button>
          </div>

          <div style={{ float: "right" }}>
            <button className="ui green button">
              <i className="bullhorn icon"></i>
              Post a Job
          </button>
          </div>
        </div>

        <h4 className="ui container ui horizontal divider header">
          <i className="tint icon"></i>
          Design
        </h4>

        <div className="ui container">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Location</th>
                <th>Position</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Santo Domingo</td>
                <td>Web Designer</td>
                <td>MercaSID</td>
              </tr>
            </tbody>
            <tfoot>
              <tr><th colSpan="3">
                <div className="ui right floated pagination menu">
                  <a className="icon item">
                    <i className="left chevron icon"></i>
                  </a>
                  <a className="item">1</a>
                  <a className="item">2</a>
                  <a className="item">3</a>
                  <a className="item">4</a>
                  <a className="icon item">
                    <i className="right chevron icon"></i>
                  </a>
                </div>
              </th>
              </tr></tfoot>
          </table>
        </div>

        <h4 className="ui container ui horizontal divider header">
          <i className="node js icon"></i>
          Programming
        </h4>

        <div className="ui container">
          <table className="ui celled table">
            <thead>
              <tr><th>Location</th>
                <th>Position</th>
                <th>Company</th>
              </tr></thead>
            <tbody>
              <tr>
                <td>Santo Domingo</td>
                <td>Web Developer</td>
                <td>Claro RD</td>
              </tr>
              <tr>
                <td>Santiago</td>
                <td>Tester</td>
                <td>Intellisys Inc.</td>
              </tr>
              <tr>
                <td>Android Developer</td>
                <td>Web Developer</td>
                <td>Casa de Campo</td>
              </tr>
              {this.renderTableRows()}              
            </tbody>
            <tfoot>
              <tr><th colSpan="3">
                <div className="ui right floated pagination menu">
                  <a className="icon item">
                    <i className="left chevron icon"></i>
                  </a>
                  <a className="item">1</a>
                  <a className="item">2</a>
                  <a className="item">3</a>
                  <a className="item">4</a>
                  <a className="icon item">
                    <i className="right chevron icon"></i>
                  </a>
                </div>
              </th>
              </tr></tfoot>
          </table>
        </div>

      </div>
    );
  }
}

export default Home;
