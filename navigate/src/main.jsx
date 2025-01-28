import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import Login from './Login.jsx';
import About from './About.jsx'
import Foodgroup from './Foodgroup.jsx';
import Contect from './Contect.jsx';
import Home from './Home.jsx'

import Qtymast from './Qtymast';
import Menumast from './Menumast';
// import Home from './Home.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>
<Routes>
  {/* login page defult hi khelega */}
    <Route path="/" element ={<Login/>} />
    {/* login page ke andar hmne ye app call kiya tb yah khelha */}
    <Route path= "/app" element ={<App/>} />
     {/* <Route path= "/Home" element ={<Home/>} />  */}
     <Route path= "/About" element ={<About/>} /> 
     <Route path= "/Contect" element ={<Contect/>} />

     <Route path= "/Home" element ={<Home/>} />
     <Route path= "/Food" element ={<Foodgroup/>} />
     <Route path= "/Qtymast" element ={<Qtymast/>} />
     <Route path= "/Menumast" element ={<Menumast/>} />
     
     
    </Routes>
    </Router>
</StrictMode>,
)
