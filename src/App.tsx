import React from 'react';
import './App.css';
import {Person, Country} from "./components/Person";

function App() {
  const getAge = (name: string): number => {
    return 9;
  }

  return (
    <div className="App">
        <Person 
                name="Peter"
                email="pedro@gmail.com"
                age={21}
                isMarried={true}
                friends={["jessica","jake"]}
                country={Country.Brazil}

            />
    </div>
  );
}

export default App;
