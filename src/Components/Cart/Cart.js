import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const courses = props.courses;
    const total = courses.reduce((acc, course) => acc + course.price,0)
    return (
        <div className="cart">
           <h1>
              {element} 
              <sup>{courses.length}</sup>
           </h1>
           <div className="text-center">
                {
                    courses.map((course,index) => <h6 key={index}>{course.title}: ${course.price}</h6>)
                }
                <h3>Total Fee: ${total}</h3>
                <button className="enroll-btn">Enroll Now</button>
           </div>
        </div>
    );
};

export default Cart;