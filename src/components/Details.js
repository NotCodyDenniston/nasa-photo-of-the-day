import React from "react";
import styled from 'styled-components'

const Details = props => {
    //styled components
const StyledDiv = styled.div `
margin-right:10%;
margin-left:5%;
padding:0 50px;
justify-content:center;
border:black solid 1px;
background-color:#080808;

`
const Styledh3 = styled.h3`
width:400px;
justify-content:center;
font-size:1.4rem;
`

return (
    <StyledDiv className="Details">
        <h2>{props.date}</h2>
        <select>
            <option>Date</option>
        </select>
        <Styledh3>{props.explanation}</Styledh3>
    </StyledDiv>
)
}

export default Details