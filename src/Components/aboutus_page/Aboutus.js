import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./Aboutus.css";
//import team from "C:\Users\alekm\Desktop\w1965221-react-coursework\src\Components\images\team.jpg"
//import vision from "C:\Users\alekm\Desktop\w1965221-react-coursework\src\Components\images\vision.png"

const Aboutus = () => {
    return(
        <div className="container mt-5 pt-3">
            <Row>
                <Col lg={6}>
                    <div className="section-title ps-4">
                        <h2 style={{
                            fontSize: "2em",
                            margin: "0",
                            fontFamily: "Raleway, sans-serif",
                            padding: "20px",
                        }}>
                            Our Vision & Mission
                        </h2>
                        <p style={{
                            textAlign: "justify",
                            color: "#fc5356",
                            fontWeight: "bold",
                            fontSize: "1.1em",
                            lineHeight: "1.5",
                            fontFamily: "Raleway, sans-serif",
                            padding: "20px",
                            }}>
                            Do you have any questions or enquires, then do not worry we are here to help, connect with us and one of our dedicated team members will be more than happy to assist you with any question about properies. we are here to help every step of the way to help you find your dream home.
                        </p>
                    </div>
                </Col>
                <Col lg={6} className="mt-3">
                    <img className="w-100" src="/images/buessness.jpeg"  alt="search"style={{ maxHeight: "250px", width: "100%", objectFit: "cover"}}/>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col md={6}>
                    <Card className="mb-4 team-card">
                        <Card.Img className="team-card-img" varient="top" src="/images/team.jpeg" />
                        <Card.Body>
                            <Card.Title style={{
                                fontFamily: "Georgia, serif",
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                                color: "#20247b",}}
                                >
                                    Our Vision
                                </Card.Title>
                                <Card.Text  style={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: "1rem",
                                    color: "#20247b",
                                    lineHeight: "1.6",}}>
                                    We aspire to give communites the best possible chance at getting onto the propery ladder and seeing people happy and smiling we always strive to deliver the best possible homes on the 
                                    </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="mb-4 team-card">
                        <Card.Img className="team-card-img" variant="top" src="./images/buessness.jpeg" />
                        <Card.Body>
                            <Card.Title className="team-card-title">Our Team</Card.Title>
                            <Card.Text style={{
                                fontFamily: "Georgia, serif",
                                fontSize: "1rem",
                                color: "#20247b",
                                lineHeight: "1.6",}} >
                                    Meet our team of Property experts who are passionate about helping you find your dream home each one of our experts has a minimus of 10 year of experience as a estate agegent so you can rest assured you are in safe hands. 
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <h3 className="mb-3"
                        style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#20247b",}}>
                            Our Mission
                        </h3>
                        <p  style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "1.3rem",
                            color: "#20247b",
                            lineHeight: "1.6",}}>
                                Our goal is to be the best plain and simle we are always try to be the best at what ever we do.
                        </p>
                </Col>
            </Row>

            <div className="d-flex flex-wrap mt-3">
                <span className="badge rounded-pill bg-info text-white fs-6 p-2 m-1">
                    customer Satisfaction
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
}

export default Aboutus;