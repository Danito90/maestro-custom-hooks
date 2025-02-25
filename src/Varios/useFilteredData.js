/**
 * Hook personalizado para filtrar datos basado en texto de búsqueda, columna de búsqueda y filtro de estado.
 *
 * @param {Array} data - Los datos a filtrar.
 * @param {Array} columnas - Las columnas a buscar.
 * @returns {Object} Un objeto que contiene los datos filtrados y los setters de estado para la columna de búsqueda, el texto de búsqueda y el filtro de estado.
 * @returns {Array} return.filteredData - Los datos filtrados.
 * @returns {string} return.searchColumn - La columna de búsqueda actual.
 * @returns {Function} return.setSearchColumn - Función para establecer la columna de búsqueda.
 * @returns {string} return.searchText - El texto de búsqueda actual.
 * @returns {Function} return.setSearchText - Función para establecer el texto de búsqueda.
 * @returns {string} return.estadoFilter - El filtro de estado actual.
 * @returns {Function} return.setEstadoFilter - Función para establecer el filtro de estado.
 */

import { useMemo, useState } from 'react';
import { ESTADOS } from '../utils/enum';

export const useFilteredData = (data = [], columnas) => {
  const [searchColumn, setSearchColumn] = useState(ESTADOS.todas);
  const [searchText, setSearchText] = useState("");
  const [estadoFilter, setEstadoFilter] = useState(ESTADOS.todos);

  const filteredData = useMemo(() => {
    let filtered = Array.isArray(data) ? data : [];

    if (estadoFilter !== ESTADOS.todos) {
      const isActive = estadoFilter === ESTADOS.activo;
      filtered = filtered.filter(item => item.estado === isActive);
    }

    if (searchText) {
      filtered = filtered.filter((item) => {
        if (searchColumn === ESTADOS.todas) {
          return columnas.some((columna) =>
            item[columna]?.toString().toLowerCase().includes(searchText.toLowerCase())
          );
        }
        return item[searchColumn]?.toString().toLowerCase().includes(searchText.toLowerCase());
      });
    }

    return filtered;
  }, [data, searchText, searchColumn, estadoFilter, columnas]);

  return { filteredData, searchColumn, setSearchColumn, searchText, setSearchText, estadoFilter, setEstadoFilter };
};
