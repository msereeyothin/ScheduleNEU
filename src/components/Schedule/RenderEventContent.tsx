import * as React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import "./calendar.css";


// Callback to render the events
export function renderEventContent(event: any) {
    const backgroundColor = event.event.extendedProps.customColor; // This is how to get custom props
    const iconColor =
      event.event.extendedProps.seatsRemain === 0 ? "warning" : "success";
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
        }}
      >
        <Typography>CRN: {classCRN}</Typography>
        <Typography>Professor: {professors}</Typography>
        <Typography>Location: {classLocation}</Typography>
        <Typography>
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
            backgroundColor: backgroundColor,
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