import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Border from '../Border/Border';

const AllBorder = () => {

    const [allBorder,setAllBorder] = useState([])
    const [searchText,setSearchText] = useState('')
    const [searchName,setSearchName] = useState('')

    useEffect(()=> {
        fetch('/border.json')
        .then(res => res.json())
        .then(data => {
            setAllBorder(data.filter(bor => bor.group.toLowerCase().includes(searchText.toLowerCase())))
        })
    },[searchText])

    useEffect(()=> {
        fetch('/border.json')
        .then(res => res.json())
        .then(data => {
            setAllBorder(data.filter(bor => bor.name.toLowerCase().includes(searchName.toLowerCase())))
        })
    },[searchName])

    const findBlood = e => {
        const text = e.target.value
        setSearchText(text)
    }
    const findName = e => {
        const text = e.target.value
        setSearchName(text)
    }
    
    return (
        <div className="mt-5">
            <div className="row w-75 mx-auto">
                <div className="col-md-6 col-12 mb-3">
                    <input onChange={findBlood} type="text" className="w-100 p-2" name="" placeholder="রক্তের গ্রুপ খুজুন" id="" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                    <input onChange={findName} type="text" className="w-100 p-2" name="" placeholder="নাম খুজুন" id="" />
                </div>
            </div>
            <Container className="py-5">
                <h2 className="text-center py-3 my-3 text-light bg-success">Total found - {allBorder.length}</h2>
                <Row xs={1} md={3} lg={4} className="g-4">
                    {
                        allBorder.map(b => <Border key={b.id} border={b}></Border>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllBorder;