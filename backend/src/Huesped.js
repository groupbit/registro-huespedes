class Huesped {

    constructor(nombre, telefono, dni, cantpersonas, habitacion, fechaIngreso, fechaSalida) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.dni = dni;
        this.cantpersonas = cantpersonas;
        this.habitacion = habitacion;
        this.fechaIngreso = fechaIngreso;
        this.fechaSalida = fechaSalida;
    }
}

module.exports = Huesped;