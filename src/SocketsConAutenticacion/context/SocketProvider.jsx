import React, { useContext, useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import { SocketContext } from "./SocketContext";
import { AuthContext } from "../auth/AuthContext";

export const SocketProvider = ({ children }) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    "http://localhost:8080"
  );
  const { auth } = useContext(AuthContext);

  //* Conectar socket cuando se loguea.
  useEffect(() => {
    if (auth.logged) {
      conectarSocket();
    }
  }, [auth, conectarSocket]);

  //* Desconectar socket cuando se desloguea.
  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket();
    }
  }, [auth, desconectarSocket]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
