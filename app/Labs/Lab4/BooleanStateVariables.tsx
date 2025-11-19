"use client";
import { useState } from "react";

export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);

  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>

      <label className="form-control d-flex align-items-center gap-2">
        <input
          type="checkbox"
          checked={done}
          onChange={() => setDone(!done)}
        />
        Done
      </label>

      {done && (
        <div className="alert alert-success mt-2">
          Yay! You are done 
        </div>
      )}
      <hr />
    </div>
  );
}
