import Button from '@material-ui/core/Button';
import Pop from '../../../components/FolderCoin/Pop_up';  
const payment = props => {
    const click = () =>{
        return <Pop/>;
    }
    return (
        <div className="all">
            <h1>Warning</h1>
            <h2>Construction activities in 'Progress'</h2>
            <h1> This is ID of the sticker {props.id}</h1>
            <Button variant='contained' color='primary' onClicke={click()}>
                Buy!
            </Button>
            <style jsx>
                {
                    `.all{
                        margin:30px; 
                    }`
                }
            </style>
        </div>
    );
};
export async function getServerSideProps(context) {
    try {
        const id = context.query.id;

        return { props: { id } };
    } catch (err) {
        return { props: { id: '' } };
    }
}
export default payment;
