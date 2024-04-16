import { Section } from "../../../common/types";
import { dayToString } from "../../../common/utils";
import { Box } from "@mui/material";
import { secondsToTime } from "../../../common/utils";
import DayDisplay from "./DayDisplay";

function WeekDisplay({ section }: { section: Section }) {
  const dayTimePairs = section.meetings.reduce<
    { day: number; timeString: string }[]
  >((accumulator, meeting) => {
    Object.entries(meeting.times).forEach(([day, times]) => {
      times.forEach((time) => {
        const timeString = `${secondsToTime(time.start)} - ${secondsToTime(
          time.end
        )}`;
        const dayInt = parseInt(day);
        const pair = { day: dayInt, timeString };
        if (
          !accumulator.some(
            (item) => item.day === dayInt && item.timeString === timeString
          )
        ) {
          accumulator.push(pair);
        }
      });
    });
    return accumulator;
  }, []);

  // filter unique times regardless of the day, for displaying purposes
  const uniqueTimes = Array.from(
    new Set(dayTimePairs.map((pair) => pair.timeString))
  );

  return (
    <div>
      {section.meetings.map((meeting, meetingIndex) => (
        <Box
          key={meetingIndex}
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((dayNum) => {
              const activated = Object.keys(meeting.times)
                .map((day) => parseInt(day))
                .includes(dayNum);
              const dayLetter = dayToString(dayNum).substring(0, 1);
              return <DayDisplay activated={activated} dayLetter={dayLetter} />;
            })}
          </Box>
          {/* Display times next to the corresponding day if they match */}
          {uniqueTimes.map((time, index) => {
            const isTimeForDay = dayTimePairs.some(
              (pair) =>
                pair.timeString === time &&
                Object.keys(meeting.times)
                  .map((day) => parseInt(day))
                  .includes(pair.day)
            );
            return isTimeForDay ? <div key={index}>{time}</div> : null;
          })}
        </Box>
      ))}
    </div>
  );
}

export default WeekDisplay;
