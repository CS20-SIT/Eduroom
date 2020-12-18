import DetailHistory from './Detail_History';
const RenderHistory = props => {
    const renderList = () => {
        const list = props.item.map((item, index) => {
            return (
                <div key={item.id}>
                    <DetailHistory
                        title={item.stickername}
                        price={item.stickerprice}
                        index={index}
                        id={item.id}
                        choose={props.choose}
                    ></DetailHistory>
                </div>
            );
        });
        return list;
    };
   

    return <div>{renderList()}</div>;
};
export default RenderHistory;
