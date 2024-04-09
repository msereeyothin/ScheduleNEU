import * as React from "react";
import { Box } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { sectionsToEvents } from "../../common/utils";
import "./calendar.css";
import { Section } from "../../common/types";

interface ScheduleProps {
  sections: Section[];
  hoverSections: Section[];
}

const Schedule: React.FC<ScheduleProps> = ({ sections, hoverSections }) => {
  const events = [
    sectionsToEvents(sections),
    sectionsToEvents(hoverSections, "lightblue"),
  ].flat();

  return (
    <Box>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        events={events}
        headerToolbar={false}
        weekends={false}
        allDaySlot={false}
        slotMinTime={"08:00:00"}
        slotMaxTime={"22:00:00"}
        nowIndicator={false}
        initialDate={"2024-01-01"}
        height={"45vw"}
        themeSystem="bootstrap5"
        dayHeaderFormat={{ weekday: "long" }}
        dayHeaderContent={renderDayHeaderContent}
        slotLabelContent={renderSlotLabelContent}
        eventContent={renderEventContent}
      />
    </Box>
  );
};

// Callback to render the slot label AKA the time on the left side
function renderSlotLabelContent(args: any) {
  //console.log(args);
  return <Box sx={{
    padding: '0.5',
    height: 'auto',
    minHeight: '28px',
    marginBottom: '0.5px',
    fontFamily: 'Arial',
    fontSize: '13px',
  }}
  >{args.text}</Box>;
}

// Callback to render the header days, e.g, Monday Tuesday Tuesday etc.
function renderDayHeaderContent(args: any) {
  //console.log(args)
  return <Box sx={{
    padding: '6px',
    fontSize: '15px',
  }}>{args.text}</Box>;
}

// Callback to render the events
function renderEventContent(event: any) {
  const backgroundColor = event.event.extendedProps.customColor; // This is how to get custom props

  return (
    <Box
      sx={{
        padding: 0.5,
        height: "100%",
        backgroundColor: backgroundColor,
      }}
    >
      <div onMouseOver={() => console.log("hovering")}>
        <b>{event.timeText} </b>
        <i>{event.event.title}</i>
      </div>
    </Box>
  );
}
export default Schedule;
