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
                            <h5 className="bg-warning p-2">প্রয়োজনীয় তথ্য সমূহ</h5>
                            <Link className="text-decoration-none text-light"><p>সিনিয়র বর্ডার</p></Link>
                            <Link className="text-decoration-none text-light"><p>মেসের পরিবেশ</p></Link>
                            <Link className="text-decoration-none text-light"><p>আভ্যন্তরীণ নিয়মনীতি</p></Link>
                            <Link className="text-decoration-none text-light"><p>সুযোগ সুবিধাসমূহ</p></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div>
                            <h5 className="bg-warning p-2">দায়িত্ব সমূহ ও আভ্যন্তরীণ তথ্য</h5>
                            <Link className="text-decoration-none text-light"><p>বাজার লিস্ট</p></Link>
                            <Link className="text-decoration-none text-light"><p>গতমাসের মিলের হিসাব</p></Link>
                            <Link className="text-decoration-none text-light"><p>উন্নয়ন বিলের হিসাব</p></Link>
                            <Link className="text-decoration-none text-light"><p>চালের হিসাব</p></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div>
                            <h5 className="bg-warning p-2">ছোট গ্যালারী</h5>
                            <div className="gallery">
                                <img className="w-100" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/178895727_1410284335992227_4871337539630206727_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tATLgnOmOc4AX9kUB19&_nc_ht=scontent.fdac7-1.fna&oh=c88af7951c82afeb940fee084fb3e608&oe=618C5B8Bhttps://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/178895727_1410284335992227_4871337539630206727_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tATLgnOmOc4AX9kUB19&_nc_ht=scontent.fdac7-1.fna&oh=c88af7951c82afeb940fee084fb3e608&oe=618C5B8B" alt="" />
                                <img className="w-100" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/181135220_168471561849998_6771920702238392001_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=rbLUGJ3s10gAX9j1yCu&_nc_ht=scontent.fdac7-1.fna&oh=c03b7f2ad7cb26a204334157983accc2&oe=618E45D5" alt="" />
                                <img className="w-100" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/54236843_2271188033198660_5264968763400257536_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=lN_JC-6sT3MAX8SBgw1&tn=HxA1pJSM8Bsh9WjD&_nc_ht=scontent.fdac7-1.fna&oh=91563ee8699e6fbf05afabf56c3023fb&oe=618E3ACC" alt="" />
                                <img className="w-100" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/147234689_2817035911895823_4823661144095639848_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=cnjeSuBJsjUAX87mcms&_nc_ht=scontent.fdac7-1.fna&oh=b65b25cb1f2ed2329d5e3e520e9671d3&oe=618D42BD" alt="" />
                                <img className="w-100" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/240850785_975115599714035_3515936888195942460_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=QRv9nSPKZpYAX8qCkxq&_nc_ht=scontent.fdac7-1.fna&oh=8537044915600818d236bec44f1e9183&oe=618E9090" alt="" />
                                <img className="w-100" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/65960449_150478002740929_8386491341332283392_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=qeofcLYum2QAX-hR-hr&_nc_ht=scontent.fdac7-1.fna&oh=e1057a7471c049af0dd5bb8232e96187&oe=618E566F" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </Container>
            </div>
            <div className="py-3 bg-danger">
                    <p className="text-center text-light p-0 m-0">All rights reserved by bipul chandro Roy</p>
            </div>
        </div>
    );
};

export default Footer;