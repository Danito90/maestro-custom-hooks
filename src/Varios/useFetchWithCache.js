
/**
 * Hook personalizado para obtener datos con caché usando React Query.
 *
 * @param {Array} queryKey - La clave para identificar la consulta en la caché.
 * @returns {any} - Los datos obtenidos.
 *
 * @example
 * const data = useFetchWithCache(['someQueryKey']);
 */

import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { fetchData } from "../servicios/data";
import { toast } from "sonner";

export const useFetchWithCache = (queryKey) => {
  const queryClient = useQueryClient();
  const [data, setData] = useState(queryClient.getQueryData(queryKey)?.data);

  useEffect(() => {
    const fetchDataCache = async () => {
      if (!data) {
        try {
          const response = await fetchData({ ruta: queryKey[0] });
          setData(response.data);
          queryClient.setQueryData(queryKey, { data: response.data });
        } catch (error) {
          toast.error("Error fetching data:", error);
        }
      }
    };
    fetchDataCache();
  }, [data, queryClient, queryKey]);

  return data;
};
