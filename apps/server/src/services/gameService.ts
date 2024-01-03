import { Pool } from 'pg';

// Replace these values with your actual database connection details
const pool = new Pool({
  user: 'your_db_user',
  host: 'your_db_host',
  database: 'trivia_game',
  password: 'your_db_password',
  port: 5432, // Your PostgreSQL port
});

export const createRoom = async (roomCode: string): Promise<any> => {
  const client = await pool.connect();

  try {
    // Insert a new room into the rooms table
    const insertRoomQuery = 'INSERT INTO rooms (room_code) VALUES ($1) RETURNING *';
    const roomResult = await client.query(insertRoomQuery, [roomCode]);
    const newRoom = roomResult.rows[0];
    return newRoom;
  } finally {
    client.release();
  }
};
