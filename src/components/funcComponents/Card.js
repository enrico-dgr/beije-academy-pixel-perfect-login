import PropTypes from 'prop-types';

const Button = (props) => {

    return (
        <div
            className={props.className}>

            {props.children}

        </div>
    )

}

Button.defaultProps = {
    label: "Click!"
};

Button.propTypes = {
    children: PropTypes.node
}

export default Button;