import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ConEach = (p) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardHeader
      
        action={
          <div><span>test</span><span>test</span></div> 
        }
        title= {p.title}
        // subheader=   {p.description}
      />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
           {p.title}
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
            {p.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Info
        </Button>
        <Button size="small" color="primary">
          Announcement
        </Button>
        <Button size="small" color="primary">
          Question
        </Button>
      </CardActions>
    </Card>
  );
}
export default ConEach;
