import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const assignments = [
    { id: "5678", title: "A1 - ENV + HTML", availability: "Not available until May 6", due: "May 12", points: 100 },
    { id: "5679", title: "A2 - CSS and Bootstrap", availability: "Not available until May 12", due: "May 19", points: 100 },
    { id: "5680", title: "A3 - Javascript + React", availability: "Not available until May 19", due: "May 27", points: 100 },
  ];

  return (
    <div id="wd-assignments">
      <AssignmentControls />

      <ListGroup className="rounded-0" id="wd-assignment-list">
        {assignments.map((a) => (
          <ListGroupItem
            key={a.id}
            className="wd-assignment-item p-3 mb-3 border-start border-3 border-success"
          >
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <Link href={`/Courses/1234/Assignments/${a.id}`} className="flex-grow-1 text-decoration-none text-dark">
                <div className="fw-bold">{a.title}</div>
                <div className="text-muted small">{a.availability}</div>
                <div className="text-muted small">
                  <b>Due</b> {a.due} | {a.points} points
                </div>
              </Link>
              <AssignmentControlButtons />
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
