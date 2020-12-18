import { useEffect, useState } from 'react';
import ListOfPackage from './listOfPackage';
import api from '../../api';

const packages = () => {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await api.get('/api/package/getAllPackage');
            console.log(res.data);
            setData(res.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <ListOfPackage item={data}></ListOfPackage>
        </div>
    );
};

export default packages;