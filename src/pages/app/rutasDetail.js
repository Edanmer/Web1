import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import LoginHeader from '../../components/loginHeader.js';

class rutasDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      ciudad: "",
      clientes: [],
      clientData: [],
      strList: "",
      objSelected: {},
      disabled: true,
      type: "",
      title: "Viewing"
    }
  }

  componentDidMount() {
    axios.get(`https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/rutas?id=${this.props.match.params.id}`)
      .then((objResponse) => {
        this.setState({
          nombre: objResponse.data.nombre,
          ciudad: objResponse.data.ciudad,
          clientes: objResponse.data.clientes
        });
        let str = objResponse.data.clientes.map((item) => {
          return(
            item.nombre + "\n"
          )
        });
        this.setState({ strList: str });
        console.log(JSON.stringify(objResponse.data, null, 2));
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })

    axios.get('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/clientes')
      .then((objResponse) => {
        this.setState({ clientData: objResponse.data });
        console.log(JSON.stringify(objResponse, null, 2));
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
    if (window.confirm("Are you sure you want to delete the Rutas?")) {
      axios.delete('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/rutas',
        {
          data: {
            id: this.props.match.params.id
          }
        })
        .then((objResponse) => {
          console.log("SUCCESS" + JSON.stringify(objResponse, null, 2));
          window.location = "/rutas";
        })
        .catch((objError) => {
          console.log("ERROR" + JSON.stringify(objError, null, 2));
        })
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.type === "update") {
      axios.put('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/rutas',
        {
          id: this.props.match.params.id,
          nombre: this.state.nombre,
          ciudad: this.state.ciudad,
          clientes: this.state.clientes
        })
        .then((objResponse) => {
          console.log("SUCCESS" + JSON.stringify(objResponse, null, 2));
          window.location = "/rutas";
        })
        .catch((objError) => {
          console.log("ERROR" + JSON.stringify(objError, null, 2));
        })
      console.log(JSON.stringify(this.state.clientes,null,2));
    }
  }

  handleCancel = (evt) => {
    evt.preventDefault();
    this.setState({ disabled: true, type: "", title: "Viewing" });
  }

  handleSelect = (evt) => {
    let obj = this.state.clientData[evt.target.value];
    let client = this.state.clientes;
    client.push(obj);
    this.setState({ objSelected: obj, clientes: client });
  }

  handleAddClient = () => {

    let str = this.state.strList;
    let list = str.concat(this.state.objSelected.nombre + "\n");

    this.setState({ strList: list });
  }

  render() {

    const options = this.state.clientData.map((item, index) => {
      return (
        <option key={item.id} value={index}>{item.nombre}</option>
      )
    });

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
          <h1>{this.state.title + " Rutas"}</h1>
          <form>
            <fieldset disabled={this.state.disabled}>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Nombre</label>
                <input className="col-8 form-control" type="text" id="inputCompany"
                  value={this.state.nombre}
                  onChange={(evt) => { this.setState({ nombre: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Ciudad</label>
                <input className="col-8 form-control" type="text" id="inputCompany"
                  value={this.state.ciudad}
                  onChange={(evt) => { this.setState({ ciudad: evt.target.value }) }} />
              </div>
              <div className="input-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Cliente</label>
                <select className="col-8 form-control custom-select" id="inputCompany"
                  onChange={(evt) => this.handleSelect(evt)}>
                  {options}
                </select>
                <div className="input-group-append">
                  <button className="btn btn-outline-success" type="button" id="inputGroupFileAddon04"
                    onClick={this.handleAddClient}>Add</button>
                </div>
              </div>
              <div className="form-group row formSize">
                <textarea className="offset-4 col-8 form-control" type="text" id="inputCompany"
                  disabled value={this.state.strList} rows={5}
                  onChange={(evt) => { this.setState({ ciudad: evt.target.value }) }} />
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
export default rutasDetail;