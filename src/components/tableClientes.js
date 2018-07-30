import React, { PureComponent } from 'react';
import '../pages/app/main.css';
import lodash from 'lodash';

class tableClientes extends PureComponent {

  handleTableClick = (evt, item) => {
    evt.preventDefault();
    window.location=`/clientesDetail/${item.id}`;
  }

  renderTableRows = (data) => {
    const rows = data.map((item) => {

      let dayarray = item.drecogida;

      const days = lodash.map(dayarray,(x, index) => {
        return(
          <li key={index}>{x}</li>
        )});

      return (
        <tr key={item.id} onClick={(evt) => this.handleTableClick(evt, item)}>
          <td>{item.nombre}</td>
          <td>{item.rnc}</td>
          <td>{item.numero}</td>
          <td>{item.ciudad}</td>
          <td>{item.sector}</td>
          <td>{item.calle}</td>
          <td>{item.latitud}</td>
          <td>{item.longitud}</td>
          <td>
            <ul>
              {days}
            </ul>
          </td>
        </tr>
      )
    });

    return rows;
  }

  render() {
    const { dataArray } = this.props;
    return (
      <section className="jobTable">
        <table className="table table-hover table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Nombre</th>
              <th>Rnc</th>
              <th>Numero</th>
              <th>Ciudad</th>
              <th>Sector</th>
              <th>Calle</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Dias a Recoger</th>
            </tr>
          </thead>

          {/* tbody */}
          <tbody>
            {this.renderTableRows(dataArray)}
          </tbody>

        </table>
      </section>
    )
  }
}

export default tableClientes;