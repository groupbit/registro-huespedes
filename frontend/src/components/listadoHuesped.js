import React from 'react';



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
            <div>
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Direccion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }

    renderRows() {
        return this.state.huespedes.map((unHuesped, index) => {
            return (
                <tr key={unHuesped._id}>
                    <td>{unHuesped.nombre}</td>
                    <td>{unHuesped.direccion}</td>
                </tr>
            );
        })
    }

}

export default listadoHuesped;