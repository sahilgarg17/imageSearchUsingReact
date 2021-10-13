import React, { useContext } from 'react';
import ComC from './ComC';
import { FirstName, LastName } from './App';

const ComB = () => {
    const fName = useContext(FirstName);
    const sName = useContext(LastName);
  return (
      <h1> My name is {fName} {sName} </h1>
  )
}
export default ComB;