import React from 'react'
import { Link } from 'react-router-dom';
import '../PageThree/PageThree.css'
export default function PageThree() {
  return (
    <div className='page-width'>
     <h2>Please Select Your Specialisation</h2> 
     <div className='page-three'></div>
     <div className="next-btn skip-and-next-btn">
        <Link to="/page-3">Skip {'>'}</Link>
        <button className="submit-btn" type='submit'>Next {'>'}</button>
    </div>
    </div>
  )
}
