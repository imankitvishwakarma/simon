import React from 'react'
import photos from '../photos/home.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='page-width main-heading'>
      <Link to="/"><img src={photos} alt="logo" /></Link>
    </div>
  )
}
