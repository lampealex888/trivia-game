import { Socket, io } from 'socket.io-client';

export const URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';