import { Box, Button, Typography, useTheme } from "@mui/material";
import homePage from "../assets/homePage.png";
import { useNavigate } from "react-router-dom";

function About() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "87vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Left side */}
      <Box
        sx={{
          width: "40%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            padding: 15,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" sx={{ alignSelf: "flex-start" }}>
            How To Use ScheduleNEU
          </Typography>
          <ol style={{ marginTop: 40 }}>
            <Typography variant="h3">
              <li>Create A Plan</li>
            </Typography>
            <Typography>  
              Use the "Create Plan" Button to add a new plan. Give your plan a
              name, select your term and campus, and press add.
            </Typography>
            <Typography variant="h3" sx={{ marginTop: 3 }}>
              <li>Add Your Courses</li>
            </Typography>
            <Typography>
              Press the "Add Course" Button to start adding courses to your
              plan. You can search a course by the course name, such as "first
              year writing", or by the course code, like "ENGW1111".
            </Typography>
            <Typography variant="h3" sx={{ marginTop: 3 }}>
              <li>Build Your Schedule</li>
            </Typography>
            <Typography>
              Start building your schedule! Click the drop down arrow to see all
              the sections, and click on your desired section to add it to the
              schedule.
            </Typography>
          </ol>
          <Button
            variant="contained"
            size="large"
            sx={{
              width: "200px",
              height: "60px",
              borderRadius: "12px",
              marginTop: 3,
            }}
            onClick={() => navigate("/home")}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      {/* Right side */}
      <Box
        sx={{
          width: "60%",
          height: "100%",
          padding: "20px",
          backgroundColor: theme.palette.background.default,
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            marginTop: "3vw",
            marginLeft: "2vw",
          }}
        >
          <img
            src={homePage}
            alt="home page"
            style={{
              width: "100%",
              height: "auto",
              border: "2px solid black",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default About;
