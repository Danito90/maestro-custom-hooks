/**
 * Hook personalizado para gestionar el estado del formulario y manejar el envío del formulario.
 *
 * @param {Object} initialState - El estado inicial del formulario.
 * @returns {Object} Un objeto que contiene el estado del formulario, el manejador de cambios, el manejador de reinicio y el manejador de envío.
 *
 * @property {Object} formulario - El estado actual del formulario.
 * @property {Function} handleChange - Función para manejar los cambios en los inputs del formulario.
 * @property {Function} resetForm - Función para reiniciar el formulario a su estado inicial.
 * @property {Function} handleSubmit - Función para manejar el envío del formulario.
 */
// src/hooks/useForm.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import parseString from '../utils/esNumero';
import { useData } from './useData';

export const useForm = (initialState) => {

    const navigate = useNavigate();

    const { ruta:form, addMutation, editMutation } = useData();

    const [formulario, setFormulario] = useState(initialState);

    const handleChange = (e) => {
        
        const { name, value, type, checked } = e.target;
        // si el valor es un número, lo convierte a entero, de lo contrario lo deja como string
        const valor_campo = parseString(value);

        setFormulario((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : valor_campo,
        }));
    };

    const resetForm = () => {
        setFormulario(initialState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formulario.id) {
            editMutation.mutate(
                {
                    ruta: form.toLocaleLowerCase(),
                    id: formulario.id,
                    data: formulario,
                },
                {
                    onSuccess: () => {
                        resetForm();
                        e.target.reset();
                        // Redirigir a la tabla
                        navigate("/ConsultaDatos", { state: { form: form.toLowerCase() } });
                    },
                }
            );
        } else {
            const { id,...newData } = formulario; // Elimina la clave 'id'

            addMutation.mutate({
                ruta: form.toLocaleLowerCase(),
                data: newData,
            },
            {
                onSuccess: () => {
                    resetForm();
                    e.target.reset();
                },
            });
        }


    };

    return {
        formulario,
        handleChange,
        resetForm,
        handleSubmit,
    };
};