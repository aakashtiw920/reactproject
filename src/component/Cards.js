import React from 'react'
import Card from './Card'
import './Card.css';
import * as img from './imagevalue.js';
const Cards = ({cards}) => {
  return (
    <div >
        <div>
            <h2 class="font-serif text-sm font-bold ml-6 my-5 ">Hello Shahrukh 🤚🏻,</h2>
        </div>
        <div className="search-bar">
                <img src={img.search} className='search-image'></img>
                <input type="text" class="search-input" placeholder="Search"></input>
        </div>

        <div class="flex flex-wrap item-center justify-content: center max-width max-w-screen-lg m-8 ">
        {cards.map((data) => (
            
                <div key={data.id} class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <div className='image-container' >
                    <Card {...data} />
                    </div>
                </div>
        ))}
        </div>      
    </div>
  )
}

export default Cards;
