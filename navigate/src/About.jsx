import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navb from  './Navb';
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import Table from 'react-bootstrap/Table';
export default function About() {
// array type ka data hai state ke wha means hooks me
    const[data,setData]=useState([]) ;
    useEffect(()=>{
      menu();
    },[]);
    function menu(){
      axios.get("http://172.20.10.3:5000/menucard")
      .then(responce=>{
        let l=responce.data.menucard;
      setData(l);
          console.log(data);
      })
    
    }
    
  return (
    <>

    <Navb/>
    <Card >
      <Card.Header as ="h1">Menu Card(Display all items)</Card.Header>
      
      <Card.Body>

    <Table striped bordered hover>
      <thead>
        
        <tr>
        
          <th>MENU Name</th>
          <th>MENU PRICE</th>
          <th>GROUP NAME</th>
          <th>QTY</th>
<th>views</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item)=>{
        return(<tr>

<td>{item.menu_name}</td>

<td>{item.menu_price}</td>
<td>{item.group_name}</td>
<td>{item.qty_type}</td>

<td><Button variant="primary">item present</Button></td>
        </tr>)          
      })}

      
        

  
        
      </tbody>
    </Table>
    </Card.Body>
    </Card>
    </>
  );
}

