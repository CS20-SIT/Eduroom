import Main from './Main_Store';
import {useState} from 'react';
const temp = () => {
    const data = { coin: 1000 };
    const [Coin,setCoin] = useState(data);
    return (
        <div>
            <Main item={Coin}></Main>
        </div>
    );
};
export default temp;

