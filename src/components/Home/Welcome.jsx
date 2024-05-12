import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Welcome.css'
export default function Welcome() {
  return (
    <div className='page-width main-heading main'>
        
        <div className='main-content'>
          <h1>Welcome</h1>
        </div>
        <div className="welcome-page"></div>
        <div className="next-btn">
        <Link to="/page-1">Next {'>'}</Link>
        </div>
    </div>
  )
}
