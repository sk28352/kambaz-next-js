import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default function CoursesLayout(props: { 
  children: ReactNode; 
  params: { cid: string }; 
}) {
  const cid = props.params?.cid ?? "";

  return (
    <div id="wd-courses">
      <h2>Courses {cid}</h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              <CourseNavigation />
            </td>
            <td valign="top" width="100%">
              {props.children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

