import React from "react";

import Spinner from "../spinner/spinner.component";

const WithSpinner = (WrappedComponent) => {
    const SpinnerRender = ({ isLoading, ...otherProps }) => {
        return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
    };
    return SpinnerRender;
};

export default WithSpinner;
