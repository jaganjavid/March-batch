import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mantine/core';

const Navbar = () => {
  return (
    <Container size="lg">
        <div className='navbar'>
        <h1>Logo</h1>
        <ul>
            <li><Link to="/">Explore</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
        </div>
    </Container>
  )
}

export default Navbar