import React from 'react';
import { Table } from 'reactstrap';
import './listadoHuesped.css'


class listadoHuesped extends React.Component {
    constructor(props) {
        super(props);
        this.state = { huespedes: [] }
    }

    componentWillMount() {
        fetch(`http://localhost:8888/huespedes`)
            .then(res => res.json())
            .then(hps => this.setState({ huespedes: hps }));
    }

    render() {
        return (
            <div class="ancho-table">
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>DNI</th>
                            <th>Noches</th>
                            <th>Personas</th>
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
        return this.state.huespedes.map((unHuesped, index) => {
            return (
                <tr key={unHuesped._id}>
                    <td>{unHuesped.nombre}</td>
                    <td>{unHuesped.telefono}</td>
                    <td>{unHuesped.dni}</td>
                    <td>{unHuesped.noches}</td>
                    <td>{unHuesped.cantPersonas}</td>
                </tr>
            );
        })
    }

}

export default listadoHuesped;