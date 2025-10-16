"use client";

import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { modules as allModules } from "../../../Database";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { cid } = useParams();

  const courseModules = allModules.filter((m: any) => m.course === cid);

  return (
    <div>
      {courseModules.length === 0 && (
        <p className="text-muted">No modules available for this course.</p>
      )}

      <ListGroup className="rounded-0" id="wd-modules">
        {courseModules.map((module: any) => (
          <ListGroupItem
            key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
              <span>
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
              </span>
              <ModuleControlButtons />
            </div>

            {module.lessons && module.lessons.length > 0 && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem
                    key={lesson._id}
                    className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between"
                  >
                    <span>
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                    </span>
                    <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
