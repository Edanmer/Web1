import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import LoginHeader from '../../components/loginHeader.js';

class tripulacionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombrechofer: "",
      nombrestaff1: "",
      nombrestaff2: "",
      ciudad: "",
      disabled: true,
      type: "",
      title: "Viewing"
    }
  }

  componentDidMount() {
    axios.get(`https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/tripulacion?id=${this.props.match.params.id}`)
      .then((objResponse) => {
        this.setState({
          ciudad: objResponse.data.ciudad,
          nombrechofer: objResponse.data.nombrechofer,
          nombrestaff1: objResponse.data.nombrestaff1,
          nombrestaff2: objResponse.data.nombrestaff2
        });
        console.log(JSON.stringify(objResponse.data, null, 2));
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })
  }

  handleUpdate = (evt) => {
    evt.preventDefault();
    this.setState({ disabled: false, type: "update", title: "Updating" });
  }

  handleDelete = (evt) => {
    evt.preventDefault();
    if (window.confirm("Are you sure you want to delete the Tripulacion?")) {
      axios.delete('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/tripulacion',
        {
          data: {
            id: this.props.match.params.id
          }
        })
        .then((objResponse) => {
          console.log("SUCCESS" + JSON.stringify(objResponse, null, 2));
          window.location = "/tripulacion";
        })
        .catch((objError) => {
          console.log("ERROR" + JSON.stringify(objError, null, 2));
        })
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.type === "update") {
      axios.put('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/tripulacion',
        {
          id: this.props.match.params.id,
          nombrechofer: this.state.nombrechofer,
          nombrestaff1: this.state.nombrestaff1,
          nombrestaff2: this.state.nombrestaff2,
          ciudad: this.state.ciudad
        })
        .then((objResponse) => {
          console.log("SUCCESS" + JSON.stringify(objResponse, null, 2));
          window.location = "/tripulacion";
        })
        .catch((objError) => {
          console.log("ERROR" + JSON.stringify(objError, null, 2));
        })
    }
  }

  handleCancel = (evt) => {
    evt.preventDefault();
    this.setState({ disabled: true, type: "", title: "Viewing" });
  }

  render() {
    return (
      <div className="container">

        <LoginHeader />
        <section id="header">
          <div className="searchbar">
            <form className="form-inline formSize">
              <button className="col-5 btn btn-success" onClick={(evt) => this.handleUpdate(evt)}>Update</button>
              <button className="offset-2 col-5 btn btn-danger" onClick={(evt) => this.handleDelete(evt)}>Delete</button>
            </form>
          </div>
        </section>

        <section id="body">
          <h1>{this.state.title + " Tripulacion"}</h1>
          <form>
            <fieldset disabled={this.state.disabled}>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Ciudad</label>
                <input className="col-8 form-control" type="text" id="inputCompany"
                  value={this.state.ciudad}
                  onChange={(evt) => { this.setState({ ciudad: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Chofer</label>
                <input className="col-8 form-control" type="text" id="inputCompany"
                  value={this.state.nombrechofer}
                  onChange={(evt) => { this.setState({ nombrechofer: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Ayudante #1</label>
                <input className="col-8 form-control" type="text" id="inputCompany"
                  value={this.state.nombrestaff1}
                  onChange={(evt) => { this.setState({ nombrestaff1: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Ayudante #2</label>
                <input className="col-8 form-control" type="text" id="inputCompany"
                  value={this.state.nombrestaff2}
                  onChange={(evt) => { this.setState({ nombrestaff2: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize mt-4">
                <button className="offset-4 col-3 btn btn-success" onClick={(evt) => this.handleSubmit(evt)}>Submit</button>
                <button className="offset-2 col-3 btn btn-danger" onClick={(evt) => this.handleCancel(evt)}>Cancel</button>
              </div>
            </fieldset>
          </form>
        </section>

        <section id="footer"></section>
      </div>
    )
  }
}
export default tripulacionDetail;