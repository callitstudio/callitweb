import React from 'react'

const Card = (props) => {
    return (
        <div >
          <img src={props.img} alt=""  className="it-img"/>
          <h1>{props.title}</h1>
          <p>{props.des}</p>
        </div>
      );
}

export default Card