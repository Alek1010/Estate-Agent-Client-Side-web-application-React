import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card"; // Importing the Card component from Bootstrap
import Container from "react-bootstrap/Container"; // Importing Container for responsive layout
import Row from "react-bootstrap/Row"; // Importing Row to manage grid layout
import Col from "react-bootstrap/Col"; // Importing Col for defining column sizes within rows
import Button from "react-bootstrap/Button"; // Importing Button component from Bootstrap
import Calendar from "react-calendar"; // Importing Calendar component
import "react-calendar/dist/Calendar.css"; // Importing styles for the calendar
import data from "../Json-Properties/properties(1) (1).json"; // Importing property data
import { useNavigate } from "react-router-dom"; // Importing hook for navigation between pages

const Properties = () => {
  // State variables to manage the properties, favorites, filters, and other UI states
  const [properties, setProperties] = useState([]); // Store all properties
  const [favorites, setFavorites] = useState([]); // Store favorited properties
  const [searchTerm, setSearchTerm] = useState(""); // Store search query for location
  const [minRooms, setMinRooms] = useState(0); // Minimum number of rooms filter
  const [minPrice, setMinPrice] = useState(0); // Minimum price filter
  const [maxPrice, setMaxPrice] = useState(100000000); // Maximum price filter
  const [searchDate, setSearchDate] = useState(null); // Date filter
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Calendar visibility toggle
  const [showFavorites, setShowFavorites] = useState(false); // Toggle between showing all properties and favorites

  // Load properties and favorites data from localStorage and JSON file
  useEffect(() => {
    setProperties(data.properties); // Set the properties from the imported JSON
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []; // Load saved favorites from localStorage
    setFavorites(storedFavorites); // Set the favorites state
  }, []); // Empty array ensures this runs once after the initial render

  // Reset all filters to their initial values
  const resetFilters = () => {
    setSearchTerm("");
    setMinRooms(0);
    setMinPrice(0);
    setMaxPrice(100000000);
    setSearchDate(null);
  };

  // Add a property to favorites
  const addToFavorites = (property) => {
    if (favorites.some((fav) => fav.id === property.id)) return; // Avoid adding duplicates
    const updatedFavorites = [...favorites, property]; // Add property to favorites
    setFavorites(updatedFavorites); // Update the state
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Save to localStorage
  };

  // Remove a property from favorites
  const removeFromFavorites = (property) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== property.id); // Remove property by ID
    setFavorites(updatedFavorites); // Update the state
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Save to localStorage
  };

  // Navigate to a detailed page for a property
  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/Properties/" + e, { state: { id: e, name: "just name" } }); // Redirect with the property ID
  };

  // Filter properties based on the search term, rooms, price, and date
  const filteredProperties = properties.filter((property) => {
    const matchesSearchTerm = property.location
      .toLowerCase()
      .includes(searchTerm.toLowerCase()); // Check if location matches search term
    const matchesMinRooms = property.bedrooms >= minRooms; // Check if bedrooms are greater than or equal to minRooms
    const matchesPrice =
      property.price >= minPrice && property.price <= maxPrice; // Check if price is within the range

    const matchesDate =
      !searchDate ||
      (property.added &&
        new Date(property.added.year, property.added.month - 1, property.added.day).toDateString() ===
          searchDate.toDateString()); // Check if property added date matches the search date

    return matchesSearchTerm && matchesMinRooms && matchesPrice && matchesDate; // Return true if all conditions match
  });

  return (
    <Container fluid style={{ marginTop: "100px" }}>
      <Row>
        {/* Main Properties Section - Takes up 9/12 of the row */}
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
              <label htmlFor="minPrice" className="form-label">Min Price</label>
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
              <label htmlFor="maxPrice" className="form-label">Max Price</label>
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
              <label htmlFor="minRooms" className="form-label">Min Rooms</label>
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
              <label htmlFor="searchDate" className="form-label">Search by Date</label>
              <Button variant="outline-primary" onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
                {isCalendarOpen ? "Hide Calendar" : "Show Calendar"} 
              </Button>
              {isCalendarOpen && (
                <Calendar onChange={setSearchDate} value={searchDate} className="w-100 mt-2" />
              )}
            </Col>
          </Row>

          <Row className="mb-4">
            <Col className="text-center">
              <Button variant="secondary" onClick={resetFilters}>Clear Filters</Button>
            </Col>
          </Row>

          {/* Properties Section - Show filtered properties */}
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
                          Price: ${property.price} <br />
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
                        <Button variant="primary" onClick={() => handleClick(property.id)}>
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
        <Col md={3} className="bg-light p-3"> {/* Sidebar section taking 3/12 of the row */}
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
              <li key={fav.id} className="list-group-item d-flex justify-content-between">
                {fav.location}
                <Button variant="danger" size="sm" onClick={() => removeFromFavorites(fav)}>
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
