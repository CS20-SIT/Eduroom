import React, { Fragment, useState, useEffect } from 'react'
import style from '../../styles/advertisement/ads';
import { Button, Slide, DialogTitle, DialogContentText, DialogContent, DialogActions, Paper, Grid, Dialog,Link } from '@material-ui/core'
import General from '../template/general'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router';


import api from "../../api";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Total = props => {
    return (
        <div>
            <Paper style={{ margin: '5% 5% 5% 25%', height: '150px', width: '45%', padding: '17px', paddingTop: '15px', position: 'absolute', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '10px' }}>
                <Grid container spacing={'2'}>
                    <Grid item xs={'1'}>
                        <a className="ad-owner">Total:</a>
                    </Grid>
                    <Grid item xs={'3'}>
                        <a className="ad-id">฿{props.totalPrice}</a>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container spacing={'2'}>
                    <Grid item xs={4}>
                        <a className="ad-description">Numbers of ads: {props.numberOfads}</a>
                    </Grid>
                    <Grid item xs style={{ marginLeft: '40%' }}>
                        <button className="ad-check-out-button"><a className="ad-check-out-button-text">Check Out</a></button>
                    </Grid>
                </Grid>
            </Paper>
            <style jsx>
                {style}
            </style>
        </div>
    )
}
const Box = props => {
   
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async () => {
        const body = {
            adid: props.adid,
        }
        const response = await api.post('/api/ads/deleteAds', body)
        console.log(response)
        handleClose()
        window.location.reload(false);
        window.scrollTo(0,0);
        
    }
    return (
        <div>
            <Link href="../advertisement/adinform"><Paper style={{marginLeft:"75%",padding:" 0.5% 0% 0.5% 1.5%",
    borderRadius: "10px",
    width: "15%"}}>create new ADs</Paper></Link>
            <Paper style={{ margin: '2% 5% 3% 10%', height: '150px', width: '80%', padding: '17px', paddingTop: '15px', borderRadius: '10px' }}>
                <Grid container spacing={'2'}>
                    <Grid item>
                        <div style={{ height: '120px', width: '120px', marginLeft: '2%' }}>
                            <img style={{ height: '100%', width: '100%' }} src={props.img}></img>
                        </div>
                    </Grid>
                    <Grid item xs={'4'}>
                        <a className="ad-id">Advertisement ID#{props.adid}</a><br></br>
                        <a className="ad-owner">by {props.firstname} {props.lastname}</a><br></br>
                        <a className="ad-description">StartDate: {props.adstarttime.substring(0, 10)} EndDate: {props.adexpiretime.substring(0, 10)}</a>
                    </Grid>
                    <Grid item xs style={{ marginLeft: '10%' }}>
                        <button className="ad-remove-button" onClick={handleClickOpen}><a className="ad-button-text">Remove</a></button>
                    </Grid>
                    <Grid item xs style={{ marginLeft: '10%' }}>
                        <a className="ad-price">฿{props.price}</a>
                    </Grid>
                </Grid>

            </Paper>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle ><center><a className="ad-id">Warning !</a><br></br></center></DialogTitle>
                <DialogContent>
                    <DialogContentText className="ad-dialog-topic">
                        <b>Your ads will be permanently deleted.</b>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button className="ad-delete-confirm-button" onClick={handleSubmit}><a className="ad-button-text">Confirm</a></button>
                    <button className="ad-cancle-button" onClick={handleClose}><a className="ad-button-text">Cancle</a></button>
                </DialogActions>
            </Dialog>
            <style jsx>
                {style}
            </style>
        </div>
    )
}
const Content = () => {

    const [data, setData] = useState([]);
    const [total, setTotal] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await api.get('/api/ads/getAdstoPay');
            console.log(res.data);
            setData(res.data);
            const res2 = await api.get('/api/ads/getTotalAdsPrice');
            console.log(res2.data[0]);
            setTotal(res2.data[0].totalprice);
            setCount(res2.data[0].count);
        };
        fetchData();
    }, []);
    const arr = data.map((data, index) => {
        return (
            <div key={data.adid}>
                <Box adid={data.adid}
                    adtype={data.adtype}
                    index={index}
                    adstarttime={data.adstarttime}
                    firstname={data.firstname}
                    lastname={data.lastname}
                    adexpiretime={data.adexpiretime}
                    img={data.filelocation}
                    price={data.price}
                ></Box>
            </div>
        )
    })
    return (
        <Fragment>
            <General>
                <div style={{ backgroundImage: `url('/images/big-bg.svg')`, backgroundSize: 'cover', paddingTop: '3%', height: '100%' }} >
                    <div className="ad-ad-header" style={{ paddingTop: '50px', paddingBottom: '40%' }}>
                        <center style={{ paddingBottom: '5%' }}>EDUROOM CART</center>
                        {arr}
                        <Total totalPrice={total}
                            numberOfads={count}></Total>
                        <div style={{ backgroundImage: "url('/images/ads/shopping.svg')", backgroundSize: 'auto', height: '1200px', width: '800px', backgroundRepeat: 'no-repeat', marginLeft: '40%' }}></div>
                    </div>
                </div>
                <style jsx>
                    {style}
                </style>
            </General>

        </Fragment>
    )
}
export default Content

