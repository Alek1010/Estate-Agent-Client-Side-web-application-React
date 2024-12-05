import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import data from "../Json-Properties/properties(1) (1).json";
import "../PropertiesPage/Properties.css";
import { useNavigate } from "react-router-dom";


const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minRooms, setMinRooms] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [searchDate, setSearchDate] = useState(null);
  const [searchPostalCode, setSearchPostalCode] = useState("");

  useEffect(() => {
    setProperties(data.properties);

    // Load favorites from localStorage on page load
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (property) => {
    if (favorites.some((fav) => fav.id === property.id)) return;
    const updatedFavorites = [...favorites, property];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (property) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== property.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/Properties/" + e, { state: { id: e, name: "just name" } });
  };

  const filteredProperties = properties.filter((property) => {
    const matchesSearchTerm = property.location
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesMinRooms = property.bedrooms >= minRooms;
    const matchesPrice =
      property.price >= minPrice && property.price <= maxPrice;
    const matchesPostalCode = searchPostalCode
      ? property.postalCode
          .toLowerCase()
          .includes(searchPostalCode.toLowerCase())
      : true;
    const matchesDate =
      !searchDate ||
      (property.added &&
        new Date(
          property.added.year,
          new Date().toLocaleString("default", { month: "long" }).indexOf(
            property.added.month
          ),
          property.added.day
        ).getTime() === searchDate.getTime());

    return (
      matchesSearchTerm &&
      matchesMinRooms &&
      matchesPrice &&
      matchesPostalCode &&
      matchesDate
    );
  });

  return (
    <Container fluid>
     
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Discover Your Dream Home with Moving Right</h1>
          <p className="text-center text-danger">
           Find your dream home on Moving Right using our beautifully made  app right from the comfort of your own home.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <input
            type="text"
            className="form-control"
            placeholder="Search by location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <input
            type="number"
            className="form-control"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </Col>
        <Col md={2}>
          <input
            type="number"
            className="form-control"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </Col>
        <Col md={2}>
          <input
            type="number"
            className="form-control"
            placeholder="Min Rooms"
            value={minRooms}
            onChange={(e) => setMinRooms(Number(e.target.value))}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4}>
          <DatePicker
            selected={searchDate}
            onChange={(date) => setSearchDate(date)}
            className="form-control"
            placeholderText="Search by date"
          />
        </Col>
        <Col md={4}>
          <input
            type="text"
            className="form-control"
            placeholder="Search by postal code"
            value={searchPostalCode}
            onChange={(e) => setSearchPostalCode(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Button
            className="btn btn-success"
            onClick={() => setProperties(data.properties)}
          >
            All
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Row>
            {filteredProperties.map((property) => (
              <Card key={property.id} className="col-md-4 m-2">
                <Card.Img
                  variant="top"
                  
                  src={`/images/Prop${property.id}/main.jpeg`}
                  alt={`Image of ${property.location}`}
                />
                <Card.Body>
                  <Card.Title>{property.location}</Card.Title>
                  <Card.Text>
                    Price: ${property.price}
                    <br />
                    Bedrooms: {property.bedrooms}
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => addToFavorites(property)}
                    disabled={favorites.some((fav) => fav.id === property.id)}
                    className="me-2"
                  >
                    Add to Favorites
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleClick(property.id);
                    }}
                  >
                    More
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Col>
        <Col md={4} className="bg-light p-3">
          <h4>Favorites</h4>
          {favorites.length === 0 ? (
            <p>No favorites yet.</p>
          ) : (
            <ul className="list-group">
              {favorites.map((fav) => (
                <li
                  key={fav.id}
                  className="list-group-item d-flex justify-content-between"
                >
                  {fav.location}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromFavorites(fav)}
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Properties;









 