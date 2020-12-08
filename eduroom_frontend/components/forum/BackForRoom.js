import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import HomeIcon from '@material-ui/icons/Home';
import Link from "next/link";
import { Fragment } from 'react';
const BackForRoom = ({row}) => {
    const useStyles = makeStyles((theme) => ({
        link: {
          display: 'flex',
        },
        icon: {
          marginRight: theme.spacing(0.5),
          width: 20,
          height: 20,
        },
      }));
      
      function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
      const classes = useStyles()
      return(
        <Fragment>
        <div>
		{row?.map((el) => {
        return(
          <Breadcrumbs>
          <Link color="inherit" href="/forum" onClick={handleClick} className={classes.link}>
            {/* <HomeIcon className={classes.icon} /> */}
            forum
          </Link>  
          <Typography color="textPrimary" className={classes.link}>
               {/* <GrainIcon className={classes.icon} /> */}
                  {el.typename}
          </Typography>
           </Breadcrumbs>
            );
        })}
        </div>
        </Fragment>
        // <Link href={"/forum/"+row[0].data}>forum</Link>
        );
      
}
export default BackForRoom;