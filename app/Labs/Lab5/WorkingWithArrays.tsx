"use client";
import { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;

  const [todo, setTodo] = useState({
    id: "1",
    title: "Task Title",
    description: "Description",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      {/* -------------------- RETRIEVE ALL -------------------- */}
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />

      {/* -------------------- RETRIEVE BY ID -------------------- */}
      <h4>Retrieving an Item by ID</h4>

      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>

      <FormControl
        id="wd-todo-id"
        className="w-50"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      {/* -------------------- FILTER COMPLETED -------------------- */}
      <h4>Filtering by Completed</h4>

      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      {/* -------------------- CREATE NEW -------------------- */}
      <h4>Creating New Items</h4>

      <a id="wd-create-todo" className="btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <hr />

      {/* -------------------- DELETE -------------------- */}
      <h4>Removing from Array</h4>

      <a
        id="wd-remove-todo"
        className="btn btn-danger float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}
      </a>

      <FormControl
        className="w-50"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      {/* -------------------- UPDATE TITLE -------------------- */}
      <h4>Update Title</h4>

      <a
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Title
      </a>

      <FormControl
        className="w-25 float-start me-2"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />

      <FormControl
        className="w-50 float-start"
        defaultValue={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <br />
      <hr />

      {/* -------------------- UPDATE DESCRIPTION -------------------- */}
      <h4>Update Description</h4>

      <a
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Update Description
      </a>

      <FormControl
        className="w-50"
        defaultValue={todo.description}
        onChange={(e) =>
          setTodo({ ...todo, description: e.target.value })
        }
      />
      <br />
      <br />
      <hr />

      {/* -------------------- UPDATE COMPLETED -------------------- */}
      <h4>Update Completed</h4>

      <a
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completed
      </a>

      <input
        type="checkbox"
        className="form-check-input"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({ ...todo, completed: e.target.checked })
        }
      />
      <br />
      <hr />
    </div>
  );
}
