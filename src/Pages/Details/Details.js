import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'


const Details = () => {
    const {id} = useParams()
    const [user,setUser] = useState({})

    useEffect(()=>{
        fetch('/border.json')
        .then(res => res.json())
        .then(data => setUser(data.find(sin => parseInt(sin?.id) === parseInt(id))))
    },[id])
    return (
        <Container>
            <div className="row p-3 my-5 cusDetails">
                <div className="col-12 col-md-4">
                    <div style={{height:'350px'}}>
                        <img className="h-100 w-100" src={user?.img} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className="detText">
                        <h4 className="mb-3">ID : {user?.id}</h4>
                        <h4 style={{fontFamily:"'Oswald', sans-serif"}} className="mb-3 fs-1 fw-bold p-3 bg-success text-light">Name : {user.name}</h4>
                        <h4 className="mb-3">Mess Member ? - {user?.running}</h4>
                        <h4 className="mb-3">Blood Group - {user?.group}</h4>
                        <h5 className="mb-3">Phone Number - {user?.mobile}</h5>
                        <button className="text-center border fw-bold rounded bg-warning p-2"><a style={{textDecoration:'none',color:'black'}} href={`tel:${user?.mobile}`}>Make a call</a></button>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default Details;