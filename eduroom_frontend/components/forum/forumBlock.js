import React,{Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useRouter} from "next/router";

const forumBlock = (props) => {
  
  // const [create, setCreate] = useState('');
  const router = useRouter()
  const handleClick = (e) =>{
    e.preventDefault()
    router.push("/forum/id")
  };
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
    const classes = useStyles();  
    return (
        <Fragment>
            <div className={classes.root}  className='button' >
                <Grid container spacing={3} onClick={handleClick} variant="outlined">
                    <Grid item xs={12}>
                       <Paper className={classes.paper} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                         
                         <div>

                         {props.createForm}
                         </div>
                       <div className='like' style={{position: 'absolute', bottom: 0, right: 0, margin: '8pxç'}}>
                        <img src="/images/forum/like_black.svg"></img>
                       </div>
                       </Paper>
                       
                    </Grid>
                </Grid>
            </div>
            <style jsx> 
            {`
            .button{
            cursor: pointer;
            opacity: 0.8;
            transition: 0.25s;
            display: flex;
              justify-content: end;
              flex-direction: row;
              align-items: flex-end;
            }
            .like{
              display: flex;
              justify-content: end;
              flex-direction: row;
              align-items: flex-end;
              
            }
            `}
            </style>
     </Fragment>)
};
export default forumBlock