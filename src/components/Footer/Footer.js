import React from 'react'
import { Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div >
      
      <Container fluid className='Navbar_container mt-5 mb-3 pt-5'>


        <Nav className="justify-content-center " activeKey="/home">

          <Nav.Item>
            <Nav.Link className='NavItem position-relative'>

              <Link to='/about'><p className='footer_text font_abel'>ABOUT</p></Link>


            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='NavItem'>
              
              <Link to='/values'><p className='footer_text font_abel'>VALUES</p></Link>

            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='NavItem'>
              <Link to='/contacts'><p className='footer_text font_abel'>CONTACT</p></Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='NavItem'>
              <p className='footer_text font_abel'>POLICIES</p>

            </Nav.Link>

          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='NavItem'>
             <Link to={'/stocklist'}><p className='footer_text font_abel'>STOCKLIST</p></Link> 
            </Nav.Link>

          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='NavItem'>
              <p className='footer_text font_abel'>INSTAGRAM</p>
            </Nav.Link>

          </Nav.Item>
        </Nav>
      </Container>
      <p style={{textAlign:'center'}} className='mt-5 pb-5 font_abel'>© 2020 all rights reserved.</p>

    </div>
  )
}
