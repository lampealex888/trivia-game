import { Game, Question, Answer, RoomInfo } from './db/schema'

export interface ServerToClentEvents {
  message: (str: string) => void
  roomInfo: (roomInfo: RoomInfo) => void
  startGame: (gameId: number) => void
  playAnotherGame: (gameId: number) => void
  game: (game: Game) => void
  question: (question: Question) => void
  answer: (answer: Answer) => void
  error: (err: Error) => void
}

export interface ClientToServerEvents {
  joinRoom: (roomId: string) => void
  createRoom: () => void
  startGame: () => void
  nextQuestion: () => void
  answerQuestion: (answer: string) => void
}