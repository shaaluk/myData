import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompA = () => {

const [num, setNum]= useState();

useEffect(() =>{
   async function getData(){
    const res= await axios.get(`https://jsonplaceholder.typicode.com/users`
    );
    
   }
   getData();
})
  return (
    <>
    <div>Pokemon</div>
     <h2>Choose Value {num} for Pokemon</h2>


    <select value={num} onChange={(event) =>{
        setNum(event.target.value);
    }}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
    </select>
    </>
  )
}

export default CompA;