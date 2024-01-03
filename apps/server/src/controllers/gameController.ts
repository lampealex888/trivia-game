import { Request, Response } from 'express';
import { createRoom } from '../services/gameService';

export const createRoomController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { roomCode } = req.body;
    const newRoom = await createRoom(roomCode);
    res.status(201).json(newRoom);
  } catch (error) {
    console.error('Error creating room:', error);
    res.status(500).send('Internal Server Error');
  }
};
