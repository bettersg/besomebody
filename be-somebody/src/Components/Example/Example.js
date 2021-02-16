import React from "react";
import styles from "./Example.module.css";
import PropTypes from "prop-types";

const Example = props => {
    return (
        <div className={styles.Example}>
            This is an example! Welcome to {props.title}
        </div>
    );
}

Example.propTypes = {
    title: PropTypes.string,
}

export default Example;