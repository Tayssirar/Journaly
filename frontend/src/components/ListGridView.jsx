import React from 'react'
import {  Nav } from 'react-bootstrap';


function ListGridView() {
  return (
    <div className="col-lg-12">
    <Nav as="ul" className="nav nav-pills mb-3">
        <Nav.Item as="li"><Nav.Link eventKey="List" className="me-1">Vue en liste</Nav.Link></Nav.Item>
        <Nav.Item as="li"><Nav.Link eventKey="Grid" >Vue en grille</Nav.Link></Nav.Item>
    </Nav>
</div>
  )
}

export default ListGridView
