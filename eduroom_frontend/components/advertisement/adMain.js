
import General from '../../components/template/general';
import React from 'react';
import PropTypes from 'prop-types';
import Tab1 from './adMainTab/tab1';
import Tab2 from './adMainTab/tab2';
import Tab3 from './adMainTab/tab3';
import Tab4 from './adMainTab/tab4';
import Tab5 from './adMainTab/tab5';
import { makeStyles, useTheme,createMuiTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import style from '../../styles/advertisement/ads';
import { useRouter } from 'next/router';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,

   
  },
}));

export default function FullWidthTabs() {
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <General>
      
     <Paper style = {{margin:"0% 5% 5% 5%", padding:"1.5%"}}>
     <div style={{backgroundColor:'#828282', height:'1.5px',marginTop:'46.4px',marginLeft:'2%',position:'absolute', width:'78%', opacity:'50%'}}></div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
        >
          
          <Tab label="Advertising" style={{fontWeight:'1000'}} {...a11yProps(0)} />
          <Tab label="How it works" style={{fontWeight:'1000'}} {...a11yProps(1)} />
          <Tab label="Condition" style={{fontWeight:'1000'}} {...a11yProps(2)} />
          <Tab label="Pricing" style={{fontWeight:'1000'}} {...a11yProps(3)} />
          <Tab label="Help" style={{fontWeight:'1000'}} {...a11yProps(4)} />
          <button
            className = "ad-ad-button"
            onClick={() => router.push('/login')}
          >
            <a className="ad-button-text">Start Now</a>
          </button>
          
       
        </Tabs>
       
   
      
        <TabPanel value={value} index={0} dir={theme.direction} >
          <Tab1/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Tab2/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
         <Tab3/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
         <Tab4/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
         <Tab5/>
        </TabPanel>
        </Paper>
        <style jsx>{style}</style>
    </General>
  );
}