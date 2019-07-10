import React from 'react';
import "./cargarHuesped.css"
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';


class cargaHuesped extends React.Component {
    constructor(props){
        super(props);
        this.state= {mensaje: "", nombre:"", telefono:"", dni:"", noches:"", cantPersonas:""} 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.cargarHuesped = this.cargarHuesped.bind(this);
    }

    componentWillMount(){
        fetch(`http://localhost:8888/saludar`)
      .then( res => res.json())
      .then( mensaje => this.setState({mensaje}));
    }

    handleInputChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    render(){ 
        const formulario = 
            <Form class="margen-superior">
                <FormGroup>
                    <Label for="nombre">Ingrese su nombre:</Label>
                    <Input type="text" name="nombre" size="50" id="nombre"
                            value={this.state.nombre} onChange={this.handleInputChange}/>
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="telefono">Ingrese su número de teléfono:</Label>
                    <Input type="number" name="direccion" size="10" id="direccion"
                        value={this.state.direccion} onChange={this.handleInputChange}/>
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="dni">Ingrese su número de DNI:</Label>
                    <Input type="number" name="direccion" size="10" id="direccion"
                        value={this.state.dni} onChange={this.handleInputChange}/>
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="hospedar">Ingrese cuantas noches se va a hospedar:</Label>
                    <Input type="number" name="direccion" size="10" id="direccion"
                        value={this.state.noches} onChange={this.handleInputChange}/>
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="hospedar">Ingrese la cantidad de personas a hospedarse:</Label>
                    <Input type="number" name="direccion" size="10" id="direccion"
                        value={this.state.cantPersonas} onChange={this.handleInputChange}/>
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                </FormGroup>
                <Button color="danger" onClick={this.cargarHuesped}>
                    Hospedarse
                </Button>
            </Form>
        return (
            <div class="ancho-form">
                <br></br>
                {formulario}
            </div>
        );
    }

    cargarHuesped(){      
        var huesped = {nombre:this.state.nombre,
                      telefono:this.state.telefono,
                      dni:this.state.dni,
                      noches:this.state.noches,
                      cantPersonas:this.state.cantPersonas}
        console.log(JSON.stringify(huesped))
        fetch(`http://localhost:8888/huespedes`, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(huesped), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        })
       // .then(() => this.setState(this.estadoInicial()))
        ///.then(() => this.actualizarLista())
      }

}

export default cargaHuesped;