import React, { Fragment, useState } from 'react'
import Grid from '@material-ui/core/Grid'
const studentFeedback = (props) => {
	return (
		<Fragment>
			<b style={{ fontSize: '24px' }}>Student Feedback</b>
			<div style={{ marginBottom: '20px' }} />
			<Grid container spacing={3} variant="outlined" style={{}}>
				<Grid item xs={4}>
					<Grid item xs={6}>
						<b style={{ fontSize: '64px', color: '#FB9CCB', display: 'block', marginLeft: '33%' }}>
							{parseFloat(props.data.average).toFixed(1)}
						</b>
					</Grid>
					<Grid item xs={6}>
						<div className="rate" style={{ display: 'block', marginLeft: '28%' }}>
							<span className={'fa fa-star ' + (props.data.average >= 1 ? 'checked' : 'unchecked')}></span>
							<span className={'fa fa-star ' + (props.data.average >= 2 ? 'checked' : 'unchecked')}></span>
							<span className={'fa fa-star ' + (props.data.average >= 3 ? 'checked' : 'unchecked')}></span>
							<span className={'fa fa-star ' + (props.data.average >= 4 ? 'checked' : 'unchecked')}></span>
							<span className={'fa fa-star ' + (props.data.average >= 5 ? 'checked' : 'unchecked')}></span>
						</div>
					</Grid>
					<Grid item xs={6}>
						<b style={{ fontSize: '24px', color: '#FB9CCB', position: 'relative', marginLeft: '16%' }}>Course rating</b>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<div class="bar-container">
						<div class="bar-5"></div>
					</div>

					<div class="bar-container">
						<div class="bar-4"></div>
					</div>
					<div class="bar-container">
						<div class="bar-3"></div>
					</div>
					<div class="bar-container">
						<div class="bar-2"></div>
					</div>
					<div class="bar-container">
						<div class="bar-1"></div>
					</div>
				</Grid>
				<Grid item xs={2}>
					<div className="rateSet" style={{ marginTop: '-3px', marginBottom: '14px' }}>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star checked"></span>
						{parseInt((props.data.rates[5] * 100) / props.data.count)}%
					</div>
					<div className="rateSet" style={{ marginBottom: '14px' }}>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star unchecked"></span>
						{parseInt((props.data.rates[4] * 100) / props.data.count)}%
					</div>
					<div className="rateSet" style={{ marginBottom: '14px' }}>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star unchecked"></span>
						<span class="fa fa-star unchecked"></span>
						{parseInt((props.data.rates[3] * 100) / props.data.count)}%
					</div>
					<div className="rateSet" style={{ marginBottom: '14px' }}>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star unchecked"></span>
						<span class="fa fa-star unchecked"></span>
						<span class="fa fa-star unchecked"></span>
						{parseInt((props.data.rates[2] * 100) / props.data.count)}%
					</div>
					<div className="rateSet">
						<span class="fa fa-star checked"></span>
						<span class="fa fa-star unchecked"></span>
						<span class="fa fa-star unchecked"></span>
						<span class="fa fa-star unchecked"></span>
						<span class="fa fa-star unchecked"></span>
						{parseInt((props.data.rates[1] * 100) / props.data.count)}%
					</div>
				</Grid>
			</Grid>
			<style>{`
			.checked {
				color: #FB9CCB;
			}
			.unchecked {
				color: #ccc;
			}
			.bar-container {
				width: 100%;
				background-color: #C4C4C4;
				color: white;
				margin-bottom: 15px;
			  }
			.bar-5 {width: ${(props.data.rates[5] * 100) / props.data.count}%; height: 18px; background-color: #5B5B5B;}
			.bar-4 {width: ${(props.data.rates[4] * 100) / props.data.count}%; height: 18px; background-color: #5B5B5B;}
			.bar-3 {width: ${(props.data.rates[3] * 100) / props.data.count}%; height: 18px; background-color: #5B5B5B;}
			.bar-2 {width: ${(props.data.rates[2] * 100) / props.data.count}%; height: 18px; background-color: #5B5B5B;}
			.bar-1 {width: ${(props.data.rates[1] * 100) / props.data.count}%; height: 18px; background-color: #5B5B5B;}
			`}</style>
		</Fragment>
	)
}
export default studentFeedback
