import React from "react";
import { useState } from "react";
const MiddleSection = ({ list,i,setIndex }) => {
  const [isFocused1,setFocus1] = useState(false);
  const [isFocused2,setFocus2] = useState(false);
  const increament = () => {
    if(i<9){
    setIndex(currentValue => currentValue+1);
    console.log(i);
    setFocus2(true);
    setTimeout(()=>{
      setFocus2(false)
    },1000)
    }
  }


  const decreament = () => {
    if(i>0){
    setIndex(currentValue => currentValue-1);
    console.log(i);
    setFocus1(true);
    setTimeout(()=>{
      setFocus1(false)
    },1000)

    }
  }
  return (
    <div className="middle-container">
          <div className="main-midddle">
            <button className={`arrow-button ${ isFocused1 === true ? "focused" : false}`} onClick={decreament}> <span className="arrow arrow-left"></span></button>
            <div className="inner-middle">
            <div className="profile-container">
              <img src={list[i].image} className="profile-img"  alt="student"/>
              <h3>{list[i].name}</h3>
              <h4>{list[i].company}</h4>
            </div>
            <div className="description-container">
              <p>
                Tempor magna labore et non quis anim anim voluptate consequat. Non sit deserunt cillum commodo. 
                Incididunt voluptate aliquip consequat dolor enim reprehenderit consectetur enim.
                aliquip consequat dolor enim reprehenderit consectetur enim.
              </p>
              <h2 className="read-more">Read More</h2>
            </div>
          </div>
          <button className={`arrow-button ${ isFocused2 === true ? "focused" : false}`} onClick={increament} ><span className="arrow arrow-right"></span></button>
          </div>
       <button className="readmore-btn">Read More Testimonial</button>
     
    </div>
  );
};

export default MiddleSection;
