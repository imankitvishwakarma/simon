import React from 'react';
import clinical from '../../components/photos/clinical.png';
import clinical2 from '../../components/photos/clinical2.png';
import clinical3 from '../../components/photos/clinical3.png';
import '../pageone/PageOne.css'
import { Link } from 'react-router-dom'

export default function PageOne() {
  return (
    <div className='page-width main'>
      <div className='clinical-practice'>
        <h2>From the options listed below, please select which persona best describes you and your day-to-day clinical practice</h2>
        <form>
        <div className='boxes'>
          <div className='box'>
          <img src={clinical} alt="clinical.1" />
        <div className='started-form'>
        <h3>I am...</h3>
            <div className='d-flex'>
              <label>
                <input type="checkbox"name="option"value="option1" required />
                <p>Confident, engaged and satisfied in my work</p>
              </label>
            </div>
            <div className='d-flex'>
              <label>
              <input type="checkbox"name="option"value="option1"/>
              <p>Barely challenged by aspects of medical practice management</p>
              </label>
            </div>
        </div>
          </div>
          <div className='box'>
          <img src={clinical2} alt="clinical.2" />
        <div className='started-form'>
        <h3>I am / have...</h3>
            <div className='d-flex'>
              <label>
                <input type="checkbox"name="option"value="option1"/>
                <p>Not entirely satisfied with my work </p>
              </label>
            </div>
            <div className='d-flex'>
              <label>
              <input type="checkbox"name="option"value="option1"/>
              <p>Low patient engagement </p>
              </label>
            </div>
            <div className='d-flex'>
              <label>
              <input type="checkbox"name="option"value="option1"/>
              <p>Finding many aspects of general practice management challenging Skip </p>
              </label>
            </div>
        </div>
          </div>
          <div className='box'>
          <img src={clinical3} alt="clinical.3" />
        <div className='started-form'>
        <h3>I am / have..</h3>
            <div className='d-flex'>
              <label>
                <input type="checkbox"name="option"value="option1"/>
                <p>Stressed and busy</p>
              </label>
            </div>
            <div className='d-flex'>
              <label>
              <input type="checkbox"name="option"value="option1"/>
              <p>High patient engagement </p>
              </label>
            </div>
            <div className='d-flex'>
              <label>
              <input type="checkbox"name="option"value="option1"/>
              <p>Finding almost all aspects of general practice management challenging</p>
              </label>
            </div>
        </div>
        </div>
        </div>

        <div className="next-btn skip-and-next-btn">
            <Link to="/page-2">Skip {'>'}</Link>
            <button className="submit-btn" type='submit'>Next {'>'}</button>
        </div>
        </form>

        </div>
    </div>
  )
}
