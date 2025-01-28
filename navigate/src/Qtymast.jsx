import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navb from  './Navb';
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import Table from 'react-bootstrap/Table';
export default function Qtymast() {
// array type ka data hai state ke wha means hooks me
    const[data,setData]=useState([]) ;
    useEffect(()=>{
      menucard();
    },[]);
    function menucard(){
      axios.get("http://172.20.10.3:5000/qnty")
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
      <Card.Header as ="h1">Quantity master</Card.Header>
      
      <Card.Body>

    <Table striped bordered hover>
      <thead>
        
        <tr>
        
          <th>QID</th>
          <th>QUANTITY-TYPE</th>
<th>Date</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item)=>{
        return(<tr>

<td>{item.qid}</td>

<td>{item.qty_type}</td>
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

