import React, { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import data from "../Json-Properties/properties(1) (1).json";
import "./Property.css";
// import Slider from "react-slick";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Property = () => {
  const [property, setProperty] = useState(null); // Initialize as null


  
  const { id } = useParams();  

  useEffect(() => {
    console.log(data);
    const foundProperty = data.properties.filter((e) => e.id === id)[0];

    setProperty(foundProperty);

    console.log(foundProperty);

  }, [id]);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ marginTop: "50px", padding: "25px" }}>
      {/* <Slider {...slickSettings} className="slick-slider-custom"> */}
        {/* {property &&
          property.pictures.map((pic, index) => (
            <div key={index}>
              <img
                className="d-block w-100 img-fluid"
                src={pic}
                alt={`Slide ${index}`}
              />
            </div>
          ))} */}
      {/* </Slider> */}

      <div
        style={
          windowSize.current[0] > 1000
            ? { maxWidth: "50%", margin: "auto", marginTop: "50px" }
            : { margin: "auto" }
        }
      >
        <h1>{property ? property.location : ""}</h1>
        {/* {property && `${property.added.month} ${property.added.day}, ${property.added.year}`} */}
      </div>

      <Tabs
        defaultActiveKey="desc"
        transition={false}
        className="mb-3"
        style={
          windowSize.current[0] > 1000
            ? {
                maxWidth: "50%",
                margin: "auto",
                marginTop: "20px",
                backgroundColor: "white",
                borderRadius: "8px",
              }
            : {
                margin: "auto",
                marginTop: "20px",
                backgroundColor: "white",
                borderRadius: "10px",
              }
        }
      >
        <Tab
          eventKey="desc"
          title="Description"
          style={
            windowSize.current[0] > 1000
              ? {
                  maxWidth: "50%",
                  margin: "auto",
                  marginTop: "20px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #000",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "#000",
                }
              : {
                  margin: "auto",
                  backgroundColor: "#ffffff",
                  border: "1px solid #000",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "#000",
                }
          }
        >
          <div>
            {property && (
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Type: {property.type}</li>
                <li className="list-group-item">
                  Bedrooms: {property.bedrooms}
                </li>
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
            )}
          </div>
          <div style={{ padding: "20px" }}>
            {property ? property.description : ""}
          </div>
          <Link to="/contactus">
            <Button variant="primary ms-3">Contact Us</Button>
          </Link>
        </Tab>
        <Tab
          eventKey="fp"
          title="Floor plan"
          style={
            windowSize.current[0] > 1000
              ? {
                  maxWidth: "50%",
                  margin: "auto",
                  marginTop: "20px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #000",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "#000",
                }
              : {
                  margin: "auto",
                  backgroundColor: "#ffffff",
                  border: "1px solid #000",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "#000",
                }
          }
        >
          Floor plan
          <div>
            <img
              src="/src/assets/floor_plan.png"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Tab>
        <Tab
          eventKey="map"
          title="Map"
          style={
            windowSize.current[0] > 1000
              ? {
                  maxWidth: "50%",
                  margin: "auto",
                  marginTop: "20px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #000",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "#000",
                }
              : {
                  margin: "auto",
                  backgroundColor: "#ffffff",
                  border: "1px solid #000",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "#000",
                }
          }
        >
          Map
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={property ? property.map : ""}
              title="Property Map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              // "no-referrer-when-downgrade", which means that the referrer 
              // information is not sent in cross-origin requests unless the protocol 
              // security level stays the same (e.g., from HTTPS to HTTPS).
            ></iframe>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Property;