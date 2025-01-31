import './App.css'
import Navbar from './Component/Navbar'
import Headerbar from './Component/Headerbar'
import Mainbar from './Component/Mainbar'
import Footer from './Component/Footer'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Features from './Component/Pages/Features'
import Abouts from './Component/Pages/Abouts'
import Contact from './Component/Pages/Contacts'
import Detail from './Component/Pages/Detail.jsx'
import Drops from './Component/Pages/Drops.jsx'
import Login from './Component/Login.jsx'


function App() {
 

  return (
   <div>
     <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Login/>}/>
          {/* <Route path= '/features' element={<Features/>}/>
          <Route path= '/about' element={<Abouts/>}/>
          <Route path= '/details' element={<Detail/>}/>
          <Route path= '/drops' element={<Drops/>}/>
          <Route path= '/contact' element={<Contact/>}/> */}
        </Routes>
  
       
     </BrowserRouter>
   </div>
  )
}

export default App
