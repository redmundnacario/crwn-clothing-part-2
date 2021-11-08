import "./form-input.component.scss";
import PropTypes from "prop-types";

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {label ? (
            <label
                className={`${
                    otherProps.value.length ? "shrink" : ""
                } form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
);

FormInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.node,
};

export default FormInput;
