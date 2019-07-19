import React from 'react';
import { Table } from 'reactstrap';
import './listadoHuesped.css'
import ModificarHuesped from './modificarHuesped.js'
import HuespedRow from './HuespedRow.js'


class ListadoHuespedes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { huespedes: [], selected: {} }
        this.select = this.select.bind(this);
        this.huespedChange = this.huespedChange.bind(this);
        this.huespedDelete = this.huespedDelete.bind(this);
        this.ordenarFecha = this.ordenarFecha.bind(this);
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
                <Table hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>DNI</th>
                            <th>Noches</th>
                            <th>Personas</th>
                            <th>Habitacion</th>
                            <th onClick={this.ordenarFecha}>Fecha ingreso</th>
                            <th>Fecha salida</th>
                        </tr>
                    </thead>
                    <tbody class="cursor">
                        {this.renderRows()}
                    </tbody>
                </Table>
            </div>
        );
    }

    ordenarFecha(){
        this.setState({huespedes: this.state.huespedes.sort((a,b) => new Date(a.fechaIngreso) - new Date(b.fechaIngreso))});
        console.log("Ejecutando");
    }

    renderRows() {
        return this.state.huespedes.map(unHuesped => {
            return (
                <HuespedRow huesped={unHuesped} delete={this.huespedDelete} selector={this.select} />
            );
        })
    }

    select(unHuesped) {
        this.setState({ selected: unHuesped })
    }

    huespedChange(unHuesped) {
        var newHuespedes = this.state.huespedes.map((item) => (unHuesped._id != item._id) ? item : unHuesped)
        this.setState({ huespedes: newHuespedes, selected: {} })
    }

    huespedDelete(unHuesped) {
        var huespedes = this.state.huespedes.filter(item => item._id !== unHuesped._id);
        this.setState({ huespedes });
    }

}

export default ListadoHuespedes;