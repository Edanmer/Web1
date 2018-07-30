import React, { PureComponent } from 'react';
import '../pages/app/main.css';
import lodash from 'lodash';

class tableRutas extends PureComponent {

  handleTableClick = (evt, item) => {
    evt.preventDefault();
    window.location=`/rutasDetail/${item.id}`;
  }

  renderTableRows = (data) => {

    const rows = data.map((item) => {

      let clientarray = item.clientes;

      const clients = lodash.map(clientarray, (x, index) => {
        return (
          <li key={index}>{x.nombre}</li>
        )
      });

      return (
        <tr key={item.id} onClick={(evt) => this.handleTableClick(evt, item)}>
          <td>{item.nombre}</td>
          <td>{item.ciudad}</td>
          <td>
            <ul>
              {clients}
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
              <th>Ciudad</th>
              <th>Clientes</th>
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

export default tableRutas;