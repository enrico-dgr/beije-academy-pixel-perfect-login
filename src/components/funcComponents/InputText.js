import "./inputText.css";

import PropTypes from "prop-types";

const InputText = (props) => {
    const isError = props.errorMessage !== "";

    const onChange = (e) => {
        props.onChange(e.target.value);
    };

    return (
        <div className={"input-text"}>
            {props.isValid && <div className="input-text__valid-overlay"></div>}
            <input
                // autocomplete
                name={props.name}
                placeholder={isError ? props.errorMessage : props.placeholder}
                className={`input-text__input ${
                    isError
                        ? "input-text__input--error"
                        : props.isValid
                        ? "input-text__input--valid"
                        : ""
                }`}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onChange={onChange}
                type={props.type}
            />
            {isError && (
                <span
                    className={"input-text__icon input-text__icon--hide-error"}
                >
                    <div onClick={props.onClickXButton}>&#10005;</div>
                </span>
            )}
            {props.isValid && (
                <span
                    className={"input-text__icon input-text__icon--valid-check"}
                >
                    <div>&#10003;</div>
                </span>
            )}
        </div>
    );
};

InputText.defaultProps = {
    errorMessage: "",
    isValid: false,
    name: "",
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    onClickXButton: () => {},
    placeholder: "",
    type: "text",
};

InputText.propTypes = {
    errorMessage: PropTypes.string,
    isValid: PropTypes.bool,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onClickXButton: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};

export default InputText;
