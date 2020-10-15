import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Class from '@material-ui/icons/Class'
import ExitToApp from '@material-ui/icons/ExitToApp'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		maxWidth: 752,
		position: 'relative',
		overflow: 'scroll',
		marginTop: '2vh'
	},
	gridItem: {
		maxHeight: '50vh'
	},
	demo: {
		backgroundColor: theme.palette.background.paper
	},
	title: {
		margin: theme.spacing(4, 0, 2)
	}
}))


const ClassList = props => {

	const classes = useStyles()
    const dense = false
    const [assignments, setAssignments] = useState([])
	
		
		useEffect((props) => {
			const authorizationHeader = {
			headers: {'Authorization': `Bearer ${props.token}`}
		}
			axios.get(`/api/classrooms-assignments-modal/${props.classroom.id}/`, authorizationHeader)
			.then(res => {
				console.log('Here is the assignment data: ', res.data)
				setAssignments(res.data)
              })
              .catch(err =>
                console.log(err, "You've hit an error in the axios call for assignments")
              )
          }, [props.token, props.currentUser])


	return (
		<>
			<Grid container spacing={2} className={classes.root} alignItems='center' alignContent='center' style={{padding: '3vh 3vw'}}>
				<Grid item className={classes.gridItem} xs={12}>
					<Typography variant='h6' className={classes.title}>
						Class Assignments
					</Typography>
					<div className={classes.demo}>
						<List dense={dense}>
							{assignments.map((assignment, i) => {
								return(<ListItem key={i}>
											<ListItemAvatar>
												<Avatar>
													<Class />
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												primary={assignment.name}
											/>
											<ListItemSecondaryAction>
												<IconButton edge='end' aria-label='link' href={assignment.url} target="_blank">
													<ExitToApp />
												</IconButton>
											</ListItemSecondaryAction>
										</ListItem>)
							})}
						</List>
					</div>
				</Grid>
			</Grid>
		</>
	)
}

export default ClassList
