"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { Button, ListGroupItem } from "react-bootstrap";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();

  return (
    <ListGroupItem className="d-flex align-items-center justify-content-between" key={todo.id}>
      <div>
        <Button
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click"
          className="me-2 bg-primary text-white border-0"
        >
          Edit
        </Button>
        <Button
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
          className="bg-danger text-white border-0"
        >
          Delete
        </Button>
      </div>
      <span className="ms-3 flex-grow-1">{todo.title}</span>
    </ListGroupItem>
  );
}
