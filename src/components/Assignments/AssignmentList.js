import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Class from '@material-ui/icons/Class';
import Add from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		maxWidth: 752,
	},
	demo: {
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		margin: theme.spacing(4, 0, 2),
	},
}));

function generate(element) {
	return [0, 1, 2].map(value =>
		React.cloneElement(element, {
			key: value,
		})
	);
}

const AssignmentList = props => {
	const classes = useStyles();
	const [dense, setDense] = React.useState(false);
	const [secondary, setSecondary] = React.useState(false);

	return (
		<>
			<Grid container alignItems='center' alignContent='center' style={{padding: '3vh 3vw'}}>
				<Grid item xs={12} md={6}>
					<Typography variant='h6' className={classes.title}>
						Assigned Classes
					</Typography>
					<div className={classes.demo}>
						<List dense={dense}>
							{generate(
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<Class />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary='Single-line item'
										secondary={secondary ? 'Secondary text' : null}
									/>
									<ListItemSecondaryAction>
										<IconButton edge='end' aria-label='delete'>
											<DeleteIcon />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
							)}
						</List>
					</div>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography variant='h6' className={classes.title}>
						Assign to a New Class
					</Typography>
					<div className={classes.demo}>
						<List dense={dense}>
							{generate(
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<Class />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary='Single-line item'
										secondary={secondary ? 'Secondary text' : null}
									/>
									<ListItemSecondaryAction>
										<IconButton edge='end' aria-label='delete'>
											<Add />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
							)}
						</List>
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default AssignmentList;
