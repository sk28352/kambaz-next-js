"use client";

import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { assignments as allAssignments } from "../../../Database";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import Link from "next/link";

export default function Assignments() {
  const { cid } = useParams();

  const courseAssignments = allAssignments.filter(a => a.course === cid);

  return (
    <div id="wd-assignments">
      <AssignmentControls />

      {courseAssignments.length === 0 && (
        <p className="text-muted">No assignments available for this course.</p>
      )}

      <ListGroup className="rounded-0" id="wd-assignment-list">
        {courseAssignments.map(a => (
          <ListGroupItem
            key={a._id}
            className="wd-assignment-item p-3 mb-3 border-start border-3 border-success"
          >
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <Link
                href={`/Courses/${cid}/Assignments/${a._id}`}
                className="flex-grow-1 text-decoration-none text-dark"
              >
                <div className="fw-bold">{a.title}</div>
              </Link>
              <AssignmentControlButtons />
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
