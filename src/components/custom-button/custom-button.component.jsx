import "./custom-button.component.scss";

import PropTypes from "prop-types";

const CustomButton = ({
    children,
    isGoogleSignIn,
    inverted,
    ...otherProps
}) => (
    <button
        className={`${inverted ? "inverted " : ""}${
            isGoogleSignIn ? "google-sign-in " : ""
        }custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);
CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    isGoogleSignIn: PropTypes.bool,
    inverted: PropTypes.bool,
};

export default CustomButton;
