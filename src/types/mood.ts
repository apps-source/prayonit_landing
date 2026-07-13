export type MoodId =
  | "anxious"
  | "overwhelmed"
  | "lonely"
  | "discouraged"
  | "angry"
  | "grateful"
  | "hopeful"
  | "not-sure";

export interface Mood {
  id: MoodId;
  label: string;
  buttonLabel: string;
  emoji: string;
  verseText: string;
  verseReference: string;
  devotion: string;
  prayer: string;
}
