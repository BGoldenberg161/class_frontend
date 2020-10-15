import React, { useState, useEffect } from 'react'
import ClassCard from '../components/Classes/ClassCard'
import { Box, ResponsiveContext, Grid } from 'grommet'
import AddClassModal from '../components/Classes/AddClassModal'
import axios from 'axios'

const Class = props => {

	const [classes, setClasses] = useState([])

	const authorizationHeader = {
		headers: { Authorization: `Bearer ${props.token}` }
	}

	const fetchClasses = () => {
		axios
			.get('/api/classrooms/', authorizationHeader)
			.then(res => {
				setClasses(res.data)
				console.log('Here is the class data: ', res.data)
			})
			.catch(err =>
				console.log(err, "You've hit an error in the axios call for classes")
			)
	}

	useEffect(() => {

		const authorizationHeader = {
			headers: { Authorization: `Bearer ${props.token}` }
		}

		axios
			.get('/api/classrooms/', authorizationHeader)
			.then(res => {
				setClasses(res.data)
				console.log('Here is the class data: ', res.data)
			})
			.catch(err =>
				console.log(err, "You've hit an error in the axios call for classes")
			)
	}, [props.token, props.currentUser])

	return (
		<>
			{props.user.is_teacher && (
				<>
					<Box direction='row' justify='center' margin={{ top: 'large' }}>
						<AddClassModal
							{...props}
							currentUser={props.currentUser}
							token={props.token}
							fetchClasses={fetchClasses}
						/>
					</Box>
				</>
			)}
			<Box direction='row' justify='center' margin={{ top: 'large' }}>
				<ResponsiveContext>
					{size => {
						if (size === 'small') {
							return (
								<Grid columns={['auto']}>
									{classes.map((c, i) => {
										return (
											<ClassCard
												key={i}
												classroom={c}
												{...props}
												currentUser={props.currentUser}
												token={props.token}
												fetchClasses={fetchClasses}
											/>
										)
									})}
								</Grid>
							)
						} else if (size === 'medium') {
							return (
								<Grid columns={['auto', 'auto']}>
									{classes.map((c, i) => {
										return (
											<ClassCard
												key={i}
												classroom={c}
												{...props}
												currentUser={props.currentUser}
												token={props.token}
												fetchClasses={fetchClasses}
											/>
										)
									})}
								</Grid>
							)
						} else {
							return (
								<Grid columns={['auto', 'auto', 'auto']}>
									{classes.map((c, i) => {
										return (
											<ClassCard
												key={i}
												classroom={c}
												{...props}
												currentUser={props.currentUser}
												token={props.token}
												fetchClasses={fetchClasses}
											/>
										)
									})}
								</Grid>
							)
						}
					}}
				</ResponsiveContext>
			</Box>
		</>
	)
}

export default Class
