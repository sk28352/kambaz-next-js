export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

      <label htmlFor="wd-description">Description</label>
      <textarea id="wd-description">
The assignment is available online. Submit a link or pdf.      </textarea>
      <br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Group</label>
            </td>
            <td>
              <input id="wd-group" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Points</option>
                <option>Percentage</option>
                <option>Letter Grade</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Text Entry</option>
                <option>File Upload</option>
                <option>Website URL</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-website-url">Website URL</label>
            </td>
            <td>
              <input id="wd-website-url" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </td>
            <td>
              <input id="wd-media-recordings" type="checkbox" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </td>
            <td>
              <input id="wd-student-annotation" type="checkbox" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>
            <td>
              <input id="wd-file-upload" type="checkbox" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
