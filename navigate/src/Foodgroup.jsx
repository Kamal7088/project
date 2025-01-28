import Card from 'react-bootstrap/Card';
import Navb from './Navb';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function Foodgroup() {
    const [data, setData] = useState([]);
    const [fd, setFd] = useState('');
    const [fid, setId] = useState("");

    useEffect(() => {
        menuCard();
    }, []);

    function getFid(id) {
        del(id);
    }

    function del(fid) {
        axios.delete("http://172.20.10.3:5000/delfoodgroup", {
            data: { "id": fid }
        })
        .then(response => {
            console.log(response.data);
            alert(response.data.message);
            menuCard();
        })
        .catch(error => {
            console.log(error.response.data);
        });
    }

    function menuCard() {
        axios.get("http://172.20.10.3:5000/Foodgroup")
        .then(response => {
            let l = response.data.data;
            setData(l);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const getName = (e) => {
        setFd(e.target.value);
    }

    function add() {
        axios.post("http://172.20.10.3:5000/addfoodgroup", {
            "group_name": fd,
            "id": 9  // Assuming this ID is hardcoded. Verify if it's required.
        })
        .then(response => {
            let sts = response.data.status;
            if (sts == "200") {
                menuCard();
                alert("Food Group created");
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <>
            <Navb />
            <Card>
                <Card.Header as="h1">Food Group(ADMIN)</Card.Header>
                <input type='text' onChange={getName}></input>
                <Button variant="success" onClick={add}>ADD GROUP</Button>{' '}

                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>GID</th>
                                <th>GROUP NAME</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                return (
                                    <tr key={item.gid}>
                                        <td>{item.gid}</td>
                                        <td>{item.group_name}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => getFid(item.gid)}>Delete</Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
}