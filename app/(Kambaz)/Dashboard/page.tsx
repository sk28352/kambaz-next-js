"use client";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

export default function Dashboard() {
  const courses = [
    {
      id: "1234",
      title: "CS1234 React JS",
      desc: "Full Stack software developer",
      img: "/images/reactjs.jpg"
    },
    {
      id: "5800",
      title: "CS5800 Algorithms",
      desc: "Core computer science",
      img: "/images/algos.jpg"
    },
    {
      id: "5200",
      title: "CS5200 Database Management",
      desc: "Database Engineer",
      img: "/images/dbms.jpg"
    },
    {
      id: "6120",
      title: "CS6120 Natural Language Processing",
      desc: "NLP Engineer",
      img: "/images/nlp.jpg"
    },
    {
      id: "2345",
      title: "CS2345 Foundations of AI",
      desc: "AI Engineer",
      img: "/images/ai.jpg"
    },
    {
      id: "4567",
      title: "CS4567 Reinforcement Learning",
      desc: "Agent Learner Developer",
      img: "/images/rei.jpg"
    },
    {
      id: "5678",
      title: "CS5678 Cloud Computing",
      desc: "Cloud Engineer",
      img: "/images/cloud.jpg"
    },
  ];

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {courses.map((course) => (
            <Col key={course.id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Link
                href={`/Courses/${course.id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card className="shadow-sm">
                  <CardImg
                    variant="top"
                    src={course.img}
                    width="100%"
                    height={160}
                    style={{ objectFit: "cover" }}
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.title}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.desc}
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
