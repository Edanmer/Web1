import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import lodash from 'lodash';
import LoginHeader from '../../components/loginHeader.js';

class clientesDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      numero: "",
      rnc: "",
      ciudad: "",
      sector: "",
      calle: "",
      latitud: "",
      longitud: "",
      dias: [],
      disabled: true,
      type: "",
      title: "Viewing",
      chkLunes: false,
      chkMartes: false,
      chkMiercoles: false,
      chkJueves: false,
      chkViernes: false,
      chkSabado: false,
      chkDomingo: false
    }
  }

  componentDidMount() {
    axios.get(`https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/clientes?id=${this.props.match.params.id}`)
      .then((objResponse) => {
        this.setState({
          nombre: objResponse.data.nombre,
          numero: objResponse.data.numero,
          rnc: objResponse.data.rnc,
          ciudad: objResponse.data.ciudad,
          sector: objResponse.data.sector,
          calle: objResponse.data.calle,
          latitud: objResponse.data.latitud,
          longitud: objResponse.data.longitud,
          dias: objResponse.data.drecogida
        });
        objResponse.data.drecogida.forEach(day => {
          if(day === "Lunes"){
            this.setState({ chkLunes: true });
          }
          if (day === "Martes") {
            this.setState({ chkMartes: true });
          }
          if (day === "Miercoles") {
            this.setState({ chkMiercoles: true });
          }
          if (day === "Jueves") {
            this.setState({ chkJueves: true });
          }
          if (day === "Viernes") {
            this.setState({ chkViernes: true });
          }
          if (day === "Sabado") {
            this.setState({ chkSabado: true });
          }
          if (day === "Domingo") {
            this.setState({ chkDomingo: true });
          }
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
    if (window.confirm("Are you sure you want to delete the Client?")) {
      axios.delete('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/clientes',
        {
          data: {
            id: this.props.match.params.id
          }
        })
        .then((objResponse) => {
          console.log("SUCCESS" + JSON.stringify(objResponse, null, 2));
          window.location = "/clientes";
        })
        .catch((objError) => {
          console.log("ERROR" + JSON.stringify(objError, null, 2));
        })
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.type === "update") {
      axios.put('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/clientes',
        {
          id: this.props.match.params.id,
          nombre: this.state.nombre,
          numero: this.state.numero,
          rnc: this.state.rnc,
          ciudad: this.state.ciudad,
          sector: this.state.sector,
          calle: this.state.calle,
          latitud: this.state.latitud,
          longitud: this.state.longitud,
          drecogida: this.state.dias
        })
        .then((objResponse) => {
          console.log("SUCCESS" + JSON.stringify(objResponse, null, 2));
          window.location = "/clientes";
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

  handleCheckInput = (event) => {

    let days = this.state.dias;
    console.log(days);

    if (event.target.checked) {
      days.push(event.target.value);
      if (event.target.value === "Lunes") {
        this.setState({ chkLunes: true });
      }
      if (event.target.value === "Martes") {
        this.setState({ chkMartes: true });
      }
      if (event.target.value === "Miercoles") {
        this.setState({ chkMiercoles: true });
      }
      if (event.target.value === "Jueves") {
        this.setState({ chkJueves: true });
      }
      if (event.target.value === "Viernes") {
        this.setState({ chkViernes: true });
      }
      if (event.target.value === "Sabado") {
        this.setState({ chkSabado: true });
      }
      if (event.target.value === "Domingo") {
        this.setState({ chkDomingo: true });
      }
    }
    else {
      let index = lodash.indexOf(days, event.target.value);
      lodash.pullAt(days, index);
      if (event.target.value === "Lunes") {
        this.setState({ chkLunes: false });
      }
      if (event.target.value === "Martes") {
        this.setState({ chkMartes: false });
      }
      if (event.target.value === "Miercoles") {
        this.setState({ chkMiercoles: false });
      }
      if (event.target.value === "Jueves") {
        this.setState({ chkJueves: false });
      }
      if (event.target.value === "Viernes") {
        this.setState({ chkViernes: false });
      }
      if (event.target.value === "Sabado") {
        this.setState({ chkSabado: false });
      }
      if (event.target.value === "Domingo") {
        this.setState({ chkDomingo: false });
      }
    }

    this.setState({ dias: days });
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
          <h1>{this.state.title + " Cliente"}</h1>
          <form>
            <fieldset disabled={this.state.disabled}>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Nombre</label>
                <input className="col-8 form-control" type="text" id="inputCompany"
                  value={this.state.nombre}
                  onChange={(evt) => { this.setState({ nombre: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Numero</label>
                <input className="col-8 form-control" type="number" id="inputCompany"
                  value={this.state.numero}
                  onChange={(evt) => { this.setState({ numero: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Rnc</label>
                <input className="col-8 form-control" type="number" id="inputCompany"
                  value={this.state.rnc}
                  onChange={(evt) => { this.setState({ rnc: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Ciudad</label>
                <input className="col-8 form-control" type="text" id="inputCompany"
                  value={this.state.ciudad}
                  onChange={(evt) => { this.setState({ ciudad: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Sector</label>
                <input className="col-8 form-control" type="text" id="inputCompany"
                  value={this.state.sector}
                  onChange={(evt) => { this.setState({ sector: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Calle</label>
                <input className="col-8 form-control" type="text" id="inputCompany"
                  value={this.state.calle}
                  onChange={(evt) => { this.setState({ calle: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Latitud</label>
                <input className="col-8 form-control" type="number" id="inputCompany"
                  value={this.state.latitud}
                  onChange={(evt) => { this.setState({ latitud: evt.target.value }) }} />
              </div>
              <div className="form-group row formSize">
                <label className="col-4" htmlFor="inputCompany">Longitud</label>
                <input className="col-8 form-control" type="number" id="inputCompany"
                  value={this.state.longitud}
                  onChange={(evt) => { this.setState({ longitud: evt.target.value }) }} />
              </div>
              <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" value="Lunes" id="checkLunes"
                  onChange={this.handleCheckInput} checked={this.state.chkLunes} />
                <label className="form-check-label" htmlFor="checkLunes">Lunes</label>
              </div>
              <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" value="Martes" id="checkMartes"
                  onChange={this.handleCheckInput} checked={this.state.chkMartes} />
                <label className="form-check-label" htmlFor="checkMartes">Martes</label>
              </div>
              <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" value="Miercoles" id="checkMiercoles"
                  onChange={this.handleCheckInput} checked={this.state.chkMiercoles} />
                <label className="form-check-label" htmlFor="checkMiercoles">Miercoles</label>
              </div>
              <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" value="Jueves" id="checkJueves"
                  onChange={this.handleCheckInput} checked={this.state.chkJueves} />
                <label className="form-check-label" htmlFor="checkJueves">Jueves</label>
              </div>
              <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" value="Viernes" id="checkViernes"
                  onChange={this.handleCheckInput} checked={this.state.chkViernes} />
                <label className="form-check-label" htmlFor="checkViernes">Viernes</label>
              </div>
              <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" value="Sabado" id="checkSabado"
                  onChange={this.handleCheckInput} checked={this.state.chkSabado} />
                <label className="form-check-label" htmlFor="checkSabado">Sabado</label>
              </div>
              <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" value="Domingo" id="checkDomingo"
                  onChange={this.handleCheckInput} checked={this.state.chkDomingo} />
                <label className="form-check-label" htmlFor="checkDomingo">Domingo</label>
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
export default clientesDetail;