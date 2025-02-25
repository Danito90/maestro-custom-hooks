import { useSocket } from "../hooks/useSocket";
import { SocketsContext } from "./SocketsContext";

export const SocketsProvider = ({ children }) => {
  const { socket, online } = useSocket("http://localhost:8080");

  return (
    <SocketsContext.Provider value={{ socket, online }}>
      {children}
    </SocketsContext.Provider>
  );
};
