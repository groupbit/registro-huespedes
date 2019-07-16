import React from 'react';
import "./cargarHuesped.css"
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


class cargaHuesped extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mensaje: "", nombre: "", telefono: "", dni: "", 
                       noches: "", cantPersonas: "", fechaIngreso: "", 
                       fechaSalida: "", modal: false }
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
                    <Label for="cantPersonas">Cantidad de personas a hospedarse:</Label>
                    <Input type="number" name="cantPersonas" size="10" id="cantPersonas"
                        value={this.state.cantPersonas} onChange={this.handleInputChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="fechaIngreso">Fecha de Ingreso:</Label>
                    <Input type="date" name="fechaIngreso" size="10" id="fechaIngreso"
                        value={this.state.fechaIngreso} onChange={this.handleInputChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="fechaSalida">Fecha de Salida:</Label>
                    <Input type="date" name="fechaSalida" size="10" id="fechaSalida"
                        value={this.state.fechaSalida} onChange={this.handleInputChange} />
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
                </Modal>
            </Form>
        return (
            <div class="ancho-form">
                <br></br>
                {formulario}
            </div>
        );
    }

    calcular(){
        var fechaini = new Date(this.state.fechaIngreso);
        var fechafin = new Date(this.state.fechaSalida);
        var diasdif= fechafin.getTime()-fechaini.getTime();
        this.state.noches = Math.round(diasdif/(1000*60*60*24));
    }

    cargarHuesped() {
        this.calcular();
        var huesped = {
            nombre: this.state.nombre,
            telefono: this.state.telefono,
            dni: this.state.dni,
            noches: this.state.noches,
            cantPersonas: this.state.cantPersonas,
            fechaIngreso: this.state.fechaIngreso,
            fechaSalida: this.state.fechaSalida
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
