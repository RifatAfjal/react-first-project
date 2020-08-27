import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FakeData from './Components/FakeData/FakeData';
import Course from './Components/Courses/Course';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';

function App() {
  const [courses,setCourse] = useState([]);

  const addToCart = (curCourse) =>{
    const update = [...courses,curCourse];
    setCourse(update);
  };
  return (
    <div>
       <Cart courses ={courses} ></Cart>
       <div className="container">
          
          <Header></Header>
          <div className="row">
            {
              FakeData.map((data,index) => <Course key={index} data={data} addToCart={addToCart}></Course>)
            }
          </div>
       </div>
    </div>
  );
}

export default App;
