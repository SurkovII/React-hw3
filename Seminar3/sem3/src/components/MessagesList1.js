import PropTypes from "prop-types";
import React from "react";
import { Message1 } from "./Message1";


export const MessagesList1 = ({ messages }) => (
    <ul>
        {messages.map(({ id, text }) => (
            <Message1 key={id} msg={text} />

        ))}
    </ul>
)

MessagesList1.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
}