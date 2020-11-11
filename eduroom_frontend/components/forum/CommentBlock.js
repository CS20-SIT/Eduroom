import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const CommentBlock = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart",
      // textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={2} variant="outlined">
          <Grid item xs={12} style={{ marginTop: "5px", marginBottom: "10px" }}>
            <Paper className={classes.paper}>
              <div>
                <b>comment 1</b>
                <p>
                  {" "}
                  Loren gypsum dolor sit mate, ad prompts feud gait, quid
                  exercise emeritus bis e.Usu cu ores quid am, me rides sapper
                  croquet ex. Ed ea clit a elect ram referent,at diode imper
                  diet enc. Me sumo unique argument um no. Ea alien um accustoms
                  quo,mod summon effendi it tied. malia id per in minimum
                  facility, quid facet modifier ea ma. Ea alien um accustomsquo,
                  mod summon effendi it tied. Imus cause verier ea, grace
                  commode it tied. Idmes mover elect ram assertion has no. Ea
                  elite ague disco bequeath eons. Miniminterpretations man en.
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <style jsx>
        {`
          .comment {
            margin-top: 20px;
          }
        `}
      </style>
    </Fragment>
  );
};
export default CommentBlock;
