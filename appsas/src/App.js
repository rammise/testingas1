import React, { useState, useEffect } from 'react';
import './App.css';

function App() {




  const [manoPerson, setManoPerson] = useState(
    {
      Vardas: "Petras",
      Pavarde:  "Kiulkis",
      Age: 54
    }
  );

  useEffect(()=>{
    manoPerson.Vardas = 'Lopas'
    setManoPerson({...manoPerson})
 },[])


 const handleClick = (e) => {
  manoPerson.Vardas = 'Avinas';
  manoPerson.Pavarde = 'Idijotas';
  manoPerson.Age = 40;
  setManoPerson({...manoPerson})
}

  return (
      <div className="card text-center m-3">
          <h5 className="card-header">Show My Person</h5>
          <div className="card-body">
            <ul>
              <li>Vardas = {manoPerson.Vardas}</li>
              <li>Pavarde = {manoPerson.Pavarde}</li>
              <li>Amzius = {manoPerson.Age}</li>
            </ul>
          </div>
          <button onClick={handleClick}>Change Names</button>
      </div>
  );


}

export default App;
