import React from 'react';
import UpdateClassModal from './UpdateClassModal';
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
import { FormUp, FormDown, Favorite } from 'grommet-icons';

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
						{props.class.name}
					</Heading>
					<Paragraph margin={{ top: 'none' }}>Grade Level: {props.class.gradeLevel}</Paragraph>
					<Paragraph margin={{ top: 'none' }}>Teacher Id: {props.class.teacher}</Paragraph>
				</Box>
				<CardFooter>
					<Box direction='row' align='center' gap='small'>
						<Button
							icon={<Favorite color={favorite ? 'red' : undefined} />}
							hoverIndicator
							onClick={() => {
								setFavorite(!favorite);
							}}
						/>
					</Box>
					<UpdateClassModal {...props} class={props.class} classId={props.class.id} currentUser={props.currentUser} token={props.token} fetchClasses={props.fetchClasses}/>
					<Text size='medium' color='brand'>
						Class Desc.
					</Text>
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
