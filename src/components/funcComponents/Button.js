import PropTypes from "prop-types";

const Button = (props) => {
    const handleClick = (e) => {
        if (props.onClick !== undefined) props.onClick(e);
    };

    return (
        <button className={props.className} onClick={handleClick}>
            {props.label}
        </button>
    );
};

Button.defaultProps = {
    label: "Click!",
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    class: PropTypes.string,
};

export default Button;
