import { Button } from "react-bootstrap";
import { FaPlus, FaSearch } from "react-icons/fa";

export default function AssignmentControls() {
  return (
    <div id="wd-assignments-controls" className="d-flex flex-wrap align-items-center mb-3">
      <div className="flex-grow-1 position-relative mb-2 mb-md-0">
        <input
          type="text"
          placeholder="Search for Assignments"
          className="form-control ps-5"
          id="wd-search-assignment"
        />
        <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
      </div>

      <div className="ms-md-2">
        <Button variant="danger" className="me-1 mb-2 mb-md-0">
          <FaPlus className="me-1" /> Group
        </Button>
        <Button variant="danger" className="mb-2 mb-md-0">
          <FaPlus className="me-1" /> Assignment
        </Button>
      </div>
    </div>
  );
}
