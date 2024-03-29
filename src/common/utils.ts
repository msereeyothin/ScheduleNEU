import { Course, Section } from "./types";

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
  return !courseList.includes(course);
}

export function secondsToTime(seconds: number) {
  return new Date(seconds * 1000).toISOString().slice(11, 16);
}

export function sectionsToEvents(sections: Section[], backgroundColor = "") {
  const events: any[] = [];
  sections.forEach((section) => {
    section.meetings.forEach((meeting) => {
      Object.entries(meeting.times).forEach(([day, meetingTimes]) => {
        let start;
        let end;
        meetingTimes.map((time) => {
          start = `${secondsToTime(time.start)}`;
          end = `${secondsToTime(time.end)}`;
        });
        events.push({
          title: section.name,
          start: `2024-01-0${day}T${start}:00`,
          end: `2024-01-0${day}T${end}:00`,
          backgroundColor: backgroundColor,
        });
      });
    });
  });
  return events;
}

export const termIds = ["2023", "2024"]
  .map((year) => [
    `${year}10`,
    `${year}30`,
    `${year}40`,
    `${year}50`,
    `${year}60`,
  ])
  .flat();