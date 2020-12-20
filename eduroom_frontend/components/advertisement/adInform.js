import React, { Fragment, useState, useEffect } from 'react'
import style from '../../styles/advertisement/ads';
import { withStyles, InputBase, Link, MenuItem, Select, Paper, Grid, FormControl, Typography,image } from '@material-ui/core'
import General from '../template/general'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router';


import api from "../../api";


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 0,
    position: 'relative',
    backgroundColor: '#EFF0F6',
    border: '0px solid #ced4da',
    fontSize: 16,
    padding: '18px 36px 18px 22px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 0,
    },
  },
}))(InputBase)

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
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
})

const Content = () => {
  let unmounted = false
  const classes = useStyles()
  const router = useRouter();
  const [typeItems, setTypeItems] = React.useState([])
  const [tagItems, setTagsItems] = React.useState([])
  const [adType, setAdType] = React.useState('Vertical Image')
  const [adTag, setAdTag] = React.useState('Education')
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await api.get('/api/ads/getAdsType')
      console.log(res1.data)
      if (!unmounted) {
        setTypeItems(res1.data.map(({ typename }) => ({ label: typename, value: typename })))
        setLoading(false)
      }
      const res2 = await api.get('/api/ads/getAdsTags')
      console.log(res2.data)
      if (!unmounted) {
        setTagsItems(res2.data.map(({ tagname }) => ({ label: tagname, value: tagname})))
        setLoading(false)
      }
    }
    fetchData()
    return () => {
      unmounted = true
    }
  }, [])
  const [adInfo, setadInfo] = useState({
    adstartdate: '',
    adexpiredate: '',
    contactemail: '',
    adimg: null,
  });

  const changeAdsPic = (e) => {
    let newValue = e.target.files[0]
    setadInfo({ ...adInfo, adimg: newValue })

  }

  const handleClick = async () => {
    setLoading(true)
    try {
      const myForm = new FormData()
      myForm.append('ads-img', adInfo.adimg)
      const res = await api.post('/api/ads/upload/picture', myForm)
      const body = {
        adtype: adType,
        adstartdate: adInfo.adstartdate,
        adexpiredate: adInfo.adexpiredate,
        adtag: adTag,
        contactemail: adInfo.contactemail,
        // adimg: adInfo.adimg,
        adimg: res.data[0].linkUrl,
        
      }

      console.log(body);
      handleSubmit(body);
    } catch (err) { }

  }
  const handleSubmit = async (body) => {
		try {
      const response = await api.post('/api/ads/addAds', body)
      console.log('success')
      router.push('/advertisement/adpayment')
			setLoading(false)
			props.complete()
		} catch (err) {}
		setLoading(false)
	}

  return (
    <Fragment>
      <General>
        <div style={{ backgroundImage: `url('/images/big-bg.svg')`, backgroundSize: 'cover', paddingTop: '13%' }} >
          <Paper style={{ margin: '0% 5% 5% 5%' }}>
            <div style={{ marginLeft: '50px' }}>
            <Grid container spacing={3}>
              <Grid item xs={6}><div className="ad-ad-header" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                Information
            </div></Grid>
            <Grid item xs={6}><div className="ad-ad-header" style={{ paddingTop: '50px', paddingBottom: '50px', marginLeft:"60%" }}>
              <Link href="../advertisement/adpayment">Go to cart
              <img src="https://www.flaticon.com/svg/static/icons/svg/879/879815.svg" style={{width:"50px"}}></img>
              </Link></div></Grid>
              </Grid>
              <div >
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <div>
                      <a className='ad-topic'>Ad Type</a>
                      <Paper style={{ padding: 0, backgroundColor: '#EFF0F6' }}>
                        <FormControl fullWidth className={classes.margin}>
                          <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            disabled={loading}
                            name="adType"
                            value={adType}
                            onChange={(e) => {
                              setAdType(e.target.value)
                              console.log('e is ', e.target.value)
                            }}
                            input={<BootstrapInput />}
                          >
                            {typeItems.map(({ label, value }) => (
                              <MenuItem key={value} value={value}>
                                {label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Paper>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div >
                      <a className='ad-topic'>Ad Start Date</a>
                      <Paper style={{ marginLeft: '5px', padding: 10, backgroundColor: '#EFF0F6' }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, adstartdate: e.target.value })
                            }
                            name="startdate"
                            fullWidth
                            autoFocus
                            type={"datetime-local"}
                            placeholder={"start date"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <div>
                      <a className='ad-topic'>Ad tag</a>
                      <Paper style={{ padding: 0, backgroundColor: '#EFF0F6' }}>
                      <FormControl fullWidth className={classes.margin}>
                          <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            disabled={loading}
                            name="adTag"
                            value={adTag}
                            onChange={(e) => {
                              setAdTag(e.target.value)
                              console.log('e is ', e.target.value)
                            }}
                            input={<BootstrapInput />}
                          >
                            {tagItems.map(({ label, value }) => (
                              <MenuItem key={value} value={value}>
                                {label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Paper>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div>
                      <a className='ad-topic'>Ad expire Date</a>
                      <Paper style={{ padding: 10, backgroundColor: '#EFF0F6' }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, adexpiredate: e.target.value })
                            }
                            name="expiredate"
                            fullWidth
                            autoFocus
                            type={"datetime-local"}
                            placeholder={"expire date"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
                    </div>
                  </Grid>

                </Grid>
              </div>
              <div>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <div>
                      <a className='ad-topic'>Contact Email</a>
                      <Paper style={{ marginTop: '5px', padding: 10, backgroundColor: '#EFF0F6' }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, contactemail: e.target.value })
                            }
                            name="contactEmail"
                            fullWidth
                            autoFocus
                            type={"email"}
                            placeholder={"Your Contact email"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="img-spaceship">
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid item xs={4}>
                  <div style={{ marginTop: '100px' }}>
                    <a className='ad-topic'>Ad image</a>
                    <Paper style={{ padding: 10, backgroundColor: '#EFF0F6' }}>
                      <form>
                        <InputBase
                          onChange={changeAdsPic}
                          accept="image/*"
                          name="imgLocation"
                          fullWidth
                          autoFocus
                          type={"file"}
                          placeholder={"attrach your ad img"}
                          inputProps={{ 'aria-label': 'naked' }}
                        />
                      </form>
                    </Paper>
                   
                    <img src={adInfo.adimg? URL.createObjectURL(adInfo.adimg) : null} alt={adInfo.adimg? adInfo.adimg.name : null} style={{width:'50%',marginTop:'10px'}}/>
                    
                  </div>
                </Grid>

              </div>


              <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '50px' }}>
                <button
                  className="next-button"
                  onClick={handleClick}
                >
                  <a className="ad-button-text">Submit</a>
                </button>
              </div>
            </div>
          </Paper>


        </div>
        <style jsx>
          {style}
        </style>
      </General>

    </Fragment>
  )
}
export default Content

