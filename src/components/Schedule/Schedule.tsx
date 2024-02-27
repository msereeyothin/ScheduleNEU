import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Divider, Box } from "@mui/material";
import { Section } from "../../common/types";
import * as React from "react";
import FullCalendar from "@fullcalendar/react";
import { DayCellContentArg } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import { singleMeetingsToEvent } from "../../common/utils";
import { SingleMeeting } from "../../common/types";

interface ScheduleProps {
  singleMeetings: SingleMeeting[];
}

const customDayCell = (arg: DayCellContentArg) => {
  return <>{}</>;
};

const Schedule: React.FC<ScheduleProps> = ({ singleMeetings }) => {
  return (
    <Box
      sx={{
        padding: 3,
      }}
    >
      <FullCalendar
        plugins={[timeGridPlugin]}
        dayHeaderFormat={{ weekday: "long" }} // Change the day header to just include the day w/o the date
        initialView="timeGridWeek" // Set the view to a time grid week
        headerToolbar={false} // Removes the header and control buttons from the calendar
        weekends={false} // Removes weekends
        events={singleMeetingsToEvent(singleMeetings)}
        eventContent={renderEventContent}
        allDaySlot={false}
        slotMinTime={"08:00:00"}
        slotMaxTime={"22:00:00"}
        nowIndicator={false}
        dayCellContent={customDayCell}
        initialDate={"2024-01-01"}
      />
    </Box>
  );
};

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText} </b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
export default Schedule;
