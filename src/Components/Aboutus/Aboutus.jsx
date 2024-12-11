// Import necessary libraries and components
import React from "react"; // React library for building components
import { Row, Col, Card } from "react-bootstrap"; // Bootstrap components for layout and styling
import "./AboutUs.css"; // Custom CSS file for additional styling

// Define the AboutUs functional component
const AboutUs = () => {
    return (
        // Main container for the About Us page with top margin and padding
        <div className="container mt-5 pt-3">

            {/* First Row: Vision and Mission section */}
            <Row>
                {/* Full-width column to center-align the section */}
                <Col lg={12}> 
                    <div className="section-title">
                        {/* Section title */}
                        <h2>Our Vision & Mission</h2>
                        {/* Description text */}
                        <p>
                            Do you have any questions or enquires? Do not worry—we are here to help! Connect with us,
                            and one of our dedicated team members will be more than happy to assist you with any
                            questions about properties. We are here to help every step of the way to help you find
                            your dream home.
                        </p>
                    </div>
                </Col>
            </Row>

            {/* Second Row: Cards for "Our Vision" and "Our Team" */}
            <Row className="mt-3">
                {/* Column for the "Our Vision" card */}
                <Col md={6}>
                    <Card className="mb-4 team-card">
                        <Card.Body>
                            {/* Card title */}
                            <Card.Title
                                style={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    color: "#20247b",
                                }}
                            >
                                Our Vision
                            </Card.Title>
                            {/* Card description text */}
                            <Card.Text
                                style={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: "1rem",
                                    color: "#20247b",
                                    lineHeight: "1.6",
                                }}
                            >
                                We aspire to give communities the best possible chance at getting onto the property
                                ladder. Seeing people happy and smiling drives us to deliver the best possible homes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Column for the "Our Team" card */}
                <Col md={6}>
                    <Card className="mb-4 team-card">
                        <Card.Body>
                            {/* Card title */}
                            <Card.Title className="team-card-title">Our Team</Card.Title>
                            {/* Card description text */}
                            <Card.Text
                                style={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: "1rem",
                                    color: "#20247b",
                                    lineHeight: "1.6",
                                }}
                            >
                                Meet our team of property experts who are passionate about helping you find your dream
                                home. Each one of our experts has a minimum of 10 years of experience as an estate agent,
                                so you can rest assured you are in safe hands.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Third Row: Mission statement */}
            <Row>
                {/* Full-width column for the mission statement */}
                <Col md={12}>
                    {/* Mission heading */}
                    <h3
                        className="mb-3"
                        style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "#20247b",
                        }}
                    >
                        Our Mission
                    </h3>
                    {/* Mission description text */}
                    <p
                        style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "1.3rem",
                            color: "#20247b",
                            lineHeight: "1.6",
                        }}
                    >
                        Our goal is simple: to be the best. We always strive to excel in whatever we do.
                    </p>
                </Col>
            </Row>

            {/* Badges section for key values */}
            <div className="d-flex flex-wrap mt-3">
                {/* Individual badges with unique colors */}
                <span className="badge rounded-pill bg-info text-white fs-6 p-2 m-1">
                    Customer Satisfaction
                </span>
                <span className="badge rounded-pill bg-primary text-white fs-6 p-2 m-1">
                    Innovation
                </span>
                <span className="badge rounded-pill bg-info text-white fs-6 p-2 m-1">
                    Community Impact
                </span>
                <span className="badge rounded-pill bg-primary text-white fs-6 p-2 m-1">
                    Team Empowerment
                </span>
            </div>

        </div>
    );
};

// Export the AboutUs component so it can be imported and used in other parts of the app
export default AboutUs;
