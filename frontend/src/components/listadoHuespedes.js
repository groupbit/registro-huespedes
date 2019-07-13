import React from 'react';
import { Table } from 'reactstrap';
import './listadoHuesped.css'
import ModificarHuesped from './modificarHuesped.js'
import HuespedRow from './HuespedRow.js'


class ListadoHuespedes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { huespedes: [], selected:{} }
        this.select = this.select.bind(this);
        this.huespedChange = this.huespedChange.bind(this);
    }

    componentWillMount() {
        fetch(`http://localhost:8888/huespedes`)
            .then(res => res.json())
            .then(hps => this.setState({ huespedes: hps }));
    }

    render() {
        return (
            <div class="ancho-table">
                <div>
                <ModificarHuesped huesped={this.state.selected} huespedChange={this.huespedChange} />
                <br></br>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>DNI</th>
                            <th>Noches</th>
                            <th>Personas</th>
                            <th>Habitacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </Table>
            </div>
        );
    }

    renderRows() {
        return this.state.huespedes.map( unHuesped => {
            return(
                <HuespedRow huesped={unHuesped} selector={this.select} />
            );
        })
    }

    select(unHuesped) {
        this.setState({selected:unHuesped })
      }
  
      huespedChange(unHuesped) {
        var newHuespedes = this.state.huespedes.map((item) => (unHuesped._id != item._id) ? item : unHuesped )
        this.setState({huespedes: newHuespedes, selector:unHuesped, selected: unHuesped})
      }

}

export default ListadoHuespedes;