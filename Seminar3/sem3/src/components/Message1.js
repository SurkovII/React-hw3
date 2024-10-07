import React from "react";
import PropTypes from "prop-types";

export const Message1 = ({msg}) => {
    return <li>{msg}</li>;
}

Message1.propTypes = {
    msg: PropTypes.string.isRequired,
}