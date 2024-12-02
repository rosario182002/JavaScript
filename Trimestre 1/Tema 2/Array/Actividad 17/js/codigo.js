let crearObjeto = () => {
    let taxi = {
    tipoMotor:'Motor Gasolina',
    numPasajeros: 4,
    carga: "50kg",
    velocidad: "120 km/h",
    ruedas: 4,
    //metodo para saludar
    saludar(){
        alert(`Hola, soy un taxi de ${this.ruedas} ruedas y ${this.  numPasajeros} pasajeros.`)
    }
};
//llama al metodo saludar
taxi.saludar();
}