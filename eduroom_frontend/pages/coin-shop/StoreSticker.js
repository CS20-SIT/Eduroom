import React, { Fragment, useState, useEffect } from 'react';
import Product_Sticker from '../../components/FolderCoin/Sticker_Store';
import Styles from '../../styles/CoinStyles/coin-shop.module.css';
import General from '../../components/template/general';
import Daily from '../../components/FolderCoin/dailyReward';
import PopUp from '../../components/FolderCoin/default_Pop';
import { Dialog, Button, Container, DialogContent } from '@material-ui/core';
const Temp = () => {
    const [open, setOpen] = useState(false);
    const [pop , setPop] = useState(false);
    const click = e => {
        e.preventDefault();
        setOpen(true);
    };
    const close = e => {
        e.preventDefault();
        setOpen(false);
    };

    return (
        <Fragment>
            <General>
                <div className={Styles.animation2}>
                    <div className={Styles.img3}>
                        <div>
                            <Product_Sticker></Product_Sticker>
                        </div>
                    </div>

                    
                    <div className={Styles.daily}>
                        <Container>
                            <Button
                                variant='outlined'
                                color='primary'
                                onClick={e => {
                                    click(e);
                                }}
                            >
                                Daily Reward
                            </Button>

                            <Dialog
                                open={open}
                                onClose={e => {
                                    close(e);
                                }}
                            >
                                <DialogContent
                                    style={{ width: '40vw', height: '89vh' }}
                                >
                                    <Daily></Daily>
                                </DialogContent>
                            </Dialog>
                        </Container>
                    </div>
                </div>
            </General>
        </Fragment>
    );
};
export default Temp;
