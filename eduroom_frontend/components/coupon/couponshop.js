import React, { Fragment,useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import style from '../../styles/coupon/landingCoupon';
import Image from 'next/image'
import AllCouponCoin from './AllCouponCoin';
import AllCouponFestival from './AllCouponFestival';
import api from '../../api'


const CouponShopJa = () => {
	const [privateData, setPrivateData] = useState([])
	const [publicLimitedData, setPublicLimitedData] = useState([])
	const [publicData, setPublicData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
		//   const res = await api.get('/api/coin/codeOfCoin');
		  const res2 = await api.get('/api/coin/codesOfLPublic');
		  const res3 = await api.get('/api/coin/codesOfPublic');
		//   setData(res.data);
		  setPublicLimitedData(res2.data);
		  setPublicData(res3.data);
		}
		fetchData()
	  }, [])

	const [data, setData] = useState([]);
	const click = () => {
            router.push('/coin-shop/StoreSticker');
    };
	

	const router = useRouter()
	return (
		<Fragment>

			<div className="landing">
				<div className="landing-content">
					<div className="landing-header">
						SURPRISE with <br />
						<span style={{ fontSize: '1.3em' }}>PROMOTION</span>
					</div>
					<div className="landing-description">
						Special thanks to SO FAR SO GOOD Prophet <br />
						We love SDG Development and Integrated Project
					</div>
					<button className="landing-button" onClick={() => router.push('/universityemail')}>
						<a className="landing-button-text">Get University Discount</a>
					</button>
				</div>
				<Image className="landing-img" alt="landing-img" src="/images/landing_img.svg" width="600" height="525" />
			</div>
			<div className="box">
				<input className="input" placeholder="ENTER COUPON" />
				<button className="btn" onClick={() => router.push('/user/MyCoupon')}>MY COUPON</button>
			</div>
      {/* <h1 className="color">FOR COIN</h1>
      <AllCouponCoin item={data1}></AllCouponCoin> */}
	  <h1 className="color">LIMITED FESTIVAL COUPON</h1>
	  <AllCouponFestival item={publicLimitedData}></AllCouponFestival>
	  <h1 className="color">FESTIVAL COUPON</h1>
	  <AllCouponFestival item={publicData}></AllCouponFestival>

			<style jsx>{style}</style>
		</Fragment>
	)
}
export default CouponShopJa


//   const data1 = [
//     { title: 'LEARN TO CODE WITH PYTHON', price: 30,owner:'Bill gates', id: 1 ,description:'Coupon discount 10% for course PYTHON' },
//     { title: 'LEARN TO CODE WITH JAVA', price: 20,owner:'Donald gates', id: 2,description:'Coupon discount 20% for course JAVA' },
//     { title: 'LEARN TO CODE WITH C++', price: 40,owner:'Trump gates', id: 3,description:'Coupon discount 15% for course C++' },
//     { title: 'LEARN TO CODE WITH REACT', price: 50,owner:'TU gates', id: 4 ,description:'Coupon discount 12% for course REACT'},
//     { title: 'LEARN TO CODE WITH HTML', price: 31,owner:'kong gates', id: 5,description:'Coupon discount 14% for course HTML' },
//     { title: 'LEARN TO CODE WITH NODEJS', price: 34,owner:'Mong gates', id: 6,description:'Coupon discount 11% for course NODEJS' },
//     { title: 'LEARN TO CODE WITH MINECRAFT', price: 21,owner:'Ding gates', id: 7,description:'Coupon discount 16% for course MINECRAFT' },
//     { title: 'LEARN TO CODE WITH PYTHON', price: 12,owner:'Tong gates', id: 8 ,description:'Coupon discount 17% for course PYTHON'},
//     { title: 'LEARN TO CODE WITH PYTHON', price: 10,owner:'Song gates', id: 9 ,description:'Coupon discount 18% for course PYTHON'},
//     { title: 'LEARN TO CODE WITH PYTHON', price: 50,owner:'Wong gates', id: 10 ,description:'Coupon discount 19% for course PYTHON'},
//     { title: 'LEARN TO CODE WITH PYTHON', price: 27,owner:'Mnk gates', id: 11 ,description:'Coupon discount 40% for course PYTHON'},
//     { title: 'LEARN TO CODE WITH PYTHON', price: 18,owner:'Wssa gates', id: 12 ,description:'Coupon discount 150% for course PYTHON'}
// ];
// const data2 = [
// 	{ title: 'PUBLIC COUPON', price: 1,owner:'Wssa gates', id: 1, id: 12 ,description:'Public discount 10%' },
// 	{ title: 'PUBLIC COUPON', price: 13,owner:'Wssa asd', id: 2 , id: 12 ,description:'Coupon discount 15%'},
// 	{ title: 'PUBLIC COUPON', price: 18,owner:'wqe gates', id: 3 , id: 12 ,description:'Coupon discount 14%'},
// 	{ title: 'PUBLIC COUPON', price: 17,owner:'Wssa fqe', id: 4 , id: 12 ,description:'Coupon discount 20%'},
// 	{ title: 'PUBLIC COUPON', price: 23,owner:'qwe gates', id: 5 , id: 12 ,description:'Coupon discount 10%'},
// 	{ title: 'PUBLIC COUPON', price: 43,owner:'asd gates', id: 6,description:'Public discount 10%' },
// 	{ title: 'PUBLIC COUPON', price: 66,owner:'Wssa dsgf', id: 7 ,description:'Public discount 10%'},
// 	{ title: 'PUBLIC COUPON', price: 99,owner:'asd wqe', id: 8 ,description:'Public discount 10%'},
// 	{ title: 'PUBLIC COUPON', price: 99,owner:'asd wqe', id: 9 ,description:'Public discount 10%'},

// ]
