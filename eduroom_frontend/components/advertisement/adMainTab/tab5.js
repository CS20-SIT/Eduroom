import React from 'react'
import style from '../../../styles/advertisement/ads';
import { Grid, List, ListItem, ListItemIcon, ListItemText, Collapse, ListSubheader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


const Content = () => {
  
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };

  return (
    <div>
      <div style={{ marginLeft: '40px', marginTop: '10px' }}>
        <a className="ad-ad-header">
          Need help getting started?
            </a>
        <br></br>
        <div style={{ marginTop: '15px' }}>
          <a >Here are a few resources to point you in the right direction.
                </a>
        </div>
        <br></br>

        <a className="ad-ad-header">
          FAQs
            </a>
        
        <MuiThemeProvider>
          <List className={classes.root}>
            <Grid >
              <Grid container spacing={2} direction="column" justify="space-around" alignItems="stretch">
                  <Grid item xs={12} >
                    <Paper>
                      <ListItem button onClick={handleClick1}  >
                        <ListItemText primary={<a className="ad-faq">topic1</a>} />
                        {open1 ? <img src={'https://www.flaticon.com/svg/static/icons/svg/566/566015.svg'} width="18" height="18" /> :
                          <img src={'https://www.flaticon.com/svg/static/icons/svg/566/566014.svg '} width="18" height="18" />}
                      </ListItem>
                    </Paper>
                    <Collapse in={open1} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem className={classes.nested}>
                          test1
                      </ListItem>
                      </List>
                    </Collapse>
                  </Grid>
                  <Grid item xs={12} >
                    <Paper>
                      <ListItem button onClick={handleClick2}  >
                        <ListItemText primary={<a className="ad-faq">topic2</a>} />
                        {open2 ? <img src={'https://www.flaticon.com/svg/static/icons/svg/566/566015.svg'} width="18" height="18" /> :
                          <img src={'https://www.flaticon.com/svg/static/icons/svg/566/566014.svg '} width="18" height="18" />}
                      </ListItem>
                    </Paper>
                    <Collapse in={open2} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem className={classes.nested}>
                          test2
                      </ListItem>
                      </List>
                    </Collapse>
                  </Grid>
                  <Grid item xs={12} >
                    <Paper>
                      <ListItem button onClick={handleClick3}  >
                        <ListItemText primary={<a className="ad-faq">topic3</a>} />
                        {open3 ? <img src={'https://www.flaticon.com/svg/static/icons/svg/566/566015.svg'} width="18" height="18" /> :
                          <img src={'https://www.flaticon.com/svg/static/icons/svg/566/566014.svg '} width="18" height="18" />}
                      </ListItem>
                    </Paper>
                    <Collapse in={open3} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem className={classes.nested}>
                         if you would like to see the ad status <br></br>
                         you need to pay for the ads first.<br></br>
                         if you would like to see the ad status <br></br>
                         you need to pay for the ads first.<br></br>
                         if you would like to see the ad status <br></br>
                         you need to pay for the ads first.<br></br>
                         if you would like to see the ad statusif you would like to see the ad statusif you would like to see the ad statusif you would like to see the ad status <br></br>
                         you need to pay for the ads first.<br></br>
                      </ListItem>
                      </List>
                    </Collapse>
                  </Grid>
                </Grid>
              </Grid>
              
          </List>

        </MuiThemeProvider>

        <style jsx>
          {style}
        </style>
      </div>
    </div>

  )
}
export default Content