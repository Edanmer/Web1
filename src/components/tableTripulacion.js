import React, { PureComponent } from 'react';
import '../pages/app/main.css';

class tableTripulacion extends PureComponent {

  handleTableClick = (evt, item) => {
    evt.preventDefault();
    // window.location=`/jobDetail/${item._id}`;
  }

  renderTableRows = (data) => {
    const rows = data.map((item) => {
      return (
        <tr key={item.id} onClick={(evt) => this.handleTableClick(evt, item)}>
          <td>{item.nombre}</td>
          <td>{item.apellido}</td>
          <td>{item.cedula}</td>
          <td>{item.ciudad}</td>
          <td>{item.calle}</td>
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
              <th>Apellido</th>
              <th>Cedula</th>
              <th>Ciudad</th>
              <th>Calle</th>
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

export default tableTripulacion;