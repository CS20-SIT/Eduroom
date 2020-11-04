const temp = (props) => {
    console.log(props.coin);
    return (
        <div className='div'>
            Coin {props.coin}
            <style>
                {`.div{
                display:flex;
                justify-content:flex-end;
                width:100vw;
            }`}
            </style>
        </div>
    );
};
export default temp;
