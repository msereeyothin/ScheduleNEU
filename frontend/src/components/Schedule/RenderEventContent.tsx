import * as React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import "./Calendar.css";

// Callback to render the events
export function renderEventContent(event: any) {
  const professors = event.event.extendedProps.professors;
  const classCRN = event.event.extendedProps.CRN;
  const classLocation = event.event.extendedProps.location;
  const seatsRemaining = event.event.extendedProps.seatsRemain;
  const seatsCapacity = event.event.extendedProps.capacity;

  const tooltipInfo = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0.5,
      }}
    >
      <Typography color={"inherit"}>CRN: {classCRN}</Typography>
      <Typography color={"inherit"}>Professor: {professors}</Typography>
      <Typography color={"inherit"}>Location: {classLocation}</Typography>
      <Typography color={"inherit"}>
        Seats remaining: {seatsRemaining}/{seatsCapacity}
      </Typography>
    </Box>
  );

  return (
    <Tooltip title={tooltipInfo} arrow>
      <Box
        sx={{
          padding: 0.5,
          height: "100%",
          borderRadius: "0px",
        }}
      >
        <b>{event.timeText} </b>
        <i>{event.event.title}</i>
      </Box>
    </Tooltip>
  );
}

export default renderEventContent;
