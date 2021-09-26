import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
	return <button style={{ backgroundColor: color }} className="btn" onClick={onClick}>{text}</button>
}

Button.defaultProps = {
	color: '#e7e7e7'
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
	onClick: PropTypes.func.isRequired,
}

export default Button;