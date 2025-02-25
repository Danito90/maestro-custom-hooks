/**
 * Hook personalizado para manejar datos con react-query.
 *
 * @returns {Object} - Retorna un objeto con las siguientes propiedades y funciones:
 * @returns {boolean} isLoading - Indica si la consulta está cargando.
 * @returns {boolean} isError - Indica si hubo un error en la consulta.
 * @returns {any} data - Los datos obtenidos de la consulta.
 * @returns {string} ruta - La ruta actual utilizada para la consulta.
 * @returns {Function} setRuta - Función para establecer la ruta.
 * @returns {Object} deleteMutation - Mutación para eliminar datos.
 * @returns {Object} editMutation - Mutación para editar datos.
 * @returns {Object} addMutation - Mutación para agregar datos.
 * @returns {Object} patchData - Mutación para editar datos parcialmente.
 */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteData, fetchData, addData, editData } from "../servicios/data"
import { useContext } from "react"
import { toast } from 'sonner';
import { RutaContexto } from "../contextos/RutaContexto";


export const useData = () => {
    const queryClient = useQueryClient();
    const {ruta, cambiarRuta: setRuta} = useContext(RutaContexto);
    const { isLoading, isError, data } = useQuery({
        queryKey: [ruta],
        queryFn: () => fetchData({ ruta }),
        refetchOnWindowFocus: true,
    })

    const deleteMutation = useMutation({
        mutationFn: ({ id }) => deleteData({ ruta, id }),
        onError: (error) => {
            toast.error(`Error: ${error.message}`,
                {
                    duration: 8000, 
                    description: "Es probable que otros registros dependen de el.",
                }
            );
        },
        onSuccess: () => {
            // Invalida y refetch las queries relevantes
            queryClient.invalidateQueries([ruta]);
            toast.success('Operación exitosa');
        },
    });

    const editMutation = useMutation({
        mutationFn: ({ ruta, id, data }) => editData({ ruta, id, data }),
        onError: (error) => {
            toast.error(`Error: ${error.message} - ${ruta}`, {
                duration: 8000,
                description: "Error al editar el registro.",
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries([ruta]);
            toast.success('Registro editado exitosamente');
        },
    });

    const addMutation = useMutation({
        mutationFn: ({ ruta, data }) => addData({ ruta, data }),
        onError: (error) => {
            toast.error(`Error: ${error.message}`, {
                duration: 8000,
                description: "Error al agregar el registro.",
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries([ruta]);
            toast.success('Registro agregado exitosamente');
        },
    });

    const patchData = useMutation({
        mutationFn: ({ ruta, id, data }) => editData({ ruta, id, data }),
        onError: (error) => {
            toast.error(`Error: ${error.message}`, {
                duration: 8000,
                description: "Error al editar el registro.",
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries([ruta]);
            toast.success('Registro editado exitosamente');
        },

    });

    return { isLoading, data, isError, ruta, setRuta, deleteMutation, editMutation, addMutation, patchData };
};