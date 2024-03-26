import * as React from "react";
import { Box } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import { DayCellContentArg } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import { sectionsToEvents } from "../../common/utils";
import { Section } from "../../common/types";

interface ScheduleProps {
  sections: Section[];
  hoverSections: Section[];
}

const customDayCell = (arg: DayCellContentArg) => {
  return <>{}</>;
};

const Schedule: React.FC<ScheduleProps> = ({ sections, hoverSections }) => {
  const events = [
    sectionsToEvents(sections),
    sectionsToEvents(hoverSections, "lightblue"),
  ].flat(); // Implement logic so that if hoversinglemeeting events are already in singlemeeting events, it doesn't display

  return (
    <Box>
      <FullCalendar
        height={"40vw"}
        plugins={[timeGridPlugin]}
        dayHeaderFormat={{ weekday: "long" }} // Change the day header to just include the day w/o the date
        initialView="timeGridWeek" // Set the view to a time grid week
        headerToolbar={false} // Removes the header and control buttons from the calendar
        weekends={false} // Removes weekends
        events={events}
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
