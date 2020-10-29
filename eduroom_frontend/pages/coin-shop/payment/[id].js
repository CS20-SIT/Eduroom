const payment = props => {
    return (
        <div>
            <h1>Warning</h1>
            <h2>Construction activities in 'Progress'</h2>
            <h1> This is ID of the sticker {props.id}</h1>
        </div>
    );
};
export async function getServerSideProps(context){
    try{
        const id =context.query.id

        return {props:{id}};
    }catch(err){
        return {props:{id: ''}};
    }

}
export default payment;
