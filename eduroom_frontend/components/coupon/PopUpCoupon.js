import { useState } from 'react'
import { Dialog, DialogContent } from '@material-ui/core'
import Styles from '../../styles/coupon/popup'
import EnsurePay from './ConfirmPayment';
const temp = (props) => {
    const [state, setState] = useState(false);
    const [show , setShow ] = useState(false);
    const [buy , setBuy] = useState(false);
    const PopPurchase = () => {
        setBuy(true)
    };
    const renderCondition = () =>{
        if(show){
            return (<div> 
                <h1 className="text">Condition for using Coupon</h1>
                <h1></h1>
                
                <button onClick={()=>setShow(false)} className="condition"> V </button>
                <style jsx>{Styles}</style>
            </div>); 
        }else{
            return(<div><button onClick={()=> setShow(true)} className="condition"> > </button>
            <style jsx>{Styles}</style>
             </div>)
        }
        
    }
	console.log(props)
	return (
		<div>
			<Dialog open={state} onClose={() => setState(false)}>
				<DialogContent></DialogContent>
			</Dialog>
			<div className="white">
				<div>
					<h1 className="desc">{props.item.description}</h1>
					<img className="center" src="../../images/Coin-image/Group 287.svg" />
                    <div className="con">
					<h3 className="desc">
						{props.item.price} <img className="coin" src="../../images/Coupon/copyright_24px.svg" />
					</h3>
					<button  className="btn" onClick={PopPurchase}>Buy</button>
                    <Dialog open={buy} onClose={() => setBuy(false)}>
                            <DialogContent style={{ width: '400px', height: '300px', padding: '0px' }}><EnsurePay closeEnsure={() => { props.closePopup(); setBuy(false) }} close={() => setBuy(false)} /></DialogContent>
                        </Dialog>
                    </div>
                    {renderCondition()}
				</div>
			</div>
			<style jsx>{Styles}</style>
		</div>
	)
}
export default temp
