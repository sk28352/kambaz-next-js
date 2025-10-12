"use client";
import Link from "next/link";
import { Form, Card, Container } from "react-bootstrap";

export default function Signin() {
  return (
    <Container
      id="wd-signin-screen"
      className="d-flex justify-content-center align-items-center min-vh-100"
    >
      <Card className="shadow p-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-4">Sign In</h3>
        <Form>
          <Form.Group className="mb-3" controlId="wd-username">
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="wd-password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Link
            href="/Account/Profile"
            className="btn btn-primary w-100 mb-3"
            id="wd-signin-btn"
          >
            Sign In
          </Link>

          <div className="text-center">
            <span>Don&apos;t have an account? </span>
            <Link href="/Account/Signup" id="wd-signup-link">
              Sign up
            </Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
