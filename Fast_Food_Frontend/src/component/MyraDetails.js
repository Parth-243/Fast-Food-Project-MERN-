import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown, DropdownButton, FormControl ,Form } from 'react-bootstrap';
import { FaHome, FaSignInAlt, FaShoppingCart, FaSearch, FaInfoCircle, FaPhone } from 'react-icons/fa';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Rating from 'react-rating-stars-component';

const myraMenu = [
  { name: 'Special Dish 1', image: 'special_dish_1.jpg', price: 300, rating: 4.5, description: 'A delicious special dish.' },
  { name: 'Special Dish 2', image: 'special_dish_2.jpg', price: 350, rating: 4.7, description: 'Another tasty dish.' },
  { name: 'Special Dish 3', image: 'special_dish_3.jpg', price: 250, rating: 4.3, description: 'A flavorful dish to enjoy.' },
  { name: 'Special Dish 4', image: 'special_dish_4.jpg', price: 400, rating: 4.9, description: 'A dish with rich taste.' },
  { name: 'Special Dish 5', image: 'special_dish_5.jpg', price: 320, rating: 4.4, description: 'A must-try special dish.' },
  { name: 'Special Dish 6', image: 'special_dish_6.jpg', price: 280, rating: 4.6, description: 'A perfect blend of flavors.' },
  { name: 'Special Dish 7', image: 'special_dish_7.jpg', price: 390, rating: 4.8, description: 'An exquisite dish for food lovers.' },
  { name: 'Special Dish 8', image: 'special_dish_8.jpg', price: 360, rating: 4.7, description: 'A dish with an amazing taste.' },
  { name: 'Special Dish 9', image: 'special_dish_9.jpg', price: 310, rating: 4.5, description: 'A delightful dish to savor.' },
  { name: 'Special Dish 10', image: 'special_dish_10.jpg', price: 340, rating: 4.6, description: 'A fantastic dish with great flavors.' },
];

function MyraDetails() {
  const [filterOptions, setFilterOptions] = useState({ price: '', rating: '', search: '' });

  const handleFilter = (option, category) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [category]: option,
    }));
  };

  const filteredMenu = myraMenu
    .filter((dish) => {
      if (filterOptions.price && dish.price.toString() !== filterOptions.price) return false;
      if (filterOptions.rating && dish.rating < parseFloat(filterOptions.rating)) return false;
      if (filterOptions.search && !dish.name.toLowerCase().includes(filterOptions.search.toLowerCase())) return false;
      return true;
    });

  return (
    <div className="off-white-bg">
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home"><FaHome /> Home</Nav.Link>
              <Nav.Link href="#signin"><FaSignInAlt /> Sign In</Nav.Link>
              <Nav.Link href="#cart"><FaShoppingCart /> Cart</Nav.Link>
              <Nav.Link href="#about"><FaInfoCircle /> About Us</Nav.Link>
              <Nav.Link href="#contact"><FaPhone /> Contact Us</Nav.Link>
        
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success"><FaSearch /> Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <Container className="mt-4">
      <h2>Myra Restaurant Menu</h2>

      <Row className="mb-4">
        <Col md={4}>
          <FormControl
            type="text"
            placeholder="Search Dishes"
            className="mr-sm-2"
            onChange={(e) => handleFilter(e.target.value, 'search')}
          />
        </Col>
        <Col md={4}>
          <DropdownButton id="dropdown-price-filter" title="Filter By Price" onSelect={(e) => handleFilter(e, 'price')}>
            <Dropdown.Item eventKey="200">200</Dropdown.Item>
            <Dropdown.Item eventKey="250">250</Dropdown.Item>
            <Dropdown.Item eventKey="300">300</Dropdown.Item>
            <Dropdown.Item eventKey="350">350</Dropdown.Item>
            <Dropdown.Item eventKey="400">400</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col md={4}>
          <DropdownButton id="dropdown-rating-filter" title="Filter By Rating" onSelect={(e) => handleFilter(e, 'rating')}>
            <Dropdown.Item eventKey="4.0">4.0</Dropdown.Item>
            <Dropdown.Item eventKey="4.5">4.5</Dropdown.Item>
            <Dropdown.Item eventKey="4.7">4.7</Dropdown.Item>
            <Dropdown.Item eventKey="4.9">4.9</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>

      <Row>
        {filteredMenu.map((dish, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={dish.image} className="rounded" />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>
                  {dish.description}
                  <br />
                  Price: ₹{dish.price}
                  <br />
                  <Rating value={dish.rating} edit={false} size={24} activeColor="#ffd700" />
                </Card.Text>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    </div>
  );
}

export default MyraDetails;
