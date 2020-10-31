import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


import General from '../template/general'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Content = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  return (
    <Fragment>
      <General>
      <Card className={classes.root} >
      <CardContent>
       
      </CardContent>
     
    </Card>
      </General>
    </Fragment>
  )
}
export default Content

