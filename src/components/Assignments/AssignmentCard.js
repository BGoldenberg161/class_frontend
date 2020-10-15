import React, { useState } from 'react'
import UpdateAssignmentModal from './UpdateAssignmentModal'
import axios from 'axios'
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Collapsible,
	Heading,
	Paragraph
} from 'grommet'
import { FormUp, FormDown, Trash } from 'grommet-icons'
import AssignmentListModal from './AssignmentListModal'

const AssignmentCard = props => {

	const [open, setOpen] = useState(false)
	const [favorite, setFavorite] = useState(false)

	const authorizationHeader = {
		headers: {'Authorization': `Bearer ${props.token}`}
	}

	const runDelete = (e) => {
		e.preventDefault()
		axios
			.delete(`/api/assignment/${props.assignment.id}`, authorizationHeader)
			.then(res => {
				console.log('delete response', res)
				props.fetchAssignments()
			})
			.catch(err => {
				console.log('Your Delete error is dis: ', err)
			})
	}

	const ExpandButton = ({ ...rest }) => {
		const Icon = open ? FormUp : FormDown
		return (
			<Button
				hoverIndicator='light-4'
				icon={<Icon color='brand' />}
				{...rest}
			/>
		)
	}

	return (
		<Box pad='medium' align='start'>
			<Card elevation='large' width='medium'>
				<CardBody height='small'>
					<Box pad={{ horizontal: 'medium' }} responsive={false}>
						<Heading align='center' level='3' margin={{ vertical: 'medium' }}>
							{props.assignment.name}
						</Heading>
					</Box>
				</CardBody>
				<Box pad={{ horizontal: 'medium' }} responsive={false}>
					<Heading level='3' margin={{ vertical: 'medium' }}>
						{props.assignment.url}
					</Heading>
				</Box>
				<CardFooter>
					<Box direction='row' align='center' gap='small'>
						<Button
							icon={<Trash color={favorite ? 'red' : undefined} />}
							hoverIndicator
							onClick={(e) => {
								setFavorite(!favorite)
								runDelete(e)
							}}
						/>
					</Box>
					<UpdateAssignmentModal
						{...props}
						assignmentId={props.assignment.id}
						currentUser={props.currentUser}
						token={props.token}
						assignment={props.assignment}
						fetchAssignments={props.fetchAssignments}
					/>
					<AssignmentListModal 
						{...props}
						currentUser={props.currentUser}
						token={props.token}
						assignment={props.assignment}
					/>
					<ExpandButton onClick={() => setOpen(!open)} hoverIndicator />
				</CardFooter>
				<Collapsible open={open}>
					<Paragraph margin='medium' color='dark-3'>
						{props.assignment.description}
					</Paragraph>
				</Collapsible>
			</Card>
		</Box>
	)
}

export default AssignmentCard
