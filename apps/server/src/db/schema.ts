import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  nickname: text("nickname").notNull(),
  avatar: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const rooms = pgTable("rooms", {
  id: serial("code").primaryKey(),
  hostId: text("host_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const room_players = pgTable("room_players", {
  id: serial("id").primaryKey(),
  userId: serial("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  roomId: serial("room_id")
    .references(() => rooms.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const games = pgTable("games", {
  id: serial("id").primaryKey(),
  roomId: serial("room_id")
    .references(() => rooms.id)
    .notNull(),
  state: text("state").notNull().default("lobby"),
  round: integer("round").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  completedAt: timestamp("completed_at"),
});

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  correctAnswer: text("correct_answer").notNull(),
  option1: text("option_1").notNull(),
  option2: text("option_2").notNull(),
  option3: text("option_3").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const answers = pgTable("answers", {
  id: serial("id").primaryKey(),
  userId: serial("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  questionId: serial("question_id")
    .notNull()
    .references(() => questions.id, { onDelete: "cascade" }),
  answer: text("answer").notNull(),
  correct: boolean("correct").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const sessions = pgTable("sessions", {
  id: serial("id").primaryKey(),
  sessionToken: text("session_token").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable("verification_tokens", {
  id: serial("id").primaryKey(),
  identifier: text("identifier").notNull(),
  token: text("token").notNull(),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export type User = typeof users.$inferInsert;
export type NewUser = typeof users.$inferInsert;

export type Room = typeof rooms.$inferSelect;
export type NewRoom = typeof rooms.$inferInsert;
export type RoomInfo = {
  hostId: string | null;
  id: string;
  createdAt: Date;
  players: User[];
};

export type Game = typeof games.$inferSelect;
export type NewGame = typeof games.$inferInsert;

export type Question = typeof questions.$inferSelect;
export type NewQuestion = typeof questions.$inferInsert;

export type Answer = typeof answers.$inferSelect;
export type NewAnswer = typeof answers.$inferInsert;
