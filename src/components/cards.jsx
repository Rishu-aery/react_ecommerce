import React from 'react';
import "../css/cards.css"

export default function cards() {
  return (
    <div className='container'>
        <img className='image' src="https://i.ytimg.com/vi/MyDnyfS7c1g/maxresdefault.jpg"/>
        <div>
            <div className='card'>
                <img src="https://fakeimg.pl/1000x50" alt="Product Image" />
                <h2>Drift 3M 3x3 (Magnetic)</h2>
                <p>₹ 599</p>
                <p>• in stock</p>
            </div>
        </div>
    </div>
  )
}
