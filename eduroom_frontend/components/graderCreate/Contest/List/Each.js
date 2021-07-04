import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import { useRouter } from 'next/router'
import { contestEachStyles } from '../../materialUIStyle'

const ContestEach = (p) => {
	const classes = contestEachStyles()
	const router = useRouter()

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardContent>
					<Grid container direction="row" spacing={3}>
						<Grid item sm={6}>
							<Typography className={classes.title} gutterBottom variant="h5" component="h2">
								{p.title}
							</Typography>
						</Grid>
						<Grid item sm={6}>
							<Chip
								label={p.starttime}
								style={{
									marginTop: 5,
									marginLeft: '7%',
									backgroundColor: '#fb9ccb',
									marginBottom: 10,
									color: 'white',
									height: 25,
									width: '43%',
									fontFamily: 'Quicksand , sans-serif',
									fontSize: '0.75em',
									fontWeight: 'bold',
								}}
							/>

							<Chip
								label={p.endtime}
								style={{
									marginTop: 5,
									marginLeft: 10,
									backgroundColor: '#8CC0EA',
									marginBottom: 10,
									color: 'white',
									height: 25,
									width: '43%',
									fontFamily: 'Quicksand , sans-serif',
									fontSize: '0.75em',
									fontWeight: 'bold',
								}}
							/>
						</Grid>
					</Grid>
					<Typography variant="body2" className={classes.body} gutterBottom color="textSecondary" component="p">
						{/* Let manage elements in Contest No.{p.id} by click the button below! */}
						{p.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.action}>
				<Button
					className={classes.Button}
					size="small"
					onClick={() => {
						router.push(`/admin/grader/contest/${p.id}/info`)
					}}
				>
					<span className={classes.buttonText}>info </span>
				</Button>
				<Button
					className={classes.Button}
					size="small"
					onClick={() => {
						router.push(`/admin/grader/contest/${p.id}/announcement`)
					}}
				>
					<span className={classes.buttonText}>Announcement </span>
				</Button>
				<Button
					className={classes.Button}
					size="small"
					onClick={() => {
						router.push(`/admin/grader/contest/${p.id}/question`)
					}}
				>
					<span className={classes.buttonText}>question </span>
				</Button>
			</CardActions>
		</Card>
	)
}
export default ContestEach
