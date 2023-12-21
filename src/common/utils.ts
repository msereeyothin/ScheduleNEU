import { CourseNode } from "./types";

export function termIdToString(term: string) {
  const semester = term.slice(-2);
  const year = term.slice(0, 4);
  switch (semester) {
    case "10":
      return "Fall " + (Number(year) - 1).toString() + " Semester";
    case "30":
      return "Spring " + year + " Semester";
    case "40":
      return "Summer 1 " + year + " Semester";
    case "50":
      return "Summer Full " + year + " Semester";
    case "60":
      return "Summer 2 " + year + " Semester";
  }
}

export function courseNodeToString(course: CourseNode) {
  return `${course.subject}${course.classId}`;
}

export function alreadyExists(course: CourseNode, courseList: CourseNode[]) {
  return !courseList.includes(course);
}

export function secondsToTime(seconds: number) {
  return new Date(seconds * 1000).toISOString().slice(11, 16);
}
