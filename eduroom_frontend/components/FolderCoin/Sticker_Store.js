import List_Of_Sticker from './List_Of_Sticker';

const sticker = () => {
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
    return (
        <div>
            <List_Of_Sticker item={data}></List_Of_Sticker>
        </div>
    );
};
export default sticker;
