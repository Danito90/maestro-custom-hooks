/**
 * Hook personalizado para gestionar la visibilidad de columnas.
 *
 * @param {Array<string>} columnas - Lista de nombres de columnas.
 * @returns {Object} - Un objeto con las siguientes propiedades y funciones:
 *   - visibleColumns {Array<string>}: Lista de columnas visibles.
 *   - toggleColumnVisibility {Function}: Función para alternar la visibilidad de una columna.
 *   - selectAllColumns {Function}: Función para seleccionar todas las columnas.
 *   - resetColumns {Function}: Función para restablecer las columnas a su estado predeterminado.
 *   - orderedVisibleColumns {Array<string>}: Lista de columnas visibles ordenadas.
 */
import { useState, useEffect, useMemo } from 'react';

export const useVisibleColumns = (columnas) => {
  const [visibleColumns, setVisibleColumns] = useState([]);

  useEffect(() => {
    const defaultVisibleColumns = columnas.filter(columna => !columna.startsWith("id_"));
    setVisibleColumns(defaultVisibleColumns);
  }, [columnas]);

  const toggleColumnVisibility = (column) => {
    setVisibleColumns((prev) =>
      prev.includes(column) ? prev.filter((col) => col !== column) : [...prev, column]
    );
  };

  const selectAllColumns = () => {
    setVisibleColumns(columnas);
  };

  const resetColumns = () => {
    const defaultVisibleColumns = columnas.filter(columna => !columna.startsWith("id_"));
    setVisibleColumns(defaultVisibleColumns);
  };

  const orderedVisibleColumns = useMemo(() => {
    return columnas.filter((columna) => visibleColumns.includes(columna));
  }, [columnas, visibleColumns]);

  return { visibleColumns, toggleColumnVisibility, selectAllColumns, resetColumns, orderedVisibleColumns };
};
