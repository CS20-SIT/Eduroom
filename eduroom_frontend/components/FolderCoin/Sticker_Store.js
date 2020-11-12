import { useEffect, useState } from 'react';
import List_Of_Sticker from './List_Of_Sticker';
import api from '../../api';

const sticker = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await api.get('/api/coin/stickers');
            console.log(res.data);
            setData(res.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <List_Of_Sticker item={data}></List_Of_Sticker>
        </div>
    );
};
export default sticker;
