import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import calendar styles
import data from "../Json-Properties/properties(1) (1).json";
import { useNavigate } from "react-router-dom";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minRooms, setMinRooms] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [searchDate, setSearchDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Calendar visibility state
  const [showFavorites, setShowFavorites] = useState(false); // Toggle between showing favorites or filtered properties

  useEffect(() => {
    setProperties(data.properties);

    // Load favorites from localStorage on page load
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const resetFilters = () => {
    setSearchTerm("");
    setMinRooms(0);
    setMinPrice(0);
    setMaxPrice(100000000);
    setSearchDate(null);
  };

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

    const matchesDate =
      !searchDate ||
      (property.added &&
        new Date(property.added.year, property.added.month - 1, property.added.day).toDateString() ===
          searchDate.toDateString());

    return matchesSearchTerm && matchesMinRooms && matchesPrice && matchesDate;
  });

  return (
    <Container fluid style={{ marginTop: "100px" }}>
      <Row>
        {/* Main Properties Section */}
        <Col md={9}>
          {/* Filters Section */}
          <Row className="mb-4">
            <Col md={12} xs={24} className="d-flex align-items-center">
              <label htmlFor="location" className="form-label me-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="form-control"
                placeholder="Search by location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
          </Row>

          {/* Additional Filters */}
          <Row className="mb-4">
            <Col md={3} xs={6}>
              <label htmlFor="minPrice" className="form-label">
                Min Price
              </label>
              <input
                type="number"
                id="minPrice"
                className="form-control"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
            </Col>
            <Col md={3} xs={6}>
              <label htmlFor="maxPrice" className="form-label">
                Max Price
              </label>
              <input
                type="number"
                id="maxPrice"
                className="form-control"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </Col>
            <Col md={3} xs={6}>
              <label htmlFor="minRooms" className="form-label">
                Min Rooms
              </label>
              <input
                type="number"
                id="minRooms"
                className="form-control"
                placeholder="Min Rooms"
                value={minRooms}
                onChange={(e) => setMinRooms(Number(e.target.value))}
              />
            </Col>
            <Col md={3} xs={12}>
              <label htmlFor="searchDate" className="form-label">
                Search by Date
              </label>
              <Button
                variant="outline-primary"
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              >
                {isCalendarOpen ? "Hide Calendar" : "Show Calendar"}
              </Button>
              {isCalendarOpen && (
                <Calendar
                  onChange={setSearchDate}
                  value={searchDate}
                  className="w-100 mt-2"
                />
              )}
            </Col>
          </Row>

          <Row className="mb-4">
            <Col className="text-center">
              <Button variant="secondary" onClick={resetFilters}>
                Clear Filters
              </Button>
            </Col>
          </Row>

          {/* Properties Section */}
          <Row>
            <Col>
              <Row className="g-3">
                {(showFavorites ? favorites : filteredProperties).map((property) => (
                  <Col xs={12} sm={6} md={4} lg={3} key={property.id}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={property.IMG}
                        alt={`Image of ${property.location}`}
                        style={{ width: "100%", height: "200px", objectFit: "cover" }}
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
                          onClick={() =>
                            showFavorites
                              ? removeFromFavorites(property)
                              : addToFavorites(property)
                          }
                          className="me-2"
                        >
                          {showFavorites ? "Remove from Favorites" : "Add to Favorites"}
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => handleClick(property.id)}
                        >
                          More
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>

        {/* Sidebar with Favorites on the Right */}
        <Col md={3} className="bg-light p-3">
          <h4>Favorites</h4>
          <Button
            variant="outline-primary"
            onClick={() => setShowFavorites(!showFavorites)}
            className="mb-3"
          >
            {showFavorites ? "Show All Properties" : "Show Favorites"}
          </Button>
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
        </Col>
      </Row>
    </Container>
  );
};

export default Properties;
