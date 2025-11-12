const { infoEjercicios } = require("../src/ejercicios")

exports.getAllEjercicios = () => {
    return (JSON.stringify(infoEjercicios))
}

exports.createNewEjercicio = (ejercicioNuevo) => {
    infoEjercicios.ejercicios.push(ejercicioNuevo);
    return (JSON.stringify(infoEjercicios))
}

exports.deleteEjercicio = (id) => {
    const indice = infoEjercicios.ejercicios.findIndex(ejercicios => ejercicios.id == id);

    if(indice > 0){ 
      infoEjercicios.ejercicios.splice(indice, 1);
      return infoEjercicios
    } else {
       return []
    }
}

exports.updateEjercicio = (id, ejercicioActualizado) => {
    const indice = infoEjercicios.ejercicios.findIndex(ejercicios => ejercicios.id == id);

    if(indice > 0){ 
        infoEjercicios.ejercicios[indice] = ejercicioActualizado;
        return infoEjercicios
    } else {
        return []
    }
}