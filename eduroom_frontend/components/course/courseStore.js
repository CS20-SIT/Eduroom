import ListOfCourse from './listOfCourse';
import { useEffect , useState } from 'react';
import api from '../../api';
import Styles from '../../styles/course/cShop'

const courses = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await api.get('/api/course/getCourse');
            console.log(res.data);
            setData(res.data);
        };
        fetchData();
    }, []);
    return (
        
        <div className="course">      
            <div className="courseLanding" >Course in Eduroom</div>   
            <ListOfCourse item={data}></ListOfCourse>
            <style jsx>{Styles}</style>
        </div>
    );
};

export default courses;