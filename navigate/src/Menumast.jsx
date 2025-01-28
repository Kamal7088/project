
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navb from  './Navb';
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import Table from 'react-bootstrap/Table';
export default function Menumast() {
// array type ka data hai state ke wha means hooks me
    const[data,setData]=useState([]) ;
    useEffect(()=>{
      menucard();
    },[]);
    function menucard(){
      axios.get("http://172.20.10.3:5000/menu")
      .then(responce=>{
        let l=responce.data.data;
      setData(l);
          console.log(data);
      })
    
    }
    
  return (
    <>

    <Navb/>
    <Card >
      <Card.Header as ="h1">Menu Master(For Order)</Card.Header>
      
      <Card.Body>

    <Table striped bordered hover>
      <thead>
        
        <tr>
        
          <th>MID</th>
          <th>MENU NAME</th>
<th>MENU PRICE</th>
<th>DATE</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item)=>{
        return(<tr>

<td>{item.gid}</td>

<td>{item.menu_name}</td>

<td>{item.menu_price}</td>



<td>{item.created_at}</td>
        </tr>)          
      })}

      
        

  
        
      </tbody>
    </Table>
    </Card.Body>
    </Card>
    </>
  );
}

