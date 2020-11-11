import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Course title
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="coursetitle"
            name="coursetitle"
            label="Course Title"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        
        <Typography variant="h6" gutterBottom>
        Course picture
      </Typography>
      <Grid item xs={12} >
          <TextField
            required
            id="choosepicture"
            name="choosepicture"
            label="Choose Picture"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Typography variant="h6" gutterBottom>
        Course video
      </Typography>
      <Grid item xs={12} >
          <TextField
            required
            id="choosevideo"
            name="choosevideo"
            label="Choose Video"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Typography variant="h6" gutterBottom>
        Subject
      </Typography>
      <Grid item xs={12} >
          <TextField
            required
            id="choosesubject"
            name="choosesubject"
            label="Choose Subject"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}