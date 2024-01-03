import { Server, Socket } from 'socket.io';

export const handleConnection = (socket: Socket): void => {
  console.log('User connected:', socket.id);

  // Add more Socket.IO event handlers here
};

export const handleDisconnection = (socket: Socket): void => {
  console.log('User disconnected:', socket.id);

  // Add more Socket.IO event handlers here
};
