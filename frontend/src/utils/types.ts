export interface MeetingTime {
  end: number;
  start: number;
}

export interface Meeting {
  type: string;
  times: { [key: string]: MeetingTime[] };
  where: string;
  endDate: number;
  startDate: number;
}

export interface Section {
  crn: string;
  profs: [string];
  /**
   * The reason this is a list of Meeting is because if the times
   * across all meetings aren't the same, they get split into multiple
   * Meeting objects. There's also a "Final Exam" Meeting, specified by
   * 'type', but I've already filtered those out.
   */
  seatsCapacity: number;
  seatsRemaining: number;
  meetings: Meeting[];
  name: string;
  campus: string;
}

export interface Course {
  name: string;
  subject: string;
  classId: string;
  sections: Section[];
}

export interface Plan {
  _id: string;
  name: string;
  term: string;
  isEmpty: boolean;
  campus: Campus;
  courses: Course[];
  sections: Section[];
}

export enum WeekDay {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

export type Campus =
  | "Arlington, VA"
  | "Boston"
  | "Burlington"
  | "Charlotte, NC"
  | "Dedham"
  | "Miami, FL"
  | "Nahant"
  | "Oakland, CA"
  | "Online"
  | "Portland, Maine"
  | "San Francisco, CA"
  | "Seattle, WA"
  | "Silicon Valley, CA"
  | "Toronto, Canada"
  | "Vancouver, Canada";

export const campusValues: Campus[] = [
  "Arlington, VA",
  "Boston",
  "Burlington",
  "Charlotte, NC",
  "Dedham",
  "Miami, FL",
  "Nahant",
  "Oakland, CA",
  "Online",
  "Portland, Maine",
  "San Francisco, CA",
  "Seattle, WA",
  "Silicon Valley, CA",
  "Toronto, Canada",
  "Vancouver, Canada",
];

export interface TermInfo {
  termId: string;
  text: string;
}

export interface UserData {
  uuid: string;
  plans: Plan[];
}