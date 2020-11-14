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
const useStyles = makeStyles({
  root: {
    marginLeft: "2",
    marginBottom: "2.5%",
    maxWidth: "85%",
  },
});

const ConEach = (p) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          action={
            <div>
              <span>{p.starttime} </span>
              <span>{p.endtime}</span>
            </div>
          }
          title={p.title}
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
        <Button
          size="small"
          color="primary"
          onClick={() => {
            router.push(`/admin/grader/contest/${p.id}/announcement`);
          }}
        >
          info
        </Button>
        <Link href="/admin/grader/contest/announcement">Announcement</Link>
        <Button size="small" color="primary">
          <Link href="/admin/grader/contest/announcement">question</Link>
        </Button>
      </CardActions>
    </Card>
  );
};
export default ConEach;
