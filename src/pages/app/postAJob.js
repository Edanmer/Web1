import React, { Component } from 'react';
import './main.css';
import axios from 'axios';

class postAJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryData: [],
      category: "Design",
      type: "Full Time",
      company: "",
      logo: "",
      logoName: "",
      url: "",
      position: "",
      location: "",
      description: ""
    }
  }

  componentDidMount() {
    axios.get('http://api-empleos.net:8080/categories')
      .then((objResponse) => {
        this.setState({ categoryData: objResponse.data });
        console.log("SUCCESS" + JSON.stringify(objResponse.data, null, 2));
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log(JSON.stringify(this.state.logo.name, null, 2));
    axios.post('http://api-empleos.net:8080/jobs',
      {
        category: this.state.category,
        type: this.state.type,
        company: this.state.company,
        logo: this.state.logo.name,
        url: this.state.url,
        position: this.state.position,
        address: this.state.location,
        description: this.state.description,
        email: "mail@mail.com",
        howToApply: "wakanda forever"
      })
      .then((objResponse) => {
        console.log("SUCCESS" + JSON.stringify(objResponse, null, 2));
        window.location = "/";
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })
  }

  populateCategorySelect = () => {
    const data = this.state.categoryData;
    const options = data.map((item) => {
      return (
        <option key={item._id} value={item.name}>{item.name}</option>
      )
    });

    return options;
  }

  handleSelectedValue = (evt) => {
    this.setState({ type: evt.target.value });
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
              <a className="btn btn-success text-white" href="postAJob.html">Post a Job</a>
            </nav>
          </div>
        </section>

        <section id="body">
          <h1>Post a Job</h1>
          <form>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCategory">Category</label>
              <select className="col-8 form-control" id="inputCategory"
                value={this.state.category}
                onChange={(evt) => { this.setState({ category: evt.target.value }) }}>
                {this.populateCategorySelect()}
              </select>
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCategory">Type</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="radioFull" value="Full Time"
                    checked={this.state.type === "Full Time"} onChange={(evt) => this.handleSelectedValue(evt)} />
                  <label className="form-check-label" htmlFor="radioFull">Full Time</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="radioPart" value="Part Time"
                    checked={this.state.type === "Part Time"} onChange={(evt) => this.handleSelectedValue(evt)} />
                  <label className="form-check-label" htmlFor="radioPart">Part Time</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="radioFree" value="Freelance"
                    checked={this.state.type === "Freelance"} onChange={(evt) => this.handleSelectedValue(evt)} />
                  <label className="form-check-label" htmlFor="radioFree">Freelance</label>
                </div>
              </div>
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Company</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.company}
                onChange={(evt) => { this.setState({ company: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputLogo">Logo</label>
              <input className="col-8 form-control" type="file" id="inputLogo" accept="image/*"
                value={this.state.logoName}
                onChange={(evt) => { this.setState({ logo: evt.target.files[0], logoName: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputURL">URL</label>
              <input className="col-8 form-control" type="text" id="inputURL"
                value={this.state.url}
                onChange={(evt) => { this.setState({ url: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputPosition">Position</label>
              <input className="col-8 form-control" type="text" id="inputPosition"
                value={this.state.position}
                onChange={(evt) => { this.setState({ position: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputLocation">Location</label>
              <input className="col-8 form-control" type="text" id="inputLocation"
                value={this.state.location}
                onChange={(evt) => { this.setState({ location: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputDescription">Description</label>
              <textarea className="col-8 form-control" id="inputDescription" rows="3"
                value={this.state.description}
                onChange={(evt) => { this.setState({ description: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <button className="offset-4 col-3 btn btn-success" onClick={(evt) => this.handleSubmit(evt)}>Submit</button>
            </div>
          </form>
        </section>

        <section id="footer"></section>
      </div>
    )
  }
}

export default postAJob;