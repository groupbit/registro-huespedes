import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

class ModificarHuesped extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { huesped: props.huesped }
    }

    componentWillReceiveProps(props) {
        this.setState({ huesped: props.huesped })
    }

    handleChange(event) {
        var newHuesped = Object.assign({}, this.state.huesped);
        newHuesped[event.target.name] = event.target.value;
        this.setState({ huesped: newHuesped });
    }

    handleSubmit(event) {
        fetch('http://localhost:8888/huespedes', {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.huesped)
        }).then(res => this.props.huespedChange(this.state.huesped))
            .catch(res => console.log("ERROR"));

        event.preventDefault();
    }

    render() {
        return (

            <Form class="margen-superior">
                <FormGroup>
                    <Label for="nombre">Ingrese su nombre:</Label>
                    <Input type="text" name="nombre" size="50" id="nombre"
                        value={this.state.huesped.nombre} onChange={this.handleChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="telefono">Número de teléfono:</Label>
                    <Input type="number" name="telefono" size="10" id="telefono"
                        value={this.state.huesped.telefono} onChange={this.handleChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="dni">Número de DNI:</Label>
                    <Input type="number" name="dni" size="8" id="dni"
                        value={this.state.huesped.dni} onChange={this.handleChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="cantPersonas">Cantidad de personas a hospedarse:</Label>
                    <Input type="number" name="cantPersonas" size="10" id="cantPersonas"
                        value={this.state.huesped.cantPersonas} onChange={this.handleChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="fechaIngreso">Fecha de Ingreso:</Label>
                    <Input type="date" name="fechaIngreso" size="10" id="fechaIngreso"
                        value={this.state.huesped.fechaIngreso} onChange={this.handleChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="fechaSalida">Fecha de Salida:</Label>
                    <Input type="date" name="fechaSalida" size="10" id="fechaSalida"
                        value={this.state.huesped.fechaSalida} onChange={this.handleChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="habitacion">Habitación:</Label>
                    <Input type="text" name="habitacion" size="10" id="habitacion"
                        value={this.state.huesped.habitacion} onChange={this.handleChange} />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <Button color="danger" onClick={this.handleSubmit}>
                    Modificar
          </Button>
            </Form>
        );
    }
}

export default ModificarHuesped