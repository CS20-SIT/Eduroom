import ProductSticker_Render from './ProductSticker_Render';
import Styles from '../../styles/CoinStyles/List_Of_Sticker.module.css';

const ListSticker = props => {
    const renderList = () => {
        const stickers = props.item.map((item, index) => {
            return (
                <ProductSticker_Render
                    title={item.title}
                    price={item.price}
                    index={index}
                    id={item.id}
                    key={item.id}
                ></ProductSticker_Render>
            );
        });
        return stickers;
    };
    return <div className={Styles.div}>{renderList()}</div>;
};
export default ListSticker;
