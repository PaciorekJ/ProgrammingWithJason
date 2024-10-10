import React from "react";

const numbers = ({ numbers }) => {
    return (
        <ul>
            {numbers.map((number) => (
                <li>{number}</li>
            ))}
        </ul>
    );
};

export default numbers;
