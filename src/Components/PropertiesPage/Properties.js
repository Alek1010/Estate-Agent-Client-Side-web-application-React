import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
      
      matchesDate
    );
  });

  return (
    <Container fluid style={{ marginTop: '100px' }}>
     
<Row className="mb-4">
  {/* Search by Location */}
  <Col md={12} xs={24} className="d-flex align-items-center">
    <label htmlFor="location" className="form-label me-2">Location</label>
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

<Row className="mb-4">
  {/* Min Price */}
  <Col md={3} xs={6} className="d-flex align-items-center">
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

  {/* Max Price */}
  <Col md={3} xs={6} className="d-flex align-items-center">
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

  {/* Min Rooms */}
  <Col md={3} xs={6} className="d-flex align-items-center">
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

  {/* Date Picker */}
  <Col md={3} xs={6} className="d-flex align-items-center">
    <label htmlFor="searchDate" className="form-label">Search by Date</label>
    <DatePicker
      id="searchDate"
      selected={searchDate}
      onChange={(date) => setSearchDate(date)}
      className="form-control"
      placeholderText="Search by date"
    />
  </Col>
</Row>


 
<Row>
        {/* Property Cards Section */}
        <Col md={8}>
          <Row className="g-3"> {/* g-3 gives space between cards */}
            {filteredProperties.map((property) => (
              <Col xs={12} sm={6} md={6} lg={4} key={property.id}> 
                {/* xs=12: 1 column on extra small screens, 
                    sm=6: 2 columns on small screens, 
                    md=6: 2 columns on medium screens,
                    lg=4: 3 columns on large screens */}
                <Card>
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
              </Col>
            ))}
          </Row>
        </Col>

        {/* Favorites Section */}
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









 