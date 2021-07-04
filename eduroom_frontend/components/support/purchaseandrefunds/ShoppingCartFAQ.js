import Head from 'next/head'
import { Fragment, useState, useEffect, useContext } from 'react'
import {
	Container,
	Button,
	TextField,
	Grid,
	Typography,
	CssBaseline,
	makeStyles,
	Select,
	MenuItem,
	Paper,
	createMuiTheme,
	ThemeProvider,
	Link,
	fade,
} from '@material-ui/core'
import Studentnav from '../studentsidenav'

const ShoppingCartFAQ = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>Shopping Cart FAQ</h1>
					</Typography>
					<Grid item xs={9} style={{ paddingRight: '100px' }}>
						<Paper
							style={{
								padding: '20px',

								backgroundColor: fade('#ffffff', 0.6),
							}}
						>
							<Typography>
								{' '}
								<h3>What is Shopping Cart?</h3>
								<p>
									Shopping cart is a way for you to purchase multiple courses and checkout only once. This makes
									purchasing a course faster and getting started with your course easier!
								</p>
								<h3>How many courses can I put in my Cart?</h3>
								<p>You can add up to 50 courses in your cart.</p>
								<h3>How many coupon codes can I apply to my courses in my Cart?</h3>
								<p>You can apply unlimited number of coupons to the courses in your cart.</p>
								<h3>What is Save For Later? </h3>
								<p>
									We want to make sure that you purchase only the courses you want. That’s why the Save for later button
									moves courses from your cart to a Saved For Later section.
								</p>
								<h3>How do I access the courses that I Saved For Later the next time I’m ready to purchase? </h3>
								<p>
									When you log into Udemy, click on the Shopping cart icon in the header to find courses that you saved
									for later.
								</p>
								<h3>What else is on my checkout page?</h3>
								<p>
									There are 3 sections to the checkout page: Cart, Saved for Later, and Wishlisted. You can move courses
									between these 3 sections by clicking on the blue directions on the left of the course price.{' '}
								</p>
								<h3>What’s the difference between Saved for Later and Wishlisted? </h3>
								<p>
									You can wishlist a course by clicking on the Wishlist heart on the course landing page or by clicking
									Move to Wishlist on the checkout page. When you might be interested in a course, just add it to your
									wishlist so that you can easily remember what caught your attention.
								</p>
								<p>
									You can only save a course for later from the checkout page. Save a course for later when you’re not
									ready to purchase the course now. When your return to your shopping cart, click Move to cart from your
									Saved for Later list to purchase the course.
								</p>
								<h3>
									I had a few courses in my cart a couple of months ago. They’re not in my cart anymore! What happened?
								</h3>
								<p>
									After 30 days of being in your cart (with no purchase), courses will move from your cart to your Saved
									for Later list. To move the courses back to your cart, click Move to Cart.
								</p>
								<h3>I entered in a Udemy coupon code. Why didn’t the course prices change? </h3>
								<p>
									Udemy sitewide coupon codes are automatically applied to your cart. Coupon codes that have been
									applied to your course(s) appear under the coupon code submission field. You can also hover over the
									coupon icon next to the course title in the cart to see the coupon that was applied to the course. 
								</p>
								<h3>I entered in a coupon code from an instructor. How do I know which course it applies to? </h3>
								<p>
									Hover over the coupon icon next to the price to see which coupon code has applied to the course. If
									you enter multiple coupon codes to a course, the coupon that gives you the greatest discount will be
									applied.
								</p>
								<h3>Do free courses appear in my shopping cart?</h3>
								<p>
									You cannot add free courses to the cart. If a course is free, click Start learning now to enroll
									immediately. If you wishlist a free course, the course will appear in My Courses and under the
									Wishlist section of the checkout page. The free courses that are wishlisted cannot be moved to the
									cart.
								</p>
								<h3>What’s in my receipt? </h3>
								<p>
									You receive an email receipt once you have purchased either an individual course or multiple courses
									through a shopping cart. You can also view your receipt in the Purchase History page which can be
									accessed through your profile dropdown. Your receipt will include the courses that you bought through
									the cart, the price that you paid for your individual courses, and then the total that you paid along
									with applicable taxes and credits that were used for the purchase. Free courses are not included in
									the receipt.
								</p>
								<h3>I just want to purchase one course. Do I have to use shopping cart? </h3>
								<p>
									Nope. If you want to purchase just one course, click Buy Now and enter your payment information.
									Alternatively, you can click Add to Cart to check out with a single course in the cart.
								</p>
								<h3>I don’t live in the US. Can I still use shopping cart?</h3>
								<p>Yes! Shopping cart is available for all Udemy students.</p>
								<p style={{ marginLeft: '630px', marginTop: '50px' }}>
									<Link href="/support/Purchase-Refunds">Purchase/Refunds</Link>
								</p>
							</Typography>
						</Paper>
					</Grid>

					<Grid item xs={3}>
						<div style={{ marginBottom: theme.spacing(3) }}>
							<Studentnav />
						</div>

						<Button
							variant="contained"
							style={{
								backgroundColor: '#FB9CCB',
								marginBottom: theme.spacing(10),
								marginLeft: theme.spacing(8.5),
								marginTop: theme.spacing(1),
							}}
							href="/support/create"
						>
							<label style={{ color: '#ffffff' }}>CONTACT US</label>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	)
}
export default ShoppingCartFAQ
