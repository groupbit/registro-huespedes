import React from 'react';
import { diasDeHospedaje } from '../models/huesped';

class HuespedRow extends React.Component {

    constructor(props) {
        super(props);
        this.selectHuesped = this.selectHuesped.bind(this);
    }
    
    selectHuesped() {
        this.props.selector(this.props.huesped)
    }

    render() {      
        return (
            <tr key={this.props.huesped._id} onClick={this.selectHuesped}>
                <td>{this.props.huesped.nombre}</td>
                <td>{this.props.huesped.telefono}</td>
                <td>{this.props.huesped.dni}</td>
                <td>{diasDeHospedaje(this.props.huesped)}</td>
                <td>{this.props.huesped.cantPersonas}</td>
                <td>{this.props.huesped.habitacion}</td>
                <td>{this.props.huesped.fechaIngreso}</td>
                <td>{this.props.huesped.fechaSalida}</td>
            </tr>
        );
      
    }
}

  export default HuespedRow