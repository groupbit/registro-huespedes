import React from 'react';

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
                <td>{this.props.huesped.noches}</td>
                <td>{this.props.huesped.cantPersonas}</td>
            </tr>
        );
      
    }
}

  export default HuespedRow