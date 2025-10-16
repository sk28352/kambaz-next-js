"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../../Database";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cid } = useParams();
  const course = courses.find((c) => c._id === cid);
  const pathname = usePathname();

  return (
    <div id="wd-courses" className="p-4">
      <div className="d-flex align-items-center mb-3">
        <FaAlignJustify className="me-3 fs-4 text-danger" />
        <h2 className="mb-0 text-danger">
          {course?.name || "Course"}
        </h2>
      </div>

      <div className="d-flex">
        {/* Sidebar */}
        <div className="d-none d-md-block me-4 border-end pe-3">
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link
                href={`/Courses/${cid}/Home`}
                className={pathname.includes("Home") ? "fw-bold text-danger" : "text-dark"}
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href={`/Courses/${cid}/Modules`}
                className={pathname.includes("Modules") ? "fw-bold text-danger" : "text-dark"}
              >
                Modules
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href={`/Courses/${cid}/Assignments`}
                className={pathname.includes("Assignments") ? "fw-bold text-danger" : "text-dark"}
              >
                Assignments
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href={`/Courses/${cid}/People/Table`}
                className={pathname.includes("People") ? "fw-bold text-danger" : "text-dark"}
              >
                People
              </Link>
            </li>
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-grow-1">{children}</div>
      </div>
    </div>
  );
}
