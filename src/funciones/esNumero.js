function parseString(input) {
    if (!isNaN(input) && input.trim() !== "") {
      const number = Number(input); // Convertimos la cadena a un número
      return Number.isInteger(number) ? parseInt(input, 10) : parseFloat(input);
    } else {
      return input; // Mantener como cadena si no es un número
    }
  }

export default parseString;