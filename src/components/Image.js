import React from "react";
import styled from 'styled-components'

const Image = props => {
//styles
const ImageDiv = styled.div`

`
const StyledImage = styled.img`
height:900px;
border: 3px #080808 ridge;

`

return (
    <ImageDiv className="Image">
        <h1>{props.title}</h1>
        <StyledImage src={props.img}/>
        
    </ImageDiv>
)
}

export default Image