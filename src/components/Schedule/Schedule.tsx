import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Schedule = () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hoursOfDay = Array.from({ length: 15 }, (_, index) => index + 7); // 7 AM to 10 PM

  return (
    <Grid container spacing={1}>
      <Grid item xs={1} />
      {daysOfWeek.map((day) => (
        <Grid item key={day} xs={2}>
          <Paper style={{ padding: "10px", minHeight: "100px" }}>
            <Typography variant="h6">{day}</Typography>
            {hoursOfDay.map((hour) => (
              <Typography key={hour} variant="body2">
                {`${hour}:00 - ${hour + 1}:00`}
              </Typography>
            ))}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Schedule;
