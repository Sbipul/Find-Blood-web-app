import React from 'react';
import { Badge, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Border.css'


const Border = (props) => {
    const {id,name,group,img} = props.border
    console.log(props.border)
    const history = useHistory()

    const showDetails = () => {
        history.push(`/all/${id}`)
    }
    console.log(img)
    return (
        <Col>
            <Card className="cus_bg">
                <Card.Img variant="top" style={{height:'300px',objectFit:'cover'}} src={img || "https://forums.oneplus.net/attachments/op1-png.345465/"} />
                <Card.Body>
                <Card.Title className="text-center">{name}</Card.Title>
                <Card.Text className="text-center"><Badge className='p-2 fs-5' bg="primary">Blood Group</Badge> - <Badge className='p-2 fs-5' bg="danger">{group}</Badge></Card.Text>
                <div className="mx-auto w-75">
                    <button className="w-100 text-center border fw-bold rounded text-dark bg-warning p-2" onClick={showDetails}>View details</button>
                </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Border;