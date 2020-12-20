import React, { Fragment, useState } from 'react'
import style from '../../../styles/advertisement/ads'
import { useRouter } from 'next/router';
import { Link, Typography, InputBase, Paper, Grid, List } from '@material-ui/core'
import api from "../../../api";



const Content = () => {
  const router = useRouter();
  const [couponInfo, setcouponInfo] = useState({
    codename: '',
    description: '',
    discount: 0,
    duration: 0,
    minprice: 0,
    coinprice: 0,
    uselimit: 0,
    img: null,
    codetype:'',

  });

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
        codetype: couponInfo.codetype,
      }

      console.log(body);
      handleSubmit(body);
    } catch (err) { }

  }
  const handleSubmit = async (body) => {
    try {
      const response = await api.post('/api/coupon/CreateCodeForSale', body)
      console.log('success')
      props.complete()
    } catch (err) { }
  }
  return (

    <div>
      <div className="ad-ad-header" style={{ marginLeft: "43%" }}><h3>create code</h3></div>
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
                  placeholder={"codename"}
                  inputProps={{ 'aria-label': 'naked' }}
                />
              </form>
            </Paper>
            </Grid>
            <Grid item xs={6} style={{marginLeft:"-10%"}}>Discount
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
          <Grid item xs={6} >Use limit
            <Paper style={{ padding: 10, backgroundColor: '#EFF0F6', width: "60%", marginTop: "1%" }}>
              <form>
                <InputBase
                  onChange={(e) =>
                    setcouponInfo({ ...couponInfo, uselimit: e.target.value })
                  }
                  name="uselimit"
                  fullWidth
                  autoFocus
                  type={"number"}
                  placeholder={"use limit"}
                  inputProps={{ 'aria-label': 'naked' }}
                />
              </form>
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
            CodeType
                      <Paper style={{ padding: 10, backgroundColor: '#EFF0F6', width: "60%", marginTop: "1%" }}>
              <form>
                <InputBase
                  onChange={(e) =>
                    setcouponInfo({ ...couponInfo, codetype: e.target.value })
                  }
                  name="codetype"
                  fullWidth
                  autoFocus
                  type={"text"}
                  placeholder={"code type"}
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