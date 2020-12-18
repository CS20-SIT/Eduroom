import React, { Fragment, useState, useEffect } from 'react'
import style from '../../styles/advertisement/ads';
import { withStyles, InputBase, Link, MenuItem, Select, Paper, Grid, FormControl, Typography} from '@material-ui/core'
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
  const [items, setItems] = React.useState([])
  const [value, setValue] = React.useState('Vertical Image')
  const [loading, setLoading] = React.useState(true)
  
  useEffect(() => {
		const fetchData = async () => {
			const res = await api.get('/api/ads/getAdsType')
			console.log(res.data)
			if (!unmounted) {
				setItems(res.data.map(({ typename }) => ({ label: typename, value: typename })))
				setLoading(false)
			}
		}
		fetchData()
		return () => {
			unmounted = true
		}
	}, [])
  const [adInfo, setadInfo] = useState({
    adtype: '',
    adstartdate: '',
    adexpiredate:'',
    adtag: '',
    contactemail: '',
    adimg: '',
  });
  
  const handleSubmit = async (e) => {
    const body = {
      adtype: adInfo.adtype,
      adstartdate: adInfo.adstartdate,
      adexpiredate: adInfo.adexpiredate,
      adtag: adInfo.adtag,
      contactemail: adInfo.contactemail,
      adimg: adInfo.adimg,
    }
    console.log(body);
    await api.post('/api/ads/addAds', body)
    router.push('/advertisement/adpayment')
  }

  return (
    <Fragment>
      <General>
        <div style={{ backgroundImage: `url('/images/big-bg.svg')`, backgroundSize: 'cover', paddingTop: '13%' }} >
          <Paper style={{ margin: '0% 5% 5% 5%' }}>
            <div style={{ marginLeft: '50px' }}>
              <div className="ad-ad-header" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                Information
            </div>
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
												name="domainName"
												value={value}
												onChange={(e) => {
													setValue(e.target.value)
													console.log('e is ', e.target.value)
												}}
												input={<BootstrapInput />}
											>
												{items.map(({ label, value }) => (
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
                      <Paper style={{ padding: 10, backgroundColor: '#EFF0F6' }}>
                        <form>
                          <InputBase
                            onChange={(e) =>
                              setadInfo({ ...adInfo, adtag: e.target.value })
                            }
                            name="adTag"
                            fullWidth
                            autoFocus
                            type={"text"}
                            placeholder={"Ad Tag"}
                            inputProps={{ 'aria-label': 'naked' }}

                          />
                        </form>
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
                          onChange={(e) =>
                            setadInfo({ ...adInfo, adimg: e.target.value })
                          }
                          name="imgLocation"
                          fullWidth
                          autoFocus
                          type={"file"}
                          placeholder={"attrach your ad img"}
                          inputProps={{ 'aria-label': 'naked' }}
                        />
                      </form>
                    </Paper>
                  </div>
                </Grid>

              </div>


              <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '50px' }}>
                <button
                  className="next-button"
                  onClick={handleSubmit}
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

