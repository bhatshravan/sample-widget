import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import {Share} from "./stories/Share"
let mockData = [
  {
    image: "/Logo.png",
    name: "Everyone at Oslash",
    members: "25",
    email: "oslash@olash.com",
    access: "No access",
    type: "group",
  },
];
let mockDataPerson = [
  {
    image: "/Logo.png",
    name: "Tom Hank",
    email: "tom@olash.com",
    access: "No access",
  },
  {
    image: "/Logo.png",
    name: "Peter Bellosh",
    email: "peter@olash.com",
    access: "No access",
  },
];
let mockDataGroup = [
  {
    image: "/Logo.png",
    name: "Engineering",
    members: "25",
    email: "oslash@olash.com",
    access: "No access",
  },
];


function App(props) {
  return(
    <Share data={mockData} dataPerson={mockDataPerson} dataGroup={mockDataGroup}/>
  )
}
export default App;
