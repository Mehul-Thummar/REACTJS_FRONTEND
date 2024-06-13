import './App.css'
import Home from './pages/Home'
import Axios from './pages/Axios'
import About from './pages/About'
import Contact from './pages/Contact'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Error404 from './pages/Error404'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Axios" element={<Axios />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Edit" element={<Edit />}></Route>
            <Route path="/Add" element={<Add />}></Route>
            <Route path="/*" element={<Error404 />}></Route>

          </Routes>
        </BrowserRouter>
      </div>




    </>
  )
}

export default App