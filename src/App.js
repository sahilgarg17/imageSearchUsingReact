import React, { createContext, useEffect, useState } from 'react';
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    document.title = `u clicked me ${num} times`
  }, [num])

  return (
  <>
  <button onClick={() => {
      setNum(num+1);
  }}> Click me {num} </button>
  <button onClick={() => {
      setNum2(num2+1);
  }}> Click me {num2} </button>
  {/* <FirstName.Provider value={"Sahil"}>
    <LastName.Provider value={"Garg"}>
    <ComA />
    </LastName.Provider>
  </FirstName.Provider> */}
  </>
  );
};
export default App;
export { FirstName, LastName };