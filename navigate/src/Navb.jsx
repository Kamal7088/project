import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';

import Foodgroup from './Foodgroup.jsx';
import Qtymast from './Qtymast';

import Menumast from './Menumast';
export default function Navb(){
    return(
        
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           <Navbar.Brand href="#Home"> <Link to="/App">Home</Link></Navbar.Brand>
           <Navbar.Brand>  <Link to="/About">About</Link></Navbar.Brand>
           <Navbar.Brand> <Link to="/Contect">Contect</Link></Navbar.Brand>

           <Navbar.Brand> <Link to="/Food">Foodgroup</Link></Navbar.Brand>

           <Navbar.Brand> <Link to="/Qtymast">Qtymast</Link></Navbar.Brand>

           <Navbar.Brand> <Link to="/Menumast">MENU MASTER</Link></Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    
    )
}