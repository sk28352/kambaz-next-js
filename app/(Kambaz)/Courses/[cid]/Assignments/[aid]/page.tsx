"use client";
import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-4">
      <h3 className="mb-4">Sign In</h3>

      <Form>
        <Form.Group className="mb-3" controlId="wd-username">
          <Form.Control
            type="text"
            placeholder="Username"
            className="mb-2"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-password">
          <Form.Control
            type="password"
            placeholder="Password"
            className="mb-2"
          />
        </Form.Group>

        <Link
          href="/Dashboard"
          id="wd-signin-btn"
          className="btn btn-danger w-100 mb-2 text-white"
        >
          Sign In
        </Link>

        <div className="text-center">
          <Link
            id="wd-signup-link"
            href="/Account/Signup"
            className="text-decoration-none"
          >
            Don&apos;t have an account? Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
}
