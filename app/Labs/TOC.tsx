"use client";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();

  return (
    <Nav variant="pills" className="flex-column">
      {/* Add your name and NU ID at the top */}
      <div className="mb-3 px-3">
        <div><strong>Name:</strong> Shruthi Kannan</div>
        <div><strong>NU ID:</strong> 002033928</div>
      </div>

      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs"
          id="wd-lab-home-link"
          className={pathname.endsWith("Labs") ? "active" : ""}
        >
          Home
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs/Lab1"
          id="wd-lab1-link"
          className={pathname.endsWith("Lab1") ? "active" : ""}
        >
          Lab 1
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs/Lab2"
          id="wd-lab2-link"
          className={pathname.endsWith("Lab2") ? "active" : ""}
        >
          Lab 2
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs/Lab3"
          id="wd-lab3-link"
          className={pathname.endsWith("Lab3") ? "active" : ""}
        >
          Lab 3
        </Nav.Link>
      </Nav.Item>

      {/* Added Lab 4 link */}
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs/Lab4"
          id="wd-lab4-link"
          className={pathname.endsWith("Lab4") ? "active" : ""}
        >
          Lab 4
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs/Lab5"
          id="wd-lab4-link"
          className={pathname.endsWith("Lab5") ? "active" : ""}
        >
          Lab 5
        </Nav.Link>
      </Nav.Item>


      <Nav.Item>
        <Nav.Link as={Link} href="/" id="wd-kambaz-link">
          Kambaz
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="https://github.com/sk28352" target="_blank">
          My GitHub
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
