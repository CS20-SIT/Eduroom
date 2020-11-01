import React,{Fragment} from 'react'
import utils from '../../../../styles/course/utils';
import GeneralNoNav from '../../../../components/template/generalnonav';
import Link from 'next/link';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const CourseIDLesson = ({ courseDes, id }) => {

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
      const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
          height: 224,
        },
        tabs: {
          borderRight: `1px solid ${theme.palette.divider}`,
        },
    }));
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    var idx = 0;
    
    
    return (
        <Fragment>
            <GeneralNoNav>
            <div className='bg-tutor '>
                <Link href={`/course/${id}`}><span className='text-primary text-lg font-quicksand py-8 px-8 pointer'>Back</span></Link>
                <div className='container'>
                    <div className='my-2'>
                        <span className='text-xl text-navy font-quicksand'>Learn To Code With Python</span>
                        {/* <span>
                            <button className='text-md text-error font-quicksand bg-white border-red rounded-lg add-cart pointer'>Add to cart</button>
                        </span>
                        <span>
                            <button className='text-md text-white font-quicksand bg-error border-red rounded-lg buy pointer'>Buy</button>
                        </span> */}
                        <span className="share-icon pointer"><img alt="shareIcon" src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538636-share_512x512.png" width="20px" height="20px" ></img></span>
                        <div className='text-secondary font-quicksand mb-10'>{"Section "+`${courseDes[id-1].section[idx].id}`+" : " + `${courseDes[id-1].section[idx].name}`}</div>
                    </div>
                    <div className="my-8" height="500px">
                        <div className="inline-block">
                            <iframe className="" width="600" height="400" src="https://www.youtube.com/embed/jveH6adL5DY"></iframe>
                        
                        </div>
                        <div>
                        <div className={classes.root}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                        >
                            {courseDes[id-1].section.map((e, index) => (
                                idx = index,
                                // console.log(idx),
                                <Tab label={"Section "+`${courseDes[id-1].section[index].id}`+" : " + `${courseDes[id-1].section[index].name}`} {...a11yProps(0)} />
                            ))}
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            {courseDes[id-1].section[0].part[0].name}
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {courseDes[id-1].section[1].part[0].name}
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            {courseDes[id-1].section[2].part[0].name}
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            {courseDes[id-1].section[3].part[0].name}
                        </TabPanel>
    </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <style jsx>{utils}</style>
          </GeneralNoNav>
        </Fragment>
        );




        


}

export async function getServerSideProps(contex) {
    
    const id = contex.query.id;
    
    // GET /course/id/lesson
    const courseDes = [
    {
        id: 1,
        name: 'Learn To Code With Python',
        section: [
            {
                id: 1,
                name: 'Before start',
                part: [
                    {
                        id: 1,
                        name: 'Preview of course',
                        src: 'https://www.youtube.com/embed/6S58yvva978',
                    },
                ]
            },
            {
                id: 2,
                name: 'Basic of python',
                part: [
                    {
                        id: 1,
                        name: 'Basic',
                        src: 'https://www.youtube.com/embed/5Y-MghiDmQ4',
                    },
                ]
            },
            {
                id: 3,
                name: 'Datatype of value',
                part: [
                    {
                        id: 1,
                        name: 'Datatype',
                        src: 'https://www.youtube.com/embed/KrToaEvDzdk"',
                    },
                ]
            },
            {
                id: 4,
                name: 'Syntax & Error',
                part: [
                    {
                        id: 1,
                        name: 'Syntax',
                        src: 'https://www.youtube.com/embed/AGnECmJFA9U',
                    },
                ]
            },

        
        ],
    },
      {
        id: 1,
        name: 'Learn To Code With Python',
        section: [
            {
                id: 1,
                name: 'Before start',
                part: [
                    {
                        id: 1,
                        name: 'Preview of course',
                        src: 'https://www.youtube.com/embed/6S58yvva978',
                    },
                ]
            },
            {
                id: 2,
                name: 'Basic of python',
                part: [
                    {
                        id: 1,
                        name: 'Basic',
                        src: 'https://www.youtube.com/embed/5Y-MghiDmQ4',
                    },
                ]
            },
            {
                id: 3,
                name: 'Datatype of value',
                part: [
                    {
                        id: 1,
                        name: 'Datatype',
                        src: 'https://www.youtube.com/embed/KrToaEvDzdk"',
                    },
                ]
            },
            {
                id: 4,
                name: 'Syntax & Error',
                part: [
                    {
                        id: 1,
                        name: 'Syntax',
                        src: 'https://www.youtube.com/embed/AGnECmJFA9U',
                    },
                ]
            },

        
        ],
    },
      {
        id: 3,
        name: 'Learn To Code With Java',
        instructor: 'Bill Gates',
        price: 30,
        src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
      },
      {
        id: 4,
        name: 'Basic for Python',
        instructor: 'Bill Gates',
        price: 30,
        src: 'https://i2.wp.com/www.opensourceforu.com/wp-content/uploads/2019/08/PythonTools-Blockchain.jpg?fit=900%2C589&ssl=1',
      },
      {
        id: 5,
        name: 'Basic for C',
        instructor: 'Bill Gates',
        price: 30,
        src: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/13650/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png'
      },
      {
        id: 6,
        name: 'Basic for Java',
        instructor: 'Bill Gates',
        price: 30,
        src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
      },
    
    ];
    
    return {
      props: {
        courseDes,
        id,
      },
    };
}






  


export default CourseIDLesson