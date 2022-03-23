import React from "react";

const Image = props => {
return (
    <div className="Image">
        <h1>{props.title}</h1>
        <img src={props.img}/>
        
    </div>
)
}

export default Image