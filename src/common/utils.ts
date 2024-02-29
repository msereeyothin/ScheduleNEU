import { CourseNode, Meeting, SingleMeeting } from "./types";

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

export function singleMeetingsToEvent(singleMeetings: SingleMeeting[], backgroundColor = "") {
  const events: any[] = [];
  singleMeetings.forEach((singleMeeting) => {
    singleMeeting.meetings.forEach((meeting) => {
      Object.entries(meeting.times).forEach(([day, meetingTimes]) => {
        let start;
        let end;
        meetingTimes.map((time) => {
          start = `${secondsToTime(time.start)}`;
          end = `${secondsToTime(time.end)}`;
        });
        events.push({
          title: singleMeeting.name,
          start: `2024-01-0${day}T${start}:00`,
          end: `2024-01-0${day}T${end}:00`,
          backgroundColor: backgroundColor,
        });
      });
    });
  });
  return events;
}

export function meetingToSingleMeeting(name: string, meetings: Meeting[]) {
  return { name, meetings } as SingleMeeting;
}
