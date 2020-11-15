import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Link from "next/link";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
const useStyles = makeStyles({
  root: {
    marginLeft: "2",
    marginBottom: "2.5%",
    maxWidth: "90%",
  },
  card: {
    borderRadius: "15px",
    marginLeft: "2",
    marginBottom: "2.5%",
    maxWidth: "90%",
    transition: "0.3s",
    // boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      // boxShadow: "0 16px 30px -12.125px rgba(0,0,0,0.3)",
      border: "2.5px solid #3d467f",
    },
  },
  title: {
    marginLeft: 20,
    fontFamily: "Quicksand , sans-serif",
    fontSize: "2.25em",
    color: "#3d467f",
    fontWeight: "bold",
  },
  body: {
    marginLeft: 20,
    fontFamily: "Quicksand , sans-serif",
    fontSize: "1.25em",
    color: "#3d467f",
    fontWeight: "600",
  },
  content: {
    textAlign: "left",
    // padding: theme.spacing(3),
  },

  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  action: {
    marginLeft: 20,
    marginBottom: 5,
  },
  Button: {
    "&:hover": {
      background: "rgba(243, 154, 196, 0.3)",
    },
    borderRadius: "5em",
  },
  buttonText: {
    fontFamily: "Quicksand , sans-serif",
    color: "#3d467f",
    fontWeight: "bold",
    fontSize: "1.2em",
    "&:hover": {
      color: "rgba(243, 154, 196)",
    },
    paddingLeft: 4,
    paddingRight: 4,
  },
});
const sInput = {
  fontFamily: "Quicksand , sans-serif",
  color: "#3d467f",
  fontWeight: "bold",
  fontSize: "1.2em",
};

const ConEach = (p) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Grid container direction="row" spacing={3}>
            <Grid item sm={6}>
              <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {p.title}
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <Chip
                label={p.starttime}
                style={{
                  marginTop: 5,
                  marginLeft: "18%",
                  backgroundColor: "#FC8FC3",
                  marginBottom: 10,
                  color: "white",
                  height: 25,
                  width: "38%",
                  "font-family": "Quicksand , sans-serif",
                  "font-size": "0.8em",
                  "font-weight": "bold",
                }}
              />
              <Chip
                label={p.endtime}
                style={{
                  marginTop: 5,
                  marginLeft: 10,
                  backgroundColor: "#8CC0EA",
                  marginBottom: 10,
                  color: "white",
                  height: 25,
                  width: "38%",
                  "font-family": "Quicksand , sans-serif",
                  "font-size": "0.8em",
                  "font-weight": "bold",
                }}
              />
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            className={classes.body}
            gutterBottom
            color="textSecondary"
            component="p"
          >
            Let manage elements in contest by click the button below!
            {/* {p.description} */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <Button
          className={classes.Button}
          size="small"
          onClick={() => {
            router.push(`/admin/grader/contest/${p.id}/info`);
          }}
        >
          <span className={classes.buttonText}>info </span>
        </Button>
        <Button
          className={classes.Button}
          size="small"
          onClick={() => {
            router.push(`/admin/grader/contest/${p.id}/announcement`);
          }}
        >
          <span className={classes.buttonText}>Announcement </span>
        </Button>
        <Button
          className={classes.Button}
          size="small"
          onClick={() => {
            router.push(`/admin/grader/contest/${p.id}/question`);
          }}
        >
          <span className={classes.buttonText}>question </span>
        </Button>
      </CardActions>
    </Card>
  );
};
export default ConEach;
//        <CardHeader
// action={
//   <div>
//     <span>{p.starttime} </span>
//     <span>{p.endtime}</span>
//   </div>
// }
// title={p.title}
// subheader=   {p.description}
// />
