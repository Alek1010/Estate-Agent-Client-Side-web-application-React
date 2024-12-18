import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";

import data from "../Json-Properties/properties(1) (1).json";
import "./Property.css";

const Property = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const [property, setProperty] = useState(null); // State for the property details
  const windowSize = useRef([window.innerWidth, window.innerHeight]); // Track the window size
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const foundProperty = data.properties.find((e) => e.id === id); // Find the property by ID
    setProperty(foundProperty || null); // Set the property or null if not found
    if(foundProperty){
      setMainImage(foundProperty.IMG)
    }
  }, [id]);

  // Handle cases where the property isn't loaded yet
  if (!property) {
    return <div>Loading property details...</div>;
  }

  const isLargeScreen = windowSize.current[0] > 1000; // Determine if the screen is large

  return (
    <div style={{ marginTop: "50px", padding: "25px" }}>
      {/* Main Container */}
      <div
        style={{
          maxWidth: isLargeScreen ? "50%" : "90%",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>{property.location}</h1>
      </div>

      {/* Main Image */}
      <div
        style={{
          maxWidth: isLargeScreen ? "60%" : "90%",
          margin: "auto",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        {property.IMG ? (
          <img
            src={`./${mainImage}`}
            alt="Main Property"
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ) : (
          <p>No main image available.</p>
        )}
      </div>

      {/* Smaller Images */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        {property.images && property.images.length > 0 ? (
          property.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Property View ${index + 1}`}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "5px",
                cursor: "pointer",
                border: "1px solid #ccc",
              }}
              onClick={() =>setMainImage(img)}
            />
          ))
        ) : (
          <p>No additional images available.</p>
        )}
      </div>

      {/* Tabs for Description, Floor Plan, and Map */}
      <Tabs
        defaultActiveKey="desc"
        transition={false}
        className="mb-3"
        style={{
          maxWidth: isLargeScreen ? "60%" : "100%",
          margin: "auto",
          marginTop: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        {/* Description Tab */}
        <Tab
          eventKey="desc"
          title="Description"
          style={{
            maxWidth: isLargeScreen ? "60%" : "90%",
            margin: "auto",
            padding: "20px",
            border: "1px solid #000",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
          }}
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Type: {property.type}</li>
            <li className="list-group-item">Bedrooms: {property.bedrooms}</li>
            <li className="list-group-item">Tenure: {property.tenure}</li>
            <li className="list-group-item">Price: ${property.price}</li>
            <li className="list-group-item">
              Date Added:{" "}
              {property.added
                ? `${property.added.month} ${property.added.day}, ${property.added.year}`
                : "N/A"}
            </li>
            <li className="list-group-item">
              Postal Code: {property.postalCode || "N/A"}
            </li>
          </ul>
          <div style={{ padding: "20px" }}>{property.description}</div>
          <Link to="/contactus">
            <Button variant="primary ms-3">Contact Us</Button>
          </Link>
        </Tab>

        {/* Floor Plan Tab */}
        <Tab
          eventKey="fp"
          title="Floor Plan"
          style={{
            maxWidth: isLargeScreen ? "60%" : "90%",
            margin: "auto",
            padding: "20px",
            border: "1px solid #000",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
          }}
        >
          {property.floor_Plan ? (
            <img
              src={property.floor_Plan}
              alt="Floor Plan"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          ) : (
            <p>No floor plan available.</p>
          )}
        </Tab>

        {/* Map Tab */}
        <Tab
          eventKey="map"
          title="Map"
          style={{
            maxWidth: isLargeScreen ? "60%" : "90%",
            margin: "auto",
            padding: "20px",
            border: "1px solid #000",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
          }}
        >
          {property.map ? (
            <iframe
              src={property.map}
              title="Property Map"
              style={{
                width: "100%",
                height: isLargeScreen ? "500px" : "300px",
                border: "none",
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          ) : (
            <p>No map available.</p>
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Property;
