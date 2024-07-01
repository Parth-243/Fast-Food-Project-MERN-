// NavScrollExample.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from "react-bootstrap/Card";
import Rating from "react-rating-stars-component"; // Import Rating from react-rating-stars-component

import "./style.css"; // Ensure you import your CSS file

const topRestaurants = [
  {
    name: "Alfresco Seating",
    image: "alfresco-seating.jpg",
    link: "https://example.com/alfresco-seating",
    title: "Alfresco Seating",
    description: "Enjoy outdoor dining with a beautiful view.",
  },
  {
    name: "Aravali Rooftop Restaurant",
    image: "aravali-rooftop-restaurant.jpg",
    link: "https://example.com/aravali-rooftop",
    title: "Aravali Rooftop",
    description: "Experience fine dining with a rooftop view.",
  },
  {
    name: "Lily",
    image: "lily.jpg",
    link: "https://example.com/lily",
    title: "Lily Restaurant",
    description: "A cozy place with delicious food.",
  },
  {
    name: "Medi Pe Cafe",
    image: "medi_pe_cafe.jpg",
    link: "https://example.com/medi-pe-cafe",
    title: "Medi Pe Cafe",
    description: "A cafe with a Mediterranean touch.",
  },
  {
    name: "Myra",
    image: "myra.jpg",
    link: "/myra-details", // Update the link to the new route
    title: "Myra",
    description: "Elegant dining experience.",
  },
  {
    name: "Raj Bagh",
    image: "raj_bagh.jpg",
    link: "https://example.com/raj-bagh",
    title: "Raj Bagh",
    description: "Traditional Indian cuisine.",
  },
  {
    name: "Syah",
    image: "syah.jpg",
    link: "https://example.com/syah",
    title: "Syah",
    description: "Modern dining with a twist.",
  },
  {
    name: "Zenith Terrace",
    image: "Zenith-terrace-with-sun.jpg",
    link: "https://example.com/zenith-terrace",
    title: "Zenith Terrace",
    description: "Terrace dining with a stunning sunset view.",
  },
];

const natrajs = [
  {
    name: "Natraj",
    image: "natraj.jpeg",
    price: 200,
    rating: 4.5,
    cuisine: "Indian",
  },
  {
    name: "Dominos",
    image: "natraj.jpeg",
    price: 500,
    rating: 3.5,
    cuisine: "Indian",
  },
  {
    name: "pizza Hut",
    image: "natraj.jpeg",
    price: 300,
    rating: 4.0,
    cuisine: "Indian",
  },
  {
    name: "fizzy fizz",
    image: "natraj.jpeg",
    price: 300,
    rating: 4.2,
    cuisine: "Indian",
  },
  {
    name: "Nothing Before Coffee",
    image: "natraj.jpeg",
    price: 500,
    rating: 4.8,
    cuisine: "Indian",
  },
  {
    name: "Burger Farm",
    image: "natraj.jpeg",
    price: 200,
    rating: 4.1,
    cuisine: "Indian",
  },
  {
    name: "RK chinese",
    image: "natraj.jpeg",
    price: 300,
    rating: 3.8,
    cuisine: "Indian",
  },
  {
    name: "",
    image: "natraj.jpeg",
    price: 500,
    rating: 4.6,
    cuisine: "Indian",
  },
];

function NavScrollExample() {
  const [sortOption, setSortOption] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    price: "",
    rating: "",
    cuisine: "",
  });

  const handleSort = (option) => {
    setSortOption(option);
  };

  const handleFilter = (option, category) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [category]: option,
    }));
  };

  const sortedAndFilterednatrajs = natrajs
    .filter((natraj) => {
      if (
        filterOptions.price &&
        natraj.price.toString() !== filterOptions.price
      )
        return false;
      if (
        filterOptions.rating &&
        natraj.rating < parseFloat(filterOptions.rating)
      )
        return false;
      if (filterOptions.cuisine && natraj.cuisine !== filterOptions.cuisine)
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "price") return a.price - b.price;
      if (sortOption === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="off-white-bg">
      <h5>What's on your mind</h5>

      <div>
        <Container className="carousel-container">
          <Carousel className="mt-3">
            <Carousel.Item>
              <Row>
                <Col>
                  <a href="https://example.com">
                    <Image src="Burger.png" roundedCircle />
                  </a>
                </Col>
                <Col>
                  <a href="https://example.com">
                    <Image src="Chinese.png" roundedCircle />
                  </a>
                </Col>
                <Col>
                  <a href="https://example.com">
                    <Image src="Chole_Bature.png" roundedCircle />
                  </a>
                </Col>
                <Col>
                  <a href="https://example.com">
                    <Image src="Ice_Creams.png" roundedCircle />
                  </a>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <a href="https://example.com">
                    <Image src="Momos.png" roundedCircle />
                  </a>
                </Col>
                <Col>
                  <a href="https://example.com">
                    <Image src="Pasta.png" roundedCircle />
                  </a>
                </Col>
                <Col>
                  <a href="https://example.com">
                    <Image src="Pastry.png" roundedCircle />
                  </a>
                </Col>
                <Col>
                  <a href="https://example.com">
                    <Image src="Pizza.png" roundedCircle />
                  </a>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      <Container className="slidebar-container mt-4">
        <h3>Top Restaurants in Udaipur</h3>
        <Carousel>
          <Carousel.Item>
            <Row>
              {topRestaurants.slice(0, 4).map((restaurant, index) => (
                <Col key={index}>
                  <Card className="h-100">
                    <Link
                      to={restaurant.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card.Img
                        variant="top"
                        src={restaurant.image}
                        className="rounded-rect"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>{restaurant.title}</Card.Title>
                      <Card.Text>{restaurant.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {topRestaurants.slice(4).map((restaurant, index) => (
                <Col key={index}>
                  <Card className="h-100">
                    <Link
                      to={restaurant.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card.Img
                        variant="top"
                        src={restaurant.image}
                        className="rounded-rect"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>{restaurant.title}</Card.Title>
                      <Card.Text>{restaurant.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>

      <h3>Restaurants with Online Food Delivery in Udaipur</h3>
      <Container className="mt-4">
        <Row className="mb-3">
          <Col md={4}>
            <DropdownButton
              id="dropdown-sort-button"
              title="Sort By"
              onSelect={(e) => handleSort(e)}
            >
              <Dropdown.Item eventKey="price">Price</Dropdown.Item>
              <Dropdown.Item eventKey="rating">Rating</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col md={4}>
            <DropdownButton
              id="dropdown-filter-button"
              title="Filter By Price"
              onSelect={(e) => handleFilter(e, "price")}
            >
              <Dropdown.Item eventKey="200">200</Dropdown.Item>
              <Dropdown.Item eventKey="300">300</Dropdown.Item>
              <Dropdown.Item eventKey="500">500</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col md={4}>
            <DropdownButton
              id="dropdown-filter-cuisine-button"
              title="Filter By Cuisine"
              onSelect={(e) => handleFilter(e, "cuisine")}
            >
              <Dropdown.Item eventKey="Indian">Indian</Dropdown.Item>
              <Dropdown.Item eventKey="Chinese">Chinese</Dropdown.Item>
              <Dropdown.Item eventKey="Italian">Italian</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          {sortedAndFilterednatrajs.map((natraj, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={natraj.image}
                  className="rounded"
                />
                <Card.Body>
                  <Card.Title>{natraj.name}</Card.Title>
                  <Card.Text>
                    Price: {natraj.price}
                    <br />
                    Cuisine: {natraj.cuisine}
                    <br />
                    <Rating
                      value={natraj.rating}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
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

export default NavScrollExample;
