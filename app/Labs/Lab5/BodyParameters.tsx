"use client";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function BodyParameters() {
  const [a, setA] = useState("12");
  const [b, setB] = useState("4");
  const [result, setResult] = useState<any>(null);

  const send = async () => {
    const response = await fetch(`${HTTP_SERVER}/lab5/body`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ a, b }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div id="wd-body-parameters">
      <h3>Body Parameters (POST Request)</h3>

      <FormControl
        className="mb-2"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <FormControl
        className="mb-2"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <Button className="mb-3" onClick={send}>
        Send POST to Server
      </Button>

      {result && (
        <pre className="bg-light p-3 rounded">
{JSON.stringify(result, null, 2)}
        </pre>
      )}

      <hr />
    </div>
  );
}
