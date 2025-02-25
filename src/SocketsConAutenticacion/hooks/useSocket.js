import { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';


export const useSocket = (serverPath) => {

    // const socket = useMemo(() => io.connect(serverPath, { transports: ['websocket'] }), [serverPath]);
        
    const [socket, setSocket] = useState(null);
    const [online, setOnline] = useState(false);

    const conectarSocket = useCallback(() => {

        const token = localStorage.getItem('token');

        const socketTemp = io.connect(serverPath, {
            transports: ['websocket'],
            autoConnect: true, //* Se mantiene siempre conectado
            forceNew: true, //* Crea una nueva instancia de la conexión
            query: {
                'x-token': token //* enviamos el token por query. Podemos poner cualquier valor de la llave
            }
        });
        //* el token lo mandamos para evaluar quien es el que se conecto al socket

        setSocket(socketTemp);
    }, [serverPath])

    const desconectarSocket = useCallback(() => {
        socket?.disconnect()
    }, [socket])

    useEffect(() => {
        setOnline(socket?.connected);
    }, [socket])

    useEffect(() => {
        socket?.on('connect', () => setOnline(true));
    }, [socket])

    useEffect(() => {
        socket?.on('disconnect', () => setOnline(false));
    }, [socket])

    return {
        socket,
        online,
        conectarSocket,
        desconectarSocket
    }
}
