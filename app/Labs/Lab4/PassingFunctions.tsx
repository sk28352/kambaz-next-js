"use client";

export default function PassingFunctions({
  theFunction,
}: {
  theFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions" className="mb-4">
      <h2>Passing Functions</h2>
      <button onClick={theFunction} className="btn btn-primary" id="wd-invoke-fn">
        Invoke the Function
      </button>
      <hr />
    </div>
  );
}
