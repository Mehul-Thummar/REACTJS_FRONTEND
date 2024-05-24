import './App.css';
import Com_A from './components/Com_A';
import { createContext } from 'react';

const data = createContext()
const data1 = createContext()

/* contextAPI :- createContext  , Provider   ,Consumer */

function App() {

  const name = "kishor"
  const Age = 90

  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={Age}>
          <Com_A />
        </data1.Provider>
      </data.Provider>
    </>
  )
}

export default App;
export { data, data1 }