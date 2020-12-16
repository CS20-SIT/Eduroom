import ListOfCourse from './listOfCourse';

const courses = () => {
    const data = [
        { title: 'Starter course1',instructor: 'Mr.X', price: 30, id: 1 },
        { title: 'Basic Course1',instructor: 'Mr.X', price: 30, id: 2 },
        { title: 'Business Course1',instructor: 'Mr.X', price: 30, id: 3 },
        { title: 'Starter Course2',instructor: 'Mr.X', price: 30, id: 4 },
        { title: 'Basic Course2',instructor: 'Mr.X', price: 30, id: 5 },
        { title: 'Business Course2',instructor: 'Mr.X', price: 30, id: 6 },
        { title: 'Starter Course3',instructor: 'Mr.X', price: 30, id: 7 },
        { title: 'Basic Course3',instructor: 'Mr.X', price: 30, id: 8 },
        { title: 'Business Course3',instructor: 'Mr.X', price: 30, id: 9 },
        { title: 'Starter Course4',instructor: 'Mr.X', price: 30, id: 10 },
        { title: 'Basic Course4',instructor: 'Mr.X', price: 30, id: 11 },
        { title: 'Business Course4',instructor: 'Mr.X', price: 30, id: 12 }
    ];
    return (
        <div>
            <ListOfCourse item={data}></ListOfCourse>
        </div>
    );
};

export default courses;