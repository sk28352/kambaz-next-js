"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People"
  ];

  return (
    <div
      id="wd-courses-navigation"
      className="list-group fs-5 rounded-0"
      style={{ minWidth: "180px" }}
    >
      {links.map((link) => {
        // Determine href
        let href = `/Courses/${cid}/${link}`;
        // For People, append /Table
        if (link === "People") href += "/Table";

        // Check if this link is active
        const isActive = pathname.startsWith(href);

        return (
          <Link
            key={link}
            href={href}
            className={`list-group-item list-group-item-action border-0 ${
              isActive ? "active" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
