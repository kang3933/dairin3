CREATE TABLE `consultations` (
  `id` text PRIMARY KEY NOT NULL,
  `created_at` text NOT NULL,
  `name` text NOT NULL,
  `phone` text NOT NULL,
  `region` text NOT NULL,
  `beer` text NOT NULL,
  `question` text NOT NULL,
  `consent` integer NOT NULL
);
