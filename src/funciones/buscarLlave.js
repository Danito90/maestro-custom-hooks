
// Recuperar la clave por su valor
export function obtenerClavePorValor(obj, valorBuscado) {
    return Object.keys(obj).find(key => obj[key] === valorBuscado);
  }