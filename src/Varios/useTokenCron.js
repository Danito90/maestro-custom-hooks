import { useEffect, useContext } from "react";
import { RutaContexto } from "../contextos/RutaContexto";

export const useTokenCron = (onFinish) => {
    const { tiempoRestante, setTiempoRestante } = useContext(RutaContexto);

    
    console.log("tiempoRestante: ", tiempoRestante);
    useEffect(() => {
      if (tiempoRestante <= 0) {
        if (onFinish) onFinish(); // 🔥 Llamar a la función cuando llegue a 0
        return;
      }
  
      const timeout = setTimeout(() => {
        setTiempoRestante((prev) => Math.max(prev - 1000, 0));
      }, 1000);
  
      return () => clearTimeout(timeout); //* Limpiar el timeout. Desmontar el componente
    }, [tiempoRestante, onFinish, setTiempoRestante]);
  
    const formatoTiempo = (ms) => {
      const segundos = Math.floor((ms / 1000) % 60);
      const minutos = Math.floor((ms / 1000 / 60) % 60);
      const horas = Math.floor(ms / 1000 / 60 / 60);
      return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
    };
  
    return {
        tiempoRestante: formatoTiempo(tiempoRestante)
    }
  };
  
