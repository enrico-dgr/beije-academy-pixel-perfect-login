import "./inputText.css";

import PropTypes from "prop-types";

const Input = (props) => {
    const isError = props.errorMessage !== "";

    const onChange = (e) => {
        props.onChange(e.target.value);
    };

    return (
        <div className={"input-text"}>
            <input
                type="text"
                placeholder={isError ? props.errorMessage : props.placeholder}
                className={`input-text__input ${
                    isError ? "input-text__input--error" : ""
                }`}
                onChange={onChange}
            />
            {isError && <span className={"input-text__btn-hide-error"}>x</span>}
        </div>
    );
};

Input.defaultProps = {
    errorMessage: "",
    onBlur: () => {},
    onChange: () => {},
    onClickXButton: () => {},
    placeholder: "",
};

Input.propTypes = {
    errorMessage: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClickXButton: PropTypes.func,
    placeholder: PropTypes.string,
};

export default Input;
