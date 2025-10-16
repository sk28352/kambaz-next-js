"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }: { course: { name: string } | undefined }) {
  const pathname = usePathname();

  // Get the last segment of the path
  const segments = pathname.split("/").filter(Boolean);
  let section = segments[segments.length - 1];

  // Handle special cases like People/Table
  if (segments.length >= 3 && segments[segments.length - 2] === "People") {
    section = "People";
  }

  // Capitalize the section name
  section = section ? section.charAt(0).toUpperCase() + section.slice(1) : "";

  return (
    <span>
      {course ? `Course ${course.name} > ${section}` : section}
    </span>
  );
}
