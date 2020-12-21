import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Styles from '../../styles/CoinStyles/coin-shop.module.css';
import General from '../../components/template/general';
import Daily from '../../components/FolderCoin/dailyReward';
import { Dialog, Button, Container, DialogContent } from '@material-ui/core';

const Temp = () => {
    const router = useRouter();
    const [divClass, setDivClass] = useState('');
    const [open, setOpen] = useState(false);
    const clicks = e => {
        e.preventDefault();
        setOpen(true);
    };
    const close = e => {
        e.preventDefault();
        setOpen(false);
    };

    const click = () => {
        setDivClass(Styles.animation);
        setTimeout(() => {
            router.push('/coin-shop/StoreSticker');
        }, 500);
    };
    return (
        <Fragment>
            <General isProtected={true}>
                <div className={divClass}>
                    <div className={Styles.img}>
                        <span className={Styles.text}>
                            Welcome to Sticker Store!
                        </span>
                        <span className={Styles.detail}>
                            This is Store for exchange coin to the sticker
                            <br />
                            Sticker that's Prize for the people who has Ambition
                        </span>
                        <div className={Styles.posball2}>
                            <div className={Styles.balloon}></div>
                        </div>
                        <div className={Styles.posball}>
                            <div className={Styles.balloon2}></div>
                        </div>
                        <div>
                            <button
                                onClick={() => click()}
                                className={Styles.btn}
                            >
                                Shopping
                            </button>
                        </div>
                        <div className={Styles.daily}>
                            <Container>
                                <Button
                                    variant='outlined'
                                    color='primary'
                                    size='large'
                                    onClick={e => {
                                        clicks(e);
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
                                        style={{
                                            width: '40vw',
                                            height: '89vh'
                                        }}
                                    >
                                        <Daily
                                            onClose={() => setOpen(false)}
                                        ></Daily>
                                    </DialogContent>
                                </Dialog>
                            </Container>
                        </div>
                    </div>
                </div>
            </General>
        </Fragment>
    );
};
export default Temp;
