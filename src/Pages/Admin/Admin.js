import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Admin = () => {
    const [eachBorder,setEachBorder] = useState([])

    useEffect(()=> {
        fetch('/border.json')
        .then(res => res.json())
        .then(data => setEachBorder(data))
    },[])

    const addNewBorder = (e) => {
        alert('This feature is only for admin')
        e.preventDefault()
    }
    return (
        <Container>
            
            <div className="row">
                
                <div className="col-12 col-md-5">
                <img src="https://media3.giphy.com/media/6hhjEPrM3AL84/source.gif" alt="" className="w-100" />
                </div>
                <div className="col-12 col-md-7">
                <h3 className=" text-primary my-3">Add a new member</h3>
                <Form className="py-3" onSubmit={addNewBorder}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Border Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Control type="text" placeholder="Blood group" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file"/>
                    </Form.Group>

                    <Button variant="danger" type="submit">
                        Add as new member
                    </Button>
                </Form>
                </div>
            </div>

            <div>
            <h3 className="text-center text-primary my-3">Remove an existing member</h3>
                    <div className="py-3">
                    <Row xs={1} md={2} className="g-4">
                    {
                        eachBorder.map(border => <Col key={border.id} className="d-flex align-items-center justify-content-between my-2">
                            <h6 className="m-0 p-0">{border?.id}.{border?.name}</h6>
                            <div>
                            <Button className="mx-1" onClick={addNewBorder} variant="success" type="submit">Update info</Button>
                            <Button className="mx-1" onClick={addNewBorder} variant="danger" type="submit">Remove</Button>
                            </div>
                        </Col>)
                    }
                    </Row>
                    </div>
            </div>
        </Container>
    );
};

export default Admin;