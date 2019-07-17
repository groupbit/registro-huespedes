import React from 'react';
import { Button } from 'reactstrap';
import { diasDeHospedaje } from '../models/huesped';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class HuespedRow extends React.Component {

    constructor(props) {
        super(props);
        this.selectHuesped = this.selectHuesped.bind(this);
        this.state = { modal: false };
        this.toggle = this.toggle.bind(this);
    }

    selectHuesped() {
        this.props.selector(this.props.huesped)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <tr key={this.props.huesped._id} onClick={this.selectHuesped}>
                <td>
                    <Button color="danger" close onClick={this.toggle}/>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Eliminar</ModalHeader>
                        <ModalBody>
                            ¿Eliminar el huesped seleccionado {this.props.huesped.nombre}?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => this.eliminarHuesped(this.props.huesped._id)}>Eliminar</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
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

    eliminarHuesped(idHuesped) {
        this.toggle();
        fetch(`http://localhost:8888/huespedes/${idHuesped}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => this.props.delete(this.props.huesped))
    }
}

export default HuespedRow