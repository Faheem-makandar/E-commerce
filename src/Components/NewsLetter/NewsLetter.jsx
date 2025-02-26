import React from 'react'
import './NewsLetter.css'

const NewLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to  our News letter and stay updated</p>
      <div>
        <input type="email" placeholder='Your email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewLetter
