import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { authAPI } from "../api/auth.api";

const AuthComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      await authAPI.register(username, password);
      setMessage("Registration successful");
    } catch (error) {
      setMessage("Registration failed");
      console.error("Registration failed:", error);
    }
  };

  const handleLogin = async () => {
    try {
      await authAPI.login(username, password);
      setMessage("Login successful");
    } catch (error) {
      setMessage("Login failed");
      console.error("Login failed:", error);
    }
  };

  return (
    <Box sx={{ padding: "2vh" }}>
      <Typography variant="h4">Register / Login</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Box sx={{ marginTop: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegister}
          sx={{ marginRight: 2 }}
        >
          Register
        </Button>
        <Button variant="contained" color="secondary" onClick={handleLogin}>
          Login
        </Button>
      </Box>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        {message}
      </Typography>
    </Box>
  );
};

export default AuthComponent;
