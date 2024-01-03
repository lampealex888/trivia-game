CREATE DATABASE "triviagame";

\c triviagame

SET client_encoding = 'UTF8';

CREATE TABLE IF NOT EXISTS "answers" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"question_id" serial NOT NULL,
	"answer" text NOT NULL,
	"correct" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "games" (
	"id" serial PRIMARY KEY NOT NULL,
	"room_id" serial NOT NULL,
	"state" text DEFAULT 'lobby' NOT NULL,
	"round" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"completed_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "questions" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"correct_answer" text NOT NULL,
	"option_1" text NOT NULL,
	"option_2" text NOT NULL,
	"option_3" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "room_players" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"room_id" serial NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rooms" (
	"code" serial PRIMARY KEY NOT NULL,
	"host_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_token" text NOT NULL,
	"user_id" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"nickname" text NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verification_tokens" (
	"id" serial PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL
);