import ProductSticker_Render from './ProductSticker_Render';
import Styles from '../../styles/CoinStyles/List_Of_Sticker.module.css';
import Link from 'next/link';


const ListSticker = props => {
  
    const renderList = () => {
        const stickers = props.item.map((item, index) => {
            return (
               <div className={Styles.text}>
                <ProductSticker_Render
                    title={item.title}
                    price={item.price}
                    index={index}
                    id={item.id}
                    key={item.id}
                    
                ></ProductSticker_Render>
                </div>
            );
        });
        return stickers;
    };
    return (
        <div>
            <div className={Styles.slide}>
            <div >{renderList()}</div>
            </div>

            <div className={Styles.div}>{renderList()}</div>
        </div>
    );
};
export default ListSticker;
