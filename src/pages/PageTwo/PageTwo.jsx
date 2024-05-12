import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../PageTwo/PageTwo.css'
export default class PageTwo extends PureComponent {
  render() {
    return (
      <div className='page-width'>
        <h2>Please Select Your Role</h2>
        <div className='page-two-content'>
            <div className="page-two-box"><p>Healthcare Professional </p></div>
            <div className="page-two-box"><p>Other </p></div>
        </div>
        <div className="next-btn skip-and-next-btn">
            <Link to="/page-3">Skip {'>'}</Link>
            <button className="submit-btn" type='submit'>Next {'>'}</button>
        </div>
      </div>
    )
  }
}
