import Styles from '../../styles/CoinStyles/RenderHistory';
import General from '../../components/template/general';
import RenderHistory from '../../components/FolderCoin/Render_History';

const temp = () => {
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
        <General>


        <div className="background">
                {/* <div className={Styles.container}>
                    <div className={Styles.card}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </div> */}
                <div className="list">
                    <RenderHistory item={data}></RenderHistory>
                </div>
                <div className="right">
                    This is Right
                    <span className="detail">
                        <h1>Detail </h1>
                        <h1>This sticker is fruit </h1>
                        <h1>No Expiration Date</h1>
                        <h1>99 $</h1>
                    </span>
                    <hr className="mid"/>
                </div>
                </div>

            <style jsx>{Styles}</style>

        </General>
    );
};
export default temp;
