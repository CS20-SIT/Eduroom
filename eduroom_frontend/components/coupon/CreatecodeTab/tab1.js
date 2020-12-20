import React, { Fragment, useState, useEffect } from 'react'
import style from '../../../styles/advertisement/ads'
import { useRouter } from 'next/router';
import { withStyles, InputBase, Link, MenuItem, Select, Paper, Grid, FormControl } from '@material-ui/core'
import api from "../../../api";
import { makeStyles } from '@material-ui/core/styles'


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
  const [showCoinPrice,setshowCoinPrice] = React.useState(false)
  const [showUseLimit,setshowUseLimit] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [typeItems, setTypeItems] = React.useState([])
  const [couponType, setcouponType] = React.useState('Public')
  const router = useRouter();
  const classes = useStyles()
  const [couponInfo, setcouponInfo] = useState({
    codename: '',
    description: '',
    discount: 0,
    duration: 0,
    minprice: 0,
    coinprice: 0,
    uselimit: 0,
    img: null,
    codetype: '',

  });
  useEffect(() => {
    const fetchData = async () => {
      const res1 = await api.get('/api/coupon/GetCodeType')
      console.log(res1.data)
      if (!unmounted) {
        setTypeItems(res1.data.map(({ codetype }) => ({ label: codetype, value: codetype })))
        setLoading(false)
      }
    }
    fetchData()
    return () => {
      unmounted = true
    }
  }, [])

  const changeCouponPic = (e) => {
    let newValue = e.target.files[0]
    setcouponInfo({ ...couponInfo, img: newValue })
  }
  

  const handleClick = async () => {
    try {
      const myForm = new FormData()
      myForm.append('coupon-img', couponInfo.img)
      const res = await api.post('/api/coupon/upload/picture', myForm)
      console.log(res)
      const body = {
        codename: couponInfo.codename,
        description: couponInfo.description,
        discount: couponInfo.discount,
        duration: couponInfo.duration,
        minprice: couponInfo.minprice,
        coinprice: couponInfo.coinprice,
        uselimit: couponInfo.uselimit,
        img: res.data[0].linkUrl,
        codetype: couponType,
      }
      console.log(body);
      handleSubmit(body);
    } catch (err) { }

  }
  const handleSubmit = async (body) => {
    try {
      const response = await api.post('/api/coupon/CreateCodeForSale', body)
      console.log('success')
      window.location.reload(false);
      window.scrollTo(0, 0);
      props.complete()
    } catch (err) { }
  }
  return (

    <div>
      <div className="ad-ad-header" style={{ marginLeft: "43%" }}><h3>Create Code</h3></div>
      <div className="ad-ad-description" style={{ margin: "-2% 0% 1% 20%" }}>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid item xs={6} >Codename
            <Paper style={{ padding: 10, backgroundColor: '#EFF0F6', width: "60%", marginTop: "1%" }}>
              <form>
                <InputBase
                  onChange={(e) =>
                    setcouponInfo({ ...couponInfo, codename: e.target.value })
                  }
                  name="codename"
                  fullWidth
                  autoFocus
                  type={"text"}
                  placeholder={"Codename"}
                  inputProps={{ 'aria-label': 'naked' }}
                />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={6} style={{ marginLeft: "-10%" }}>Discount
            <Paper style={{ padding: 10, backgroundColor: '#EFF0F6', width: "60%", marginTop: "1%" }}>
              <form>
                <InputBase
                  onChange={(e) =>
                    setcouponInfo({ ...couponInfo, discount: e.target.value })
                  }
                  name="discount"
                  fullWidth
                  autoFocus
                  type={"Number"}
                  placeholder={"Discount %"}
                  inputProps={{ 'aria-label': 'naked' }}
                />
              </form>
            </Paper>
          </Grid>
        </Grid>
        Description
                      <Paper style={{ padding: 10, backgroundColor: '#EFF0F6', width: "70%", marginTop: "1%" }}>
          <form>
            <InputBase
              onChange={(e) =>
                setcouponInfo({ ...couponInfo, description: e.target.value })
              }
              name="description"
              fullWidth
              autoFocus
              type={"text"}
              placeholder={"Description"}
              inputProps={{ 'aria-label': 'naked' }}
            />
          </form>
        </Paper>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid item xs={6} > CodeType
            <Paper style={{ padding: 0, backgroundColor: '#EFF0F6', width: "60%", marginTop: "1%" }}>
              <FormControl fullWidth className={classes.margin}>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  disabled={loading}
                  name="couponType"
                  value={couponType}
                  onChange={(e) => {
                    setcouponType(e.target.value)
                    console.log('e is ', e.target.value)
                    
                    if(e.target.value == 'Public'){
                      setshowUseLimit(false)
                      setshowCoinPrice(false)
                    }else if(e.target.value == 'Limited Public'){
                      setshowUseLimit(true)
                      setshowCoinPrice(false)
                    }else{
                      setshowUseLimit(false)
                      setshowCoinPrice(true)
                    }
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
            Duration
                      <Paper style={{ padding: 10, backgroundColor: '#EFF0F6', width: "60%", marginTop: "1%" }}>
              <form>
                <InputBase
                  onChange={(e) =>
                    setcouponInfo({ ...couponInfo, duration: e.target.value })
                  }
                  name="duration"
                  fullWidth
                  autoFocus
                  type={"number"}
                  placeholder={"Duration day(s)"}
                  inputProps={{ 'aria-label': 'naked' }}
                />
              </form>
            </Paper>
            Minimum Price
                      <Paper style={{ padding: 10, backgroundColor: '#EFF0F6', width: "60%", marginTop: "1%" }}>
              <form>
                <InputBase
                  onChange={(e) =>
                    setcouponInfo({ ...couponInfo, minprice: e.target.value })
                  }
                  name="minimumPrice"
                  fullWidth
                  autoFocus
                  type={"number"}
                  placeholder={"Minimum Price"}
                  inputProps={{ 'aria-label': 'naked' }}
                />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={6} style={{ marginLeft: "-10%" }}>Coin Price
            <Paper style={{ padding: 10, backgroundColor: '#EFF0F6', width: "60%", marginTop: "1%" }}>
              <form>
                <InputBase
                  disabled={!showCoinPrice}
                  onChange={(e) =>
                    setcouponInfo({ ...couponInfo, coinprice: e.target.value })
                  }
                  name="coinprice"
                  fullWidth
                  autoFocus
                  type={"number"}
                  placeholder={"Coin Price"}
                  inputProps={{ 'aria-label': 'naked' }}
                />
              </form>
            </Paper>
            Code Picture
                      <Paper style={{ padding: 10, backgroundColor: '#EFF0F6', width: "60%", marginTop: "1%" }}>
              <form>
                <InputBase
                  onChange={changeCouponPic}
                  accept="image/*"
                  name="couponimg"
                  fullWidth
                  autoFocus
                  type={"file"}
                  placeholder={"attrach your ad img"}
                  inputProps={{ 'aria-label': 'naked' }}
                />
              </form>
            </Paper>
            Use limit
            <Paper style={{ padding: 10, backgroundColor: '#EFF0F6', width: "60%", marginTop: "1%" }}>
              <form>
                <InputBase
                  disabled={!showUseLimit}
                  onChange={(e) =>
                    setcouponInfo({ ...couponInfo, uselimit: e.target.value })
                  }
                  name="uselimit"
                  fullWidth
                  autoFocus
                  type={"number"}
                  placeholder={"Use limit"}
                  inputProps={{ 'aria-label': 'naked' }}
                />
              </form>
            </Paper>
          </Grid>
        </Grid>
        <div style={{ marginLeft: '-30%', marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '50px' }}>
          <button
            className="next-button"
            onClick={handleClick}
          >
            <a className="ad-button-text">Submit</a>
          </button>
        </div>
      </div>
      <style jsx>
        {style}
      </style>
    </div>




  )
}
export default Content