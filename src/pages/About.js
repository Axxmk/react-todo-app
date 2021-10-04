import { Link } from 'react-router-dom'
import '../styles/About.css'

const About = () => {
	return (
		<div className="about">
			<h4>Version 1.0.0</h4>
			<Link to="/">Go Back</Link>
		</div>
	)
}

export default About;