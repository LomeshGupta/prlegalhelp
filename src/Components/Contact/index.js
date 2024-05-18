import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CssBaseline from '@mui/material/CssBaseline';

const ContactFormCard = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phone: '',
    message: '',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({ ...formData, [name]: value || checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Logging form data
    // Add your form submission logic here
    // Reset form fields
    setFormData({
      userName: '',
      email: '',
      phone: '',
      message: '',
      subscribe: false
    });
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', width: '80%', margin: 'auto', marginTop: 8, marginBottom: 8 }}>
      <CardContent>
        <CssBaseline />
        <Typography variant="h4" gutterBottom>
          Send a Message
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1} padding="20px">
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="name"
                label="Name"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="message"
                label="Tell us how we can help (Message)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox checked={formData.subscribe} onChange={handleChange} name="subscribe" color="primary" />}
                label="Free useful legal news and information for creative businesses sent every month? Sign me up!"
              />
            </Grid>
          </Grid>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#000",
                "&:hover": {
                  backgroundColor: "#996515",
                },
                fontSize:"17px",
                width:"30%",
                margin:"40px"
              }}
            >
              Talk to Us
            </Button>
          </CardActions>
        </form>
      </CardContent>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Reach Out
        </Typography>
        <br></br>
        <Typography variant="h6" gutterBottom>
        If you made it this far, you’re our type of person. Let’s talk.
        </Typography>
        <br></br>
        <Typography variant="body1" gutterBottom>
          Email: info@prlegalhelp.com
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: +91-9718516363
        </Typography>
        <Typography variant="h5" gutterBottom>
          Address
        </Typography>
        <Typography variant="body1" gutterBottom>
        Office no 506 ,5th floor Ansal majistic tower , Ak market ,Vikaspuri. New Delhi-110019
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContactFormCard;
