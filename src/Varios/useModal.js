/**
 * Hook personalizado para gestionar el estado de un modal.
 *
 * @returns {Object} Un objeto que contiene:
 * - {boolean} isOpen - Indica si el modal está abierto.
 * - {Object} modalProps - Propiedades del modal.
 * - {string} modalProps.titulo - Título del modal.
 * - {string} modalProps.mensaje - Mensaje del modal.
 * - {string} modalProps.textoAceptar - Texto para el botón de aceptar.
 * - {string} modalProps.textoCancelar - Texto para el botón de cancelar.
 * - {string} modalProps.tipoIcono - Tipo de icono a mostrar en el modal.
 * - {Function} modalProps.onConfirmar - Función de callback a ejecutar al confirmar.
 * - {Function} modalProps.onCancelar - Función de callback a ejecutar al cancelar.
 * - {Function} openModal - Función para abrir el modal con las propiedades dadas.
 * - {Function} closeModal - Función para cerrar el modal.
 */
// src/hooks/useModal.js
import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    titulo: '',
    mensaje: '',
    textoAceptar: '',
    textoCancelar: '',
    tipoIcono: '',
    onConfirmar: () => {},
    onCancelar: () => {},
  });

  const openModal = (props) => {
    setModalProps(props);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    modalProps,
    openModal,
    closeModal,
  };
};