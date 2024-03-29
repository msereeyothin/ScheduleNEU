import React from "react";
import { Typography } from "@mui/material";
import DayDisplay from "../components/Course/MeetingDisplay/DayDisplay";

function About() {
  return (
    <div>
      <Typography variant="h1">This is the about page</Typography>
      <Typography variant="body1">This is a description</Typography>
      <DayDisplay activated={true} dayLetter="M"></DayDisplay>
      <DayDisplay activated={false} dayLetter="M"></DayDisplay>
    </div>
  );
}

export default About;
