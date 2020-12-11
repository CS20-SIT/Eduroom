import ListOfPackage from './listOfPackage';

const packages = () => {
    const data = [
        { title: 'Starter Package1',instructor: 'Mr.X', price: 30, id: 1 },
        { title: 'Basic Package1',instructor: 'Mr.X', price: 30, id: 2 },
        { title: 'Business Package1',instructor: 'Mr.X', price: 30, id: 3 },
        { title: 'Starter Package2',instructor: 'Mr.X', price: 30, id: 4 },
        { title: 'Basic Package2',instructor: 'Mr.X', price: 30, id: 5 },
        { title: 'Business Package2',instructor: 'Mr.X', price: 30, id: 6 },
        { title: 'Starter Package3',instructor: 'Mr.X', price: 30, id: 7 },
        { title: 'Basic Package3',instructor: 'Mr.X', price: 30, id: 8 },
        { title: 'Business Package3',instructor: 'Mr.X', price: 30, id: 9 },
        { title: 'Starter Package4',instructor: 'Mr.X', price: 30, id: 10 },
        { title: 'Basic Package4',instructor: 'Mr.X', price: 30, id: 11 },
        { title: 'Business Package4',instructor: 'Mr.X', price: 30, id: 12 }
    ];
    return (
        <div>
            <ListOfPackage item={data}></ListOfPackage>
        </div>
    );
};

export default packages;