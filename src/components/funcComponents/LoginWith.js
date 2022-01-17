import PropTypes from 'prop-types';

const Button = (props) => {

    const handleClick = (e) => {
        if (props.onClick !== undefined)
            props.onClick(e)
    }

    return (
        <div className={props.class}>
            <img src={props.src} onClick={handleClick} />
        </div>
    )

}

Button.propTypes = {
    img: PropTypes.img.isRequired,
    onClick: PropTypes.func,
    class: PropTypes.string
}

export default Button;