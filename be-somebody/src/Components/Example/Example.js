import React from "react";
import "./Example.css";
import PropTypes from "prop-types";

const Example = props => {
    return (
        <div className="Example">
            This is an example! Welcome to {props.title}
        </div>
    );
}

Example.propTypes = {
    title: PropTypes.string,
}

export default Example;