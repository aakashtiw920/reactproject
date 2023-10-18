import React from 'react'
import './Card.css'
const Card = ({id,image,name,value,value1}) => {
  return (
      <div className="circle" class="p-1 border rounded-lg shadow-md">
        <div class="flex items-center">
          <div className='circle-container'>
          <img src={image} className='image'></img>
          </div>
           
           <div class="flex-row text-right">
            <h6 className='toptext'>{name}</h6>
            <h6 className='Middletext'>{value}</h6>
            <h6 className='bottomtext'>{value1}</h6>
            </div>
        </div>
    </div>
    
  )
}
export default Card;
