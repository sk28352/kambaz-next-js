"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { FormControl, Button } from "react-bootstrap";

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div className="w-100 w-md-50" id="wd-add-redux">
      <h3>Add Redux</h3>
      <h4>{a} + {b} = {sum}</h4>

      <FormControl
        type="number"
        defaultValue={a}
        onChange={(e: any) => setA(parseInt(e.target.value || "0"))}
        className="mb-2"
      />
      <FormControl
        type="number"
        defaultValue={b}
        onChange={(e: any) => setB(parseInt(e.target.value || "0"))}
        className="mb-2"
      />
      <Button
        id="wd-add-redux-click"
        onClick={() => dispatch(add({ a, b }))}
        className="mb-3"
      >
        Add Redux
      </Button>
      <hr />
    </div>
  );
}
