import React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#FFFFFF',
      darker: '#FFFFFF',
    },
    neutral: {
      main: 'white',
      contrastText: 'white',
    },
  },
});




function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Are you ready for the future? We are building a Schrodinger's fintech - It both exists and does not.
        </p>
        <p>
          Curious?
        </p>
        <p>
          Join the waitlist and witness the magic unfold.
        </p>
        <p></p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
        <ThemeProvider theme={theme}>
        <TextField
        sx={{
          "& .MuiInputLabel-root": {color: 'white'},//styles the label
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
          },
        }}
  id="email-input"
  variant="outlined"
  placeholder='Email'
  type="email"
  color="primary"
  InputProps={{
    style: {
        color: "white"
    }
}}
  inputMode="email"
/>
</ThemeProvider>  
          <Button 
          style={{
            borderRadius: 35,
            backgroundColor: "#21b6ae",
            padding: "15px 30px",
            fontSize: "15px"
        }}
          variant="contained">Waitlist</Button>
        </div>
      </header>
    </div>
  );
}

export default Home;
