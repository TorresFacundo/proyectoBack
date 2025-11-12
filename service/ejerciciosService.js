const { infoEjercicios } = require("../src/ejercicios")

exports.getAllEjercicios = () => {
    return (JSON.stringify(infoEjercicios))
}

exports.getEjercicioId = (id) => {
    const indice = infoEjercicios.ejercicios.findIndex(ejercicio => ejercicio.id == id);

    if (indice >= 0) { 
        return infoEjercicios.ejercicios[indice];
    } else {
        return [];
    }
};

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

exports.updateEjercicioItem = (id, ejercicioActualizado) => {
    const indice = infoEjercicios.ejercicios.findIndex(ejercicio => ejercicio.id == id);

    if (indice >= 0) { 
        const ejercicioAModificar = infoEjercicios.ejercicios[indice];
        Object.assign(ejercicioAModificar, ejercicioActualizado);
        return infoEjercicios;
    } else {
        return [];
    }
}