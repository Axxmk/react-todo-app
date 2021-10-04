import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import './styles/Header.css'
import Button from './Button'

const Header = ({ title, onShowTask, showForm }) => {
	const location = useLocation();

	return (
		<header className="header">
			<h1 >{title}</h1>
			{location.pathname === '/' && <Button text={showForm ? 'Close' : 'Add'} color={showForm ? '' : '#d2f6c4'} onClick={onShowTask} />}
		</header>
	);
}

Header.defaultProps = {
	title: "My To-do List",
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header;