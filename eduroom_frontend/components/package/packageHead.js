import React, { Fragment } from 'react'
import style from '../../styles/package/detail'
import Button from '@material-ui/core/Button'
import BestSeller from './bestSeller'
import { useRouter } from 'next/router'
const Package = () => {
    const router = useRouter();
    return (
        <Fragment>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="card">
                    <div style={{ display: 'flex' }}>
                        <div className="col-6" style={{ width: 650, marginLeft: 30 }}>
                            <h1 style={{ fontSize: 24, color: '#3D467F' }}>Coding with Python</h1>
                            <div style={{ textAlign: 'justify', width: 500, marginBottom: 20 }}>Amet minim mollit non deserunt ullamco est sit
                                     aliqua dolor do amet sint. Velit officia consequat </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <BestSeller />
                                <div style={{ fontWeight: 500, marginLeft:10,color:'#3D467F' }}>3 course in this package</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10,marginTop:10 }}>
                                <div style={{ marginRight: 10 }}>Instructors</div>
                                <div>Instructors Name</div>
                            </div>
                            <div style={{ marginBottom: 3, display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>
                                <img
                                    src="/images/package/Time.svg"
                                    style={{ width: 20, height: 20, marginRight: 10, display: 'center' }}
                                />
                                <div style={{ paddingBottom: 10 }}>last updated 21/10/2020</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                                <div style={{ marginRight: 30, fontSize: 30, fontWeight: 500 }}>฿1000</div>
                                <div style={{ marginRight: 30, fontSize: 18, marginTop: 10, color: '#9593A0', textDecorationLine: 'line-through' }}>฿3500</div>
                            </div>
                            
                            <Button style={{ marginRight: 10, backgroundColor: '#7B89DD', color: 'white', borderRadius: 10 }}
                                onClick={() => router.push("/user/wishlist")}// link to wishlist
                            >
                                wish list
                                <img
                                    src="/images/package/Heart.svg"
                                    style={{ width: 20, height: 20, marginLeft: 8, display: 'center' }}
                                />
                            </Button>

                            <Button style={{ marginRight: 10, backgroundColor: '#3D467F', color: 'white', borderRadius: 10 }}
                                onClick={() => router.push("/course")}// link to cart
                            > Add to cart
                                <img
                                    src="/images/package/addToCart.svg"
                                    style={{ width: 20, height: 20, marginLeft: 8, display: 'center' }}
                                />
                            </Button>


                            <Button style={{ marginRight: 10, backgroundColor: '#3D467F', color: 'white', borderRadius: 10 }}
                                onClick={() => router.push("/course/id/paymentTest")}
                            > Buy Now
                                <img
                                    src="/images/package/buyNow.svg"
                                    style={{ width: 20, height: 20, marginLeft: 8, display: 'center' }}
                                />
                            </Button>
                            
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div className="col-6" style={{ display: 'felx', justifyContent: 'flex-end' }}>
                                <img
                                    src="/images/package/packagePic.svg"
                                    style={{ width: 250, height: 250 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {
                    style
                }
            </style>
        </Fragment>
    )

}
export default Package;