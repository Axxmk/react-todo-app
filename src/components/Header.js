import PropTypes from 'prop-types'
import './styles/Header.css'
import Button from './Button';

const Header = ({ title }) => {
	const onClick = (e) => {
		console.log('button click!');
	}

	return (
		<header className="header">
			<h1 >{title}</h1>
			<Button text="Add" color="#d2f6c4" onClick={onClick} />
		</header>
	);
}

Header.defaultProps = {
	title: "My To-do List"
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header;