import React from 'react'
import {v1 as uuidv1} from "uuid";

const Welcome = ({fullName,age,image,hobbies}) => {
  return (
    <>
    <p>Name: {fullName}</p>
    <p>Age: {age}</p>
    <img width={250} height={300} src={image} alt={fullName} />
    <p>Hobbies: {hobbies.map((hobby)=>{
        
        return <span key={uuidv1()}>{hobby} </span>
    })}</p>
    </>
  )
}

export default Welcome
