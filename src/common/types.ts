interface MeetingTime {
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
  meetings: Meeting[];
}

export interface CourseNode {
  name: string;
  subject: string;
  classId: string;
  sections: Section[];
}

export enum DayOfWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

export const dayToString = (day: DayOfWeek): string => {
  switch (day) {
    case DayOfWeek.Monday:
      return "Monday";
    case DayOfWeek.Tuesday:
      return "Tuesday";
    case DayOfWeek.Wednesday:
      return "Wednesday";
    case DayOfWeek.Thursday:
      return "Thursday";
    case DayOfWeek.Friday:
      return "Friday";
    default:
      return "Invalid Day";
  }
};
