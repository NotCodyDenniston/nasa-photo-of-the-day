import React from "react";

const Details = props => {
return (
    <div className="Details">
        <h2>{props.date}</h2>
        <select>
            <option>Date</option>
        </select>
        <h4>{props.explanation}</h4>
    </div>
)
}

export default Details