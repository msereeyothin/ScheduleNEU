import { Box, Button, Typography } from "@mui/material";
import Logo from "../assets/ScheduleNEULogo.svg";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "8%",
      }}
    >
      {/* Left side with description and buttons*/}
      <Box sx={{ width: "50%", padding: 10 }}>
        <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
          <Typography variant="h2" sx={{ fontSize: 40 }}>
            Simplify, Plan,&nbsp;
          </Typography>
          <Typography variant="h1" color="primary" sx={{ fontSize: 40 }}>
            Achieve
          </Typography>
        </Box>
        <Typography variant="h3">
          Say goodbye to slow and buggy search systems and ineffective, limited
          planners. Effortlessly organize your class schedule with ScheduleNEU.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{ width: "200px", height: "60px", borderRadius: "12px" }}
            onClick={() => navigate("/home")}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              width: "200px",
              height: "60px",
              borderRadius: "12px",
              marginLeft: 3,
            }}
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
        </Box>
      </Box>
      {/* Right side with logo */}
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Logo}
          alt="ScheduleNEU Logo"
          style={{ height: "50vh", marginRight: "5px" }}
        />
      </Box>
    </Box>
  );
}

export default Landing;
