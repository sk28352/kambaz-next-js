import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
        id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/5678" className="wd-assignment-link">
            A1 - ENV + HTML
            <div> Multiple Modules|Not available until May 6| </div>
            <div> <b>Due </b> May 12|100 points| </div>
          </Link>
        </li>

        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/5678" className="wd-assignment-link">
            A2 - CSS and Bootstrap
            <div> Multiple Modules|<b> Not available until May 12 </b>| </div>
            <div> <b>Due </b> May 19 |100 points| </div>
          </Link>
        </li>
        
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/5678" className="wd-assignment-link">
            A3 - Javascript + React
            <div> Multiple Modules|<b> Not available until May 19 </b>| </div>
            <div> <b>Due </b> May 27 |100 points| </div>
          </Link>
        </li>

      </ul>
    </div>
  );
}
