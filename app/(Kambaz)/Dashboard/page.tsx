"use client";

import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;

  // Optional: default images for courses
  const courseImages: { [key: string]: string } = {
    RS101: "/images/rocket.jpg",
    RS102: "/images/aerodynamics.jpg",
    RS103: "/images/spacecraft.jpg",
    RS104: "/images/organic_chem.jpg",
    RS105: "/images/inorganic_chem.jpg",
    RS106: "/images/physical_chem.jpg",
    RS107: "/images/middle_earth_lang.jpg",
    RS108: "/images/middle_earth_diplomacy.jpg",
  };

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Link
                href={`/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card className="shadow-sm">
                  <CardImg
                    variant="top"
                    src={courseImages[course._id] || "/images/default_course.jpg"}
                    width="100%"
                    height={160}
                    style={{ objectFit: "cover" }}
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
