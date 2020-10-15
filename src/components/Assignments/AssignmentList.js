import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Class from "@material-ui/icons/Class"
import Add from "@material-ui/icons/Add"
import DeleteIcon from "@material-ui/icons/Delete"
import axios from "axios"

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


const AssignmentList = props => {

	const classes = useStyles()
	const dense = false
	const [classrooms, setClassrooms] = useState([])
	const [assignedClassrooms, setAssignedClassrooms] = useState([])
	
	const authorizationHeader = {
		headers: {'Authorization': `Bearer ${props.token}`}
	}

	useEffect((props) => {

		const fetchData = async () => {
			const getAssignedClasses = await axios(
			  `/api/view-classrooms-assignments/${props.assignment.id}`,
			  authorizationHeader
			  )
			const getTeachersClasses = await axios(
			  `/api/classrooms/`,
			  authorizationHeader
			  )
			setClassrooms(getTeachersClasses.data)
			setAssignedClassrooms(getAssignedClasses.data)
		}
		fetchData()
	}, [props.token, props.currentUser])

	const fetchData = async () => {
		const getAssignedClasses = await axios.get(
		  `/api/view-classrooms-assignments/${props.assignment.id}`,
		  authorizationHeader
		  )
		const getTeachersClasses = await axios.get(
		  `/api/classrooms/`,
		  authorizationHeader
		  )
		setClassrooms(getTeachersClasses.data)
		console.log(getTeachersClasses.data)
		setAssignedClassrooms(getAssignedClasses.data)
		console.log(getAssignedClasses.data)
	}

	const addToClass = (id) => {
		console.log(id)
		console.log(props.assignment.id)
		axios
			.post('api/create-classrooms-assignments/', {
				classroom: id,
				assignment: props.assignment.id
			},
			authorizationHeader
			)
			.then(res => {
				console.log(res)
				fetchData()
			})
			.catch(err => {
				console.log('Error while adding to class: ', err)
			})
	}

	return (
		<>
			<Grid container spacing={2} className={classes.root} alignItems='center' alignContent='center' style={{padding: '3vh 3vw'}}>
				<Grid item className={classes.gridItem} xs={12}>
					<Typography variant='h6' className={classes.title}>
						Assigned Classes
					</Typography>
					<div className={classes.demo}>
						<List dense={dense}>
							{assignedClassrooms.map((classroom, i) => {
								return(<ListItem key={i}>
											<ListItemAvatar>
												<Avatar>
													<Class />
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												primary={classroom.name}
												secondary={classroom.gradeLevel}
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
						Assign to a New Class
					</Typography>
					<div className={classes.demo}>
						<List dense={dense}>
						{classrooms.map((classroom, i) => {
							return(<ListItem key={i}>
										<ListItemAvatar>
											<Avatar>
												<Class />
											</Avatar>
										</ListItemAvatar>
										<ListItemText
											primary={classroom.name}
											secondary={classroom.gradeLevel}
										/>
										<ListItemSecondaryAction>
											<IconButton edge='end' aria-label='add' onClick={(e) => addToClass(classroom.id)}>
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

export default AssignmentList
