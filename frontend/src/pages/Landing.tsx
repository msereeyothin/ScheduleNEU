import { Box, Button, Typography } from "@mui/material";
import Logo from "../assets/ScheduleNU_Logo_01_Artboard_2.svg";
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();
    return (
        <Box sx={{ display: "flex", flexDirection: "row", padding: 15 }}>
            <Box sx={{ width: "50%" }}>
                <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                    <Typography variant="h2" sx={{ fontSize: 40 }}>
                        Simplify, Plan,&nbsp;
                    </Typography>
                    <Typography variant="h1" color="primary" sx={{ fontSize: 40 }}>
                        Achieve
                    </Typography>
                </Box>
                <Typography variant="subtitle1">
                    Say goodbye to slow and buggy search systems and ineffective, limited
                    planners. Effortlessly organize your class schedule with ScheduleNEU
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
                        <Typography variant="button">Get Started</Typography>
                    </Button>
                </Box>
            </Box>
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
                    style={{ height: "25vw", marginRight: "5px" }}
                />
            </Box>
        </Box>
    );
}

export default Landing;