import DetailHistory from './Detail_History';
const RenderHistory = props => {
    const renderList = () => {
        const list = props.item.map((item, index) => {
            return (
                <div key={item.id}>
                    <DetailHistory
                        title={item.title}
                        price={item.price}
                        index={index}
                        id={item.id}
                    ></DetailHistory>
                </div>
            );
        });
        return list;
    };

    return <div>{renderList()}</div>;
};
export default RenderHistory;
