import React from 'react';
import "./cargarHuesped.css"
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class cargaHuesped extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mensaje: "", nombre: "", telefono: "", dni: "", noches: "", cantPersonas: "", modal: false }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.cargarHuesped = this.cargarHuesped.bind(this);
    }

    componentWillMount() {
        fetch(`http://localhost:8888/saludar`)
            .then(res => res.json())
            .then(mensaje => this.setState({ mensaje }));
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const formulario =
            <Form class="margen-superior">
                <FormGroup>
                    <Label for="nombre">Ingrese su nombre:</Label>
                    <Input type="text" name="nombre" size="50" id="nombre"
                        value={this.state.nombre} onChange={this.handleInputChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="telefono">Número de teléfono:</Label>
                    <Input type="number" name="telefono" size="10" id="telefono"
                        value={this.state.direccion} onChange={this.handleInputChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="dni">Número de DNI:</Label>
                    <Input type="number" name="dni" size="8" id="dni"
                        value={this.state.dni} onChange={this.handleInputChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="noches">Cantidad de noches a hospedarse:</Label>
                    <Input type="number" name="noches" size="10" id="noches"
                        value={this.state.noches} onChange={this.handleInputChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="cantPersonas">Cantidad de personas a hospedarse:</Label>
                    <Input type="number" name="cantPersonas" size="10" id="cantPersonas"
                        value={this.state.cantPersonas} onChange={this.handleInputChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <Button color="danger" onClick={this.cargarHuesped}>
                    Registrar
                </Button>
                <Modal isOpen={this.state.modal} className={this.props.className}>
                    <ModalHeader>Registración</ModalHeader>
                    <ModalBody>
                        El registro se ha hecho exitosamente
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </Form>
        return (
            <div class="ancho-form">
                <br></br>
                {formulario}
            </div>
        );
    }

    cargarHuesped() {
        var huesped = {
            nombre: this.state.nombre,
            telefono: this.state.telefono,
            dni: this.state.dni,
            noches: this.state.noches,
            cantPersonas: this.state.cantPersonas
        }
        console.log(JSON.stringify(huesped))
        fetch(`http://localhost:8888/huespedes`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(huesped), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => this.setState(prevState => ({
                modal: !prevState.modal
              })))
        ///.then(() => this.actualizarLista())
    }

}

export default cargaHuesped;