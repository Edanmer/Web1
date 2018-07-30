import React, { PureComponent } from 'react';
import '../pages/app/main.css';

class tableTripulacion extends PureComponent {

  handleTableClick = (evt, item) => {
    evt.preventDefault();
    window.location=`/tripulacionDetail/${item.id}`;
  }

  renderTableRows = (data) => {
    const rows = data.map((item) => {
      return (
        <tr key={item.id} onClick={(evt) => this.handleTableClick(evt, item)}>
          <td>{item.ciudad}</td>
          <td>{item.nombrechofer}</td>
          <td>{item.nombrestaff1}</td>
          <td>{item.nombrestaff2}</td>
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
              <th>Ciudad</th>
              <th>Chofer</th>
              <th>Ayudante #1</th>
              <th>Ayudante #2</th>
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