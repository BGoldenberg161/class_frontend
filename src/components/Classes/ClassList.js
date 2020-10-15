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
import Add from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
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

	const classes = useStyles();
	const dense = false
	const [students, setStudents] = useState([])
	const [assignedStudents, setAssignedStudents] = useState([])
	
	const authorizationHeader = {
		headers: {'Authorization': `Bearer ${props.token}`}
	}
	
	const fetchData = async () => {
		const getAssignedStudents = await axios.get(
		  `/api/students-classrooms/${props.classroom.id}`,
		  authorizationHeader
		  )
		const getClassroomsStudents = await axios.get(
		  `/api/student/`,
		  authorizationHeader
		  )
		setStudents(getClassroomsStudents.data)
		console.log(students)
		setAssignedStudents(getAssignedStudents.data)
		console.log('ℌ Assigned Students: ', assignedStudents)
	}

	useEffect(() => {
		fetchData()
	}, [props.token, props.currentUser])

	const addToClass = (id) => {
		console.log(id)
		axios
			.post('/api/students-classrooms/', {
				student: id,
				classroom: props.classroom.id
			},
			authorizationHeader
			)
		fetchData()
	}


	return (
		<>
			<Grid container spacing={2} className={classes.root} alignItems='center' alignContent='center' style={{padding: '3vh 3vw'}}>
				<Grid item className={classes.gridItem} xs={12}>
					<Typography variant='h6' className={classes.title}>
						Students in Class
					</Typography>
					<div className={classes.demo}>
						<List dense={dense}>
							{assignedStudents.map((student, i) => {
								return(<ListItem key={i}>
											<ListItemAvatar>
												<Avatar>
													<Class />
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												primary={student.user.first_name}
												secondary={student.user.last_name}
											/>
											<ListItemSecondaryAction>
												<IconButton edge='end' aria-label='delete'>
													<DeleteIcon />
												</IconButton>
											</ListItemSecondaryAction>
										</ListItem>)
							})}
						</List>
					</div>
				</Grid>
				<Grid item className={classes.gridItem} xs={12}>
					<Typography variant='h6' className={classes.title}>
						Add Another Student
					</Typography>
					<div className={classes.demo}>
						<List dense={dense}>
						{students.map((student, i) => {
							return(<ListItem key={i}>
										<ListItemAvatar>
											<Avatar>
												<Class />
											</Avatar>
										</ListItemAvatar>
										<ListItemText
											primary={student.user.first_name}
											secondary={student.user.last_name}
										/>
										<ListItemSecondaryAction>
											<IconButton edge='end' aria-label='add' onClick={(e) => addToClass(student.id)}>
												<Add />
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
