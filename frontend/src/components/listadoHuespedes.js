import React from 'react';
import { Table } from 'reactstrap';
import './listadoHuesped.css'
import ModificarHuesped from './modificarHuesped.js'
import HuespedRow from './HuespedRow.js'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


class ListadoHuespedes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { huespedes: [], selected: {} , ordenDeFecha:true }
        this.select = this.select.bind(this);
        this.huespedChange = this.huespedChange.bind(this);
        this.huespedDelete = this.huespedDelete.bind(this);
        this.ordenarFecha = this.ordenarFecha.bind(this);
    }

    componentWillMount() {
        fetch(`http://localhost:8888/huespedes`)
            .then(res => res.json())
            .then(hps => {this.setState({ huespedes: hps }); this.ocultadElementos();});
            
    }

    render() {
        return (
            <div class="ancho-table">
                <div>
                    <ModificarHuesped huespedes={this.state.huespedes} huesped={this.state.selected} huespedChange={this.huespedChange} />
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
                            <th>Fecha ingreso 
                                <FaChevronDown id="ordenar" class="cursor" onClick={this.ordenarFecha}/>
                                <FaChevronUp id="ordenar2" class="cursor" onClick={this.ordenarFecha}/>    
                            </th>
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

    ocultadElementos(){
        document.getElementById('ordenar2').style.display = 'none';
    }

    ordenarFecha(){
        if(this.state.ordenDeFecha){
            this.setState({huespedes: this.state.huespedes.sort((a,b) => new Date(a.fechaIngreso) - new Date(b.fechaIngreso))});   
            this.setState({ordenDeFecha: false});
            document.getElementById('ordenar').style.display = 'none';
            document.getElementById('ordenar2').style.display = 'inline';
        }else{
            this.setState({huespedes: this.state.huespedes.sort((a,b) => new Date(b.fechaIngreso) - new Date(a.fechaIngreso))});
            this.setState({ordenDeFecha: true});
            document.getElementById('ordenar').style.display = 'inline';
            document.getElementById('ordenar2').style.display = 'none';
        }
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