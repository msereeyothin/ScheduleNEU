import { Course, Section } from "./types";
import { WeekDay } from "./types";

export function termIdToString(term: string) {
  const semester = term.slice(-2);
  const year = term.slice(0, 4);
  switch (semester) {
    case "10":
      return "Fall " + (Number(year) - 1).toString();
    case "30":
      return "Spring " + year;
    case "40":
      return "Summer 1 " + year;
    case "50":
      return "Summer Full " + year;
    case "60":
      return "Summer 2 " + year;
  }
}

export function courseNodeToString(course: Course) {
  return `${course.subject}${course.classId}`;
}

export function alreadyExists(course: Course, courseList: Course[]) {
  return courseList.some(
    (existingCourse) =>
      existingCourse.subject === course.subject &&
      existingCourse.classId === course.classId
  );
}

export function secondsToTime(seconds: number) {
  return new Date(seconds * 1000).toISOString().slice(11, 16);
}

export function sectionsToEvents(
  sections: Section[],
  backgroundColor = "#1d3557"
) {
  const events: any[] = [];
  sections.forEach((section) => {
    section.meetings.forEach((meeting) => {
      Object.entries(meeting.times).forEach(([day, meetingTimes]) => {
        let start;
        let end;
        meetingTimes.forEach((time) => {
          start = `${secondsToTime(time.start)}`;
          end = `${secondsToTime(time.end)}`;
        });
        events.push({
          title: section.name,
          start: `2024-01-0${day}T${start}:00`,
          end: `2024-01-0${day}T${end}:00`,
          color: backgroundColor,
          professors: section.profs,
          location: meeting.where,
          CRN: section.crn,
          seatsRemain: section.seatsRemaining,
          capacity: section.seatsCapacity,
        });
      });
    });
  });
  return events;
}

export function generateID() {
  return Math.random().toString(16).slice(2);
}

export function arrayMove<T>(array: T[], fromIndex: number, toIndex: number): T[] {
  const result = array.slice(); // Make a copy of the array to avoid mutating the original
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
}


export const dayToString = (day: WeekDay): string => {
  switch (day) {
    case WeekDay.Monday:
      return "Monday";
    case WeekDay.Tuesday:
      return "Tuesday";
    case WeekDay.Wednesday:
      return "Wednesday";
    case WeekDay.Thursday:
      return "Thursday";
    case WeekDay.Friday:
      return "Friday";
    default:
      return "Invalid Day";
  }
};

