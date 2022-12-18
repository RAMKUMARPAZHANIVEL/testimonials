import React from 'react'

const RightSection = ({list,index}) => {
  return (
    <div className="left-container">
      {/* <h2>left</h2> */}
      {list.map((elem,i) => {
        return(
          <div key={i}> 
            <img src={elem.image} className={`${i%2 !== 0 ?"even-img" : false}
                  ${i === Math.floor(list.length/2) ? "middle-img" : false} 
                  ${elem.id === index+1 ? "active" : false}`} alt="studentsjpg"
              />
            {/* <h2>{elem.description}</h2> */}
          </div>
        );
      })}
    </div>
  )
}

export default RightSection