import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const products = [
	{ name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
	{ name: 'Product 2', desc: 'Another thing', price: '$3.45' },
	{ name: 'Product 3', desc: 'Something else', price: '$6.51' },
	{ name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
	{ name: 'Shipping', desc: '', price: 'Free' },
]
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA']
const payments = [
	{ name: 'Card type', detail: 'Visa' },
	{ name: 'Card holder', detail: 'Mr John Smith' },
	{ name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
	{ name: 'Expiry date', detail: '04/2024' },
]

const useStyles = makeStyles((theme) => ({
	listItem: {
		padding: theme.spacing(1, 0),
	},
	total: {
		fontWeight: 700,
	},
	title: {
		marginTop: theme.spacing(2),
	},
}))

export default function Review() {
	const classes = useStyles()

	return (
		<Fragment>
			<Typography variant="h6" gutterBottom>
				Course setting
			</Typography>
			<Typography variant="h6" gutterBottom>
				Video setting
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField required id="videoname" name="videoname" label="Video Name" fullWidth autoComplete="given-name" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="videoupload"
						name="videoupload"
						label="Video Upload"
						fullWidth
						autoComplete="given-name"
					/>
				</Grid>
				<Typography variant="h6" gutterBottom>
					Material setting
				</Typography>
				<Grid item xs={12}>
					<TextField
						required
						id="materialfileupload"
						name="materialfileupload"
						label="Material File Upload"
						fullWidth
						autoComplete="given-name"
					/>
				</Grid>
				<Typography variant="h6" gutterBottom>
					Question setting
				</Typography>
				<Grid item xs={12}>
					<TextField required id="question" name="question" label="Question" fullWidth autoComplete="given-name" />
				</Grid>
				<Typography variant="h6" gutterBottom>
					Choices setting
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField required id="choice1" name="choice1" label="Choice1" fullWidth autoComplete="given-name" />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required id="choice2" name="choice2" label="Choice2" fullWidth autoComplete="given-name" />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required id="choice3" name="choice3" label="Choice3" fullWidth autoComplete="given-name" />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required id="choice4" name="choice4" label="Choice4" fullWidth autoComplete="given-name" />
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	)
}
