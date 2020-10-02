import React from 'react';
import UpdateClassModal from './UpdateClassModal';
import ClassListModal from './ClassListModal';
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Collapsible,
	Heading,
	Image,
	Paragraph,
	Text,
} from 'grommet';
import { FormUp, FormDown, Trash } from 'grommet-icons';

const ClassCard = props => {
	const [open, setOpen] = React.useState(false);
	const [favorite, setFavorite] = React.useState(false);
	
	const ExpandButton = ({ ...rest }) => {
		const Icon = open ? FormUp : FormDown;
		return (
			<Button
				hoverIndicator='light-4'
				icon={<Icon color='brand' />}
				{...rest}
			/>
		);
	};
	return (
		<Box pad='medium' align='start'>
			<Card elevation='large' width='medium'>
				<CardBody height='small'>
					<Image
						fit='cover'
						src='https://nces.ed.gov/programs/coe/images/nav/coe_hp_new.png'
						a11yTitle='classpicture'
					/>
				</CardBody>
				<Box pad={{ horizontal: 'medium' }} responsive={false}>
					<Heading level='3' margin={{ vertical: 'medium' }}>
						{props.classroom.name}
					</Heading>
					<Paragraph margin={{ top: 'none' }}>Grade Level: {props.classroom.gradeLevel}</Paragraph>
					<Paragraph margin={{ top: 'none' }}>Teacher Id: {props.classroom.teacher}</Paragraph>
				</Box>
				<CardFooter>
					<Box direction='row' align='center' gap='small'>
						<Button
							icon={<Trash color={favorite ? 'red' : undefined} />}
							hoverIndicator
							onClick={() => {
								setFavorite(!favorite);
							}}
						/>
					</Box>
					<UpdateClassModal
						{...props}
						classroom={props.classroom}
						currentUser={props.currentUser}
						token={props.token}
						fetchClasses={props.fetchClasses}/>
					<ClassListModal 
						{...props}
						currentUser={props.currentUser}
						token={props.token}
						classroom={props.classroom}
					/>
					<ExpandButton onClick={() => setOpen(!open)} hoverIndicator />
				</CardFooter>
				<Collapsible open={open}>
					<Paragraph margin='medium' color='dark-3'>
						English and Language Arts high school classes provide an important
						foundation for college success – regardless of what you plan to
						study or what career path you’d like to take, you’ll need strong
						reading comprehension and the ability to communicate clearly through
						your writing.
					</Paragraph>
				</Collapsible>
			</Card>
		</Box>
	);
};

export default ClassCard;
