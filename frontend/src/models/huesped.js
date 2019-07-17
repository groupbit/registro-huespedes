function diasDeHospedaje(huesped){
    var fechaini = new Date(huesped.fechaIngreso);
    var fechafin = new Date(huesped.fechaSalida);
    var diasdif= fechafin.getTime()-fechaini.getTime();
    return Math.round(diasdif/(1000*60*60*24));
}


export { diasDeHospedaje };
