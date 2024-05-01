import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { sectionsToEvents } from "../../utils/utils";
import "./Calendar.css";
import { Section } from "../../utils/types";
import { renderEventContent } from "./RenderEventContent";

interface ScheduleProps {
  sections: Section[];
  hoverSections: Section[];
  height: string;
}

const Schedule: React.FC<ScheduleProps> = ({
  sections,
  hoverSections,
  height,
}) => {
  const theme = useTheme();
  const events = [
    sectionsToEvents(sections, theme.palette.secondary.main),
    sectionsToEvents(hoverSections, theme.palette.secondary.light),
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
        height={height}
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
  return (
    <Box
      sx={{
        padding: "0.5",
        height: "auto",
        marginBottom: "0.5px",
        fontFamily: "Arial",
        fontSize: "16px",
      }}
    >
      <Typography variant="body1">{args.text}</Typography>
    </Box>
  );
}

// Callback to render the header days, e.g, Monday Tuesday Tuesday etc.
function renderDayHeaderContent(args: any) {
  return (
    <Box
      sx={{
        padding: "6px",
      }}
    >
      <Typography variant="subtitle1">{args.text}</Typography>
    </Box>
  );
}

export default Schedule;
