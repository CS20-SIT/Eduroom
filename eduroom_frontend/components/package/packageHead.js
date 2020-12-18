import React, { Fragment } from 'react'
import style from '../../styles/package/detail'
import Button from '@material-ui/core/Button'
import BestSeller from './bestSeller'
import { useRouter } from 'next/router'
const Package = () => {
    const router = useRouter();
    return (
        <Fragment>
            <div className="center">
                <div className="card">
                    <div style={{ display: 'flex' }}>
                        <div className="col-6 incard">
                            <h1 className="title">Coding with Python</h1>
                            <div className="bestsell-tag">
                                <BestSeller />
                                <div className="text2">3 courses in this package</div>
                            </div>
                            <div className="instructor">
                                <div style={{ marginRight: 10 }}>Instructors</div>
                                <div>Instructors Name</div>
                            </div>
                            <div className="last-update">
                                <img
                                    src="/images/package/Time.svg"
                                    className="update-icon"
                                />
                                <div style={{ paddingBottom: 10 }}>last updated 21/10/2020</div>
                            </div>
                            <div className="price">
                                <div className="old-price">฿1000</div>
                                <div className="new-price">฿3500</div>
                            </div>

                            <Button id="wishlist-btn" style={{ marginRight: 10, backgroundColor: '#7B89DD', color: 'white', borderRadius: 10 }}
                                onClick={() => router.push("/user/wishlist")}// link to wishlist
                            >
                                wish list
                                <img
                                    src="/images/package/Heart.svg"
                                    style={{ width: 20, height: 20, marginLeft: 8, display: 'center' }}
                                />
                            </Button>

                            <Button id="addtocart-btn" style={{ marginRight: 10, backgroundColor: '#3D467F', color: 'white', borderRadius: 10 }}
                                onClick={() => router.push("/course")}// link to cart
                            > Add to cart
                                <img
                                    src="/images/package/addToCart.svg"
                                    style={{ width: 20, height: 20, marginLeft: 8, display: 'center' }}
                                />
                            </Button>


                            <Button id="buynow-btn" style={{ marginRight: 10, backgroundColor: '#3D467F', color: 'white', borderRadius: 10 }}
                                onClick={() => router.push("/course/id/payment")}
                            > Buy Now
                                <img
                                    src="/images/package/buyNow.svg"
                                    style={{ width: 20, height: 20, marginLeft: 8, display: 'center' }}
                                />
                            </Button>
                           

                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img
                                src="/images/package/packagePic.svg"
                                style={{ width: '25vw', height: '25vh', borderRadius: '10px' }}
                            />
                        </div>
                        
                    </div>

                </div>
            </div>

            <style jsx>{style}</style>
        </Fragment>
    )

}
export default Package;