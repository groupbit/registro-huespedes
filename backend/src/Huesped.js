class Huesped {

    constructor(nombre, telefono, dni, noches, cantpersonas, habitacion, fechaIngreso, fechaSalida) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.dni = dni;
        this.noches = noches;
        this.cantpersonas = cantpersonas;
        this.habitacion = habitacion;
        this.fechaIngreso = fechaIngreso;
        this.fechaSalida = fechaSalida;
    }
}

module.exports = Huesped;