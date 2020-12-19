import CourseRender from './courseRender';
import Styles from '../../styles/package/package.module.css';
import { useEffect, useState } from 'react';

const ListCourse = props => {
    const [course, setCourse] = useState([]);
    const [page, setPage] = useState(1);
    const [max, setMax] = useState(1);

    useEffect(() => {
        const data = props.item.slice(0, 12);
        setCourse(data);
        const mx = Math.ceil(data.length / 3);
        setMax(mx);
    }, []);
    const getLeftClass = () => {
        if (page === 1) {
            return Styles.disable;
        } else {
            return Styles.btn;
        }
    };
    const getRightClass = () => {
        if (page === max) {
            return Styles.disable;
        } else {
            return Styles.btn;
        }
    };

    const renderSlide = () => {
        const nowSlide = course.slice(page * 3 - 3, page * 3);
        const arr = nowSlide.map((item, index) => {
            return (
                <CourseRender
                    title={item.title}
                    price={item.price}
                    instructor={item.instructor}
                    index={index}
                    id={item.id}
                    owner={item.owner}
                    key={item.id}
                ></CourseRender>
            );
        });
        return (
            <div
                style={{
                    display: 'flex',
                    position: 'relative',
                    marginLeft: 40
                }}
            >
                <button
                    className={getLeftClass()}
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    {' < '}
                </button>
                <div style={{ width: '90%' }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto auto auto'
                        }}
                    >
                        {arr}
                    </div>
                </div>
                <button
                    className={getRightClass()}
                    onClick={() => setPage(page + 1)}
                    disabled={page === max}
                >
                    {' > '}
                </button>
                
            </div>
        );
    };

    return (
        <div>
            <div className={Styles.box}>{renderSlide()}</div>
        </div>
    );
};
export default ListCourse;

