import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="py-5 footer shadow-lg">
            <Container>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div>
                            <div className="w-50 mx-auto">
                                <img src="https://i.ibb.co/NrnsGKk/pngtree-blue-green-leaf-logo-element-png-image-2981137-removebg-preview.png" alt="" className="w-100" />
                            </div>
                            <h2 className="text-center pt-2">সৌভিক ছাত্রাবাস</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div>
                            <h5 className="text-warning p-2">প্রয়োজনীয় লিঙ্ক সমূহ</h5>
                            {/* <Link className="text-decoration-none text-light"><p>সিনিয়র বর্ডার</p></Link> */}
                            <Link to="/all" className="text-decoration-none text-light"><p>রক্ত খুজুন (রক্ত গ্রুপ দিয়ে)</p></Link>
                            <Link to="/all" className="text-decoration-none text-light"><p>রক্ত খুজুন (নাম দিয়ে)</p></Link>
                            <Link to="/admin" className="text-decoration-none text-light"><p>নতুন সদস্য যুক্ত করুন</p></Link>
                            {/* <Link className="text-decoration-none text-light"><p>আভ্যন্তরীণ নিয়মনীতি</p></Link>
                            <Link className="text-decoration-none text-light"><p>সুযোগ সুবিধাসমূহ</p></Link> */}
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div>
                            <h5 className="text-warning p-2">নেভিগেশিন</h5>
                            <Link to="/" className="text-decoration-none text-light"><p>হোম</p></Link>
                            <Link to="/about" className="text-decoration-none text-light"><p>বিস্তারিত</p></Link>
                            <Link to="/admin" className="text-decoration-none text-light"><p>এডমিন</p></Link>
                            <Link to="/all" className="text-decoration-none text-light"><p>সকল সদস্য</p></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div>
                            <h5 className="text-warning p-2">ছোট গ্যালারী</h5>
                            <div className="gallery">
                                <img className="w-100" src="https://i.ibb.co/16vDQbx/manosda.jpg" alt="" />
                                <img className="w-100" src="https://i.ibb.co/28n8kMH/181135220-168471561849998-6771920702238392001-n.jpg" alt="" />
                                <img className="w-100" src="https://i.ibb.co/1TKKT73/alokda.jpg" alt="" />
                                <img className="w-100" src="https://i.ibb.co/r06c02h/bo.jpg" alt="" />
                                <img className="w-100" src="https://i.ibb.co/QY4NyJ7/204328692-111516761183399-3103209040270101684-n.jpg" alt="" />
                                <img className="w-100" src="https://i.ibb.co/5jv4mc2/257233194-3007865882789535-1282226972124646804-n.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </Container>
            </div>
            <div className="py-3 darK">
                    <p className="text-center text-light p-0 m-0">All rights reserved by bipul chandro Roy</p>
            </div>
        </div>
    );
};

export default Footer;