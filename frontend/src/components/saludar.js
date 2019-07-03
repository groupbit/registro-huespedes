import React from 'react';



class Saludar extends React.Component {
    constructor(props){
        super(props);
        this.state= {mensaje: ""}  
    }

    componentWillMount(){
        fetch(`http://localhost:8888/saludar`)
      .then( res => res.json())
      .then( mensaje => this.setState({mensaje}));
    }

    render(){ 
        return (
            <p>{this.state.mensaje}</p>
        );
    }

}

export default Saludar;