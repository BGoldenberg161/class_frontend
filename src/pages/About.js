import React, { useContext } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import {
	Anchor,
	Avatar,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Box,
	Heading,
	Paragraph,
	Grid,
	ResponsiveContext,
} from 'grommet';
import { Linkedin, Github, Transaction } from 'grommet-icons';
import Yoel from '../assets/Yoel.jpeg';
import Branden from '../assets/Branden.jpeg';
import Channee from '../assets/Channee.jpeg';
import Sameh from '../assets/Sameh.jpeg';

const About = props => {
	const size = useContext(ResponsiveContext);
	return (
		<div>
			<Box pad='medium' align='center' justify='center'>
				<Heading level='3' margin={{ vertical: 'medium' }}>
					About c<span style={{ color: 'green' }}>ℓ</span>ass
				</Heading>
				<Paragraph align='center' margin={{ top: 'none' }}>
					A full stack application with both teachers and students in mind, a
					School System Platform created to help streamline a teachers workload,
					deploying assignments and quizes with ease, the ability to easily
					grade and leave feedback, a collective of assignment resources at the
					touch of every teachers fingertip as well as a highly effective
					environment for students to learn all in one place without the
					distraction of outsourcing to different platforms. The true one-stop
					shop, Welcome to cℓass.
				</Paragraph>
			</Box>
			<Box pad='medium' align='center' justify='center'>
				<Heading level='3' margin={{ vertical: 'medium' }}>
					Meet the D<span style={{ color: 'green' }}>e</span>vs
				</Heading>
			</Box>
			<Box
				direction='row'
				pad='medium'
				align='center'
				justify='center'
				gap='small'
			>
				<Grid
					direction='rows'
					columns={size !== 'small' ? 'small' : '100%'}
					gap='small'
				>
					<Card height='small' width='small' background='light-1'>
						<CardHeader alignSelf='center' pad='medium'>
							<Avatar src={Yoel} />
						</CardHeader>
						<CardBody pad='medium'>
							<b>Unicorn Engineer.</b>
						</CardBody>
						<CardFooter pad={{ horizontal: 'small' }} background='light-2'>
							<Anchor
								href='https://www.linkedin.com/in/yoelmorad/'
								target='_blank'
								icon={<Linkedin color='#2867B2' />}
								hoverIndicator
							/>
							<Transaction />
							<Anchor
								href='https://github.com/yoel0'
								target='_blank'
								icon={<Github color='plain' />}
								hoverIndicator
							/>
						</CardFooter>
					</Card>
					<Card height='small' width='small' background='light-1'>
						<CardHeader alignSelf='center' pad='medium'>
							<Avatar src={Branden} />
						</CardHeader>
						<CardBody pad='medium'>
							<b>Tech Lead Engineer.</b>
						</CardBody>
						<CardFooter pad={{ horizontal: 'small' }} background='light-2'>
							<Anchor
								href='https://www.linkedin.com/in/bgoldenberg161/'
								target='_blank'
								icon={<Linkedin color='#2867B2' />}
								hoverIndicator
							/>
							<Transaction />
							<Anchor
								href='https://github.com/BGoldenberg161'
								target='_blank'
								icon={<Github color='plain' />}
								hoverIndicator
							/>
						</CardFooter>
					</Card>
					<Card height='small' width='small' background='light-1'>
						<CardHeader alignSelf='center' pad='medium'>
							<Avatar src={Channee} />
						</CardHeader>
						<CardBody pad='medium'>
							<b>Scope Engineer.</b>
						</CardBody>
						<CardFooter pad={{ horizontal: 'small' }} background='light-2'>
							<Anchor
								href='https://www.linkedin.com/in/channeemath562/'
								target='_blank'
								icon={<Linkedin color='#2867B2' />}
								hoverIndicator
							/>
							<Transaction />
							<Anchor
								href='https://github.com/chamon562'
								target='_blank'
								icon={<Github color='plain' />}
								hoverIndicator
							/>
						</CardFooter>
					</Card>
					<Card height='small' width='small' background='light-1'>
						<CardHeader alignSelf='center' pad='medium'>
							<Avatar src={Sameh} />
						</CardHeader>
						<CardBody pad='medium'>
							<b>T-Shaped Engineer.</b>
						</CardBody>
						<CardFooter pad={{ horizontal: 'small' }} background='light-2'>
							<Anchor
								href='https://www.linkedin.com/in/sameh-kinawy/'
								target='_blank'
								icon={<Linkedin color='#2867B2' />}
								hoverIndicator
							/>
							<Transaction />
							<Anchor
								href='https://github.com/kinawy'
								target='_blank'
								icon={<Github color='plain' />}
								hoverIndicator
							/>
						</CardFooter>
					</Card>
				</Grid>
			</Box>
			<Box pad='medium' align='center' justify='center'>
				<Heading level='3' margin={{ vertical: 'medium' }}>
					Watch the J<span style={{ color: 'green' }}>o</span>urney
				</Heading>
				<VideoPlayer />
			</Box>
		</div>
	);
};

export default About;
