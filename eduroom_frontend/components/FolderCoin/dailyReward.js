import Styles from '../../styles/CoinStyles/dailyReward.module.css';
import { useState, useEffect } from 'react';
const temp = () => {
    const [myStyle, setMyStyle] = useState({});
    const [disable, setDisbale] = useState(false);
    const [deg, setDeg] = useState([]);
    const [num, setNum] = useState(0);
    const [time, setTime] = useState({ hour: null, min: null, second: null });
    const startDeg = 360;
    const cal = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0);
        tomorrow.setMinutes(0);
        tomorrow.setSeconds(0);
        tomorrow.setMilliseconds(0);
        let diff = tomorrow.getTime() - today.getTime();
        let hour = Math.floor(diff / 1000 / 60 / 60);
        diff = diff % 3600000;
        let min = Math.floor(diff / 1000 / 60);
        diff = diff % 60000;
        let second = Math.floor(diff / 1000);
        setTime({ hour, min, second });
    };
    useEffect(() => {
        //setInterval
        setInterval(() => {
            cal();
        }, 1000);

        let temp = [];
        for (let i = 0; i < 6; i++) {
            temp.push(startDeg + (i + 1) * 30);
        }
        console.log('hello');
        setDeg(temp);
    }, []);
    const click = () => {
        if (disable) return;
        console.log(deg);
        const randDeg = Math.floor(Math.random() * (6 + 1));
        console.log(randDeg, ' degree = ', deg[randDeg]);
        let getNum = (randDeg + 2) % 6;
        if (getNum == 0) getNum = 6;
        console.log('get number ', getNum);
        setTimeout(() => {
            setNum(getNum);
        }, 4000);

        setMyStyle({
            width: '100%',
            height: '100%',
            transform: `rotate(${deg[randDeg]}deg)`,
            transition: 'all 6s cubic-bezier(0, 0.99, 0.44, 0.99)'
        });

        setDisbale(true);
    };
    const renderText = () =>{
        if(disable){
            return <h4 className={Styles.check}>Now you have to wait it for {time.hour} Hours</h4>
        } else{
            return <h4 className={Styles.check}> Your can click it</h4>
        }
    }
    return (
        <div>
            <div className={Styles.test}>Daily Reward</div>
            <div className={Styles.wrapper}>
                <div className={Styles.wheel}>
                    <div style={myStyle}>
                        <div style={myStyle}>
                            {/* <div className={Styles.innerWheel}> */}
                            <div className={Styles.sec}>
                                <span className={Styles.fa}>6</span>
                            </div>
                            <div className={Styles.sec}>
                                <span className={Styles.fa}>5</span>
                            </div>
                            <div className={Styles.sec}>
                                <span className={Styles.fa}>4</span>
                            </div>
                            <div className={Styles.sec}>
                                <span className={Styles.fa}>3</span>
                            </div>
                            <div className={Styles.sec}>
                                <span className={Styles.fa}>2</span>
                            </div>
                            <div className={Styles.sec}>
                                <span className={Styles.fa}>1</span>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => click()}
                        className={disable ? Styles.disSpin : Styles.spin}
                    >
                        <div className={Styles.innerSpin}></div>
                    </div>

                    <div className={Styles.shine}></div>
                </div>
            </div>
            <div className={Styles.txt}>Your got the {num}</div>
            <div className={Styles.time}>
                <h1>Count Down</h1>
                <span className={Styles.label}>{time.hour}</span> Hour{' '}
                <span className={Styles.label}>{time.min}</span> Min{' '}
                <span className={Styles.label}>{time.second}</span> Second
                <h3 className={Styles.label}>It's will reset every midnight</h3>
                {/* <h4 className={disable ? Styles.false : Styles.true}>Hello</h4> */}
                {renderText()}
            </div>
        </div>
    );
};

export default temp;
