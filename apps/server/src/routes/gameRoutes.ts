import express from 'express';
import { createRoomController } from '../controllers/gameController';
import { authenticateUser } from '../middleware/authenticationMiddleware';

const router = express.Router();

// Example: Protected route that requires authentication middleware
router.post('/create-room', authenticateUser, createRoomController);

export default router;
