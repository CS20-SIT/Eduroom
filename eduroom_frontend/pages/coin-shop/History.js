import Styles from '../../styles/CoinStyles/RenderHistory';
import General from '../../components/template/general';
import RenderHistory from '../../components/FolderCoin/Render_History';
import RightHistory from '../../components/FolderCoin/RightHistory';
import { useState } from 'react';

const temp = () => {
    const [id, setId] = useState(0);
    const data = [
        { title: 'Monkey', price: 20, id: 1 },
        { title: 'Dolphin', price: 30, id: 2 },
        { title: 'Dragon', price: 15, id: 3 },
        { title: 'Doraemon', price: 32, id: 4 },
        { title: 'Test1', price: 32, id: 5 },
        { title: 'Test2', price: 31, id: 6 },
        { title: 'Test3', price: 30, id: 7 },
        { title: 'Test4', price: 29, id: 8 },
        { title: 'Test5', price: 28, id: 9 },
        { title: 'Test6', price: 27, id: 10 },
        { title: 'Test7', price: 26, id: 11 },
        { title: 'Test8', price: 25, id: 12 }
    ];
    const renderDetail = () => {
        return (
            <RightHistory
                title={data[id].title}
                price={data[id].price}
            ></RightHistory>
        );
    };
    const handleChoose = (idx) =>{
        console.log(idx);
        setId(idx);
    }
    return (
        <General>
            <div className='background'>
                <div className='list'>
                    <RenderHistory item={data} choose={handleChoose}></RenderHistory>
                </div>
                {renderDetail()}
            </div>

            <style jsx>{Styles}</style>
        </General>
    );
};
export default temp;
