import React from 'react';
import './Course.css'

const Course = (props) => {
    const {title,img,price} = props.data;
    const addToCart = props.addToCart;
    
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow card-design">
                <div className="img-container mb-4">
                    <img src={img} alt={title} className="card-img-top" />
                    <h5 className="rounded-circle">${price}</h5>
                </div>
                <div className="card-body text-center">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, nisi magnam voluptates repellat sit quaerat.</p>
                    <button className="enroll-btn" onClick={()=>addToCart(props.data)}>
                       Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Course;