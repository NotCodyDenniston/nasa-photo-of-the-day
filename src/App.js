import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import Image from "./components/Image";
import Details from "./components/Details";
import styled from 'styled-components'
//import { useEffect } from "react/cjs/react.production.min";

function App() {
const [nasaData, setNasaData] = useState([])
const [selectedDate, setSelectedDate] = useState(null)


useEffect(() => {
axios.get('https://api.nasa.gov/planetary/apod?api_key=IXS4KfbIyhdSdikMpFQvOHPYGt1LDvqtgMEHa6bY')
.then(res => {
  setNasaData(res.data)
})
}, [])

// useEffect(() => {

// }, [])

//Styled components
const MainDiv = styled.div`
display: flex;
background-color:#101a1a;
color: ghostwhite;

`
  return (
    <MainDiv className="App">
      <Details date={nasaData.date} explanation={nasaData.explanation}/>
      <Image img={nasaData.url} title={nasaData.title}/>
    </MainDiv>
  );
}

export default App;
