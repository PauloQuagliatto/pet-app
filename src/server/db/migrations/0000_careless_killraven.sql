CREATE TABLE `account` (
	`userId` text NOT NULL,
	`type` text NOT NULL,
	`provider` text NOT NULL,
	`providerAccountId` text NOT NULL,
	`refresh_token` text,
	`access_token` text,
	`expires_at` integer,
	`token_type` text,
	`scope` text,
	`id_token` text,
	`session_state` text,
	PRIMARY KEY(`provider`, `providerAccountId`),
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `diary` (
	`id` text PRIMARY KEY NOT NULL,
	`date` integer DEFAULT (current_timestamp),
	`text` text NOT NULL,
	`petId` text NOT NULL,
	FOREIGN KEY (`petId`) REFERENCES `pet`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `petColor` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`color` text,
	`petId` text NOT NULL,
	FOREIGN KEY (`petId`) REFERENCES `pet`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `pet` (
	`id` text PRIMARY KEY DEFAULT '202cc139-9bbf-423b-82b3-a432616427b0' NOT NULL,
	`name` text,
	`image` text,
	`tutorId` text NOT NULL,
	`birthDate` integer DEFAULT (current_timestamp) NOT NULL,
	`health` text DEFAULT 'EXCELENT' NOT NULL,
	FOREIGN KEY (`tutorId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` text,
	`sessionToken` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`expires` integer NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`emailVerified` integer,
	`image` text,
	`phone` text,
	`password` text
);
--> statement-breakpoint
CREATE TABLE `vaccines` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`createdAt` integer DEFAULT (current_timestamp) NOT NULL,
	`appliedAt` integer DEFAULT (current_timestamp) NOT NULL,
	`userId` text,
	`petId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`petId`) REFERENCES `pet`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `verificationToken` (
	`identifier` text NOT NULL,
	`token` text NOT NULL,
	`expires` integer NOT NULL,
	PRIMARY KEY(`identifier`, `token`)
);
--> statement-breakpoint
CREATE TABLE `vet` (
	`id` text PRIMARY KEY NOT NULL,
	`createdAt` integer DEFAULT (current_timestamp) NOT NULL,
	`userId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
