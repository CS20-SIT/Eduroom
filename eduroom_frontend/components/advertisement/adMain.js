import React,{Fragment} from 'react';
import Generalnonav from '../../components/template/generalnonav';
import General from '../../components/template/general';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Addetail from './adDetail';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: '100%',
    },
  });

const Temp = () => {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return <General>
        
       <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab label="RECENTS">dw</Tab>
        <Tab  label="FAVORITES" ></Tab>
        <Tab  label="NEARBY" ></Tab>
        <Tab  label="HELP" ></Tab>
      </Tabs>
      
    </Paper>
    <TabPanel value={value} index={0}>
        Page One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Page Three
      </TabPanel>
      </General>
}
export default Temp