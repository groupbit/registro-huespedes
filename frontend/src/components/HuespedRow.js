import React from 'react';
import { Button } from 'reactstrap';
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
                <td>
                    <Button close onClick={() => this.eliminarHuesped(this.props.huesped._id)}/>
                </td>
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

    eliminarHuesped(idHuesped){
        fetch(`http://localhost:8888/huespedes/${idHuesped}`, {
          method: 'DELETE', // or 'PUT'
          headers:{
            'Content-Type': 'application/json'
          }
        })
      }
}

export default HuespedRow