import React from 'react';
import './Fintechhaikus.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

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


function Fintechhaikus() {
  return (
    <div className="Fintechhaikus">
      <header className="Fintechhaikus-header">
        <h1>
          Fintech Haikus
        </h1>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard (API)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica (API)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share (Action)
        </Button>
      </CardActions>
    </Card>
    <p></p>
    <Button 
          style={{
            borderRadius: 35,
            backgroundColor: "#2B313C",
            padding: "10px 20px",
            fontSize: "10px"
        }}
          variant="contained">Generate new (Action)</Button>
        <p>
          {'Subscribe for new updates: \n '}
        </p>
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
            backgroundColor: "#2B313C",
            padding: "10px 20px",
            fontSize: "10px"
        }}
          variant="contained" >Submit (Action)</Button>
        </div>
        <p> {' \n '}</p>
      </header>
    </div>
  );
}

export default Fintechhaikus