import PropTypes from 'prop-types';

const Button = (props) => {

    const handleClick = (e) => {
        if (props.callback !== undefined)
            props.callback(e)
    }

    return (
        <button
            className={props.className}
            onClick={handleClick}
        >
            {
                props.label
            }
        </button>
    )

}

Button.defaultProps = {
    label: "Click!"
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    callback: PropTypes.func,
    class: PropTypes.string
}

export default Button;