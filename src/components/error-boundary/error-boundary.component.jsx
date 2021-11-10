import React from "react";

import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
            error: undefined,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
        this.setState({ error: error.message });
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer
                        imageUrl={"https://i.imgur.com/yW2W9SC.png"}
                    />
                    <ErrorImageText>
                        {this.state.error
                            ? this.state.error
                            : "Something went wrong"}
                    </ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
