/**
 * Hook que proporciona datos ordenados y funcionalidad para cambiar el orden.
 *
 * @param {Array} data - Los datos que se van a ordenar.
 * @returns {Object} Un objeto que contiene los datos ordenados, la función para cambiar el orden y el estado de la ordenación.
 * @returns {Array} return.sortedData - Los datos ordenados.
 * @returns {Function} return.changeSorting - Función para cambiar el orden de los datos.
 * @returns {Object} return.sorting - El estado actual de la ordenación.
 * @returns {string|null} return.sorting.column - La columna por la que se está ordenando.
 * @returns {string} return.sorting.direction - La dirección de la ordenación ("asc" o "desc").
 */
import { useMemo, useState } from 'react';

export const useSortedData = (data) => {
  const [sorting, setSorting] = useState({ column: null, direction: "asc" });

  const sortedData = useMemo(() => {
    if (!sorting.column) return data;

    const sorted = [...data].sort((a, b) => {
      if (a[sorting.column] < b[sorting.column])
        return sorting.direction === "asc" ? -1 : 1;
      if (a[sorting.column] > b[sorting.column])
        return sorting.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data, sorting]);

  const changeSorting = (column) => {
    setSorting((prev) => {
      if (prev.column === column) {
        return {
          column,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { column, direction: "asc" };
    });
  };

  return { sortedData, changeSorting, sorting };
};
