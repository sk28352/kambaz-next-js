"use client";

import { Provider } from "react-redux";
import HelloRedux from "./HelloRedux/page";
import CounterRedux from "./CounterRedux/page";
import AddRedux from "./AddRedux/page";
import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
  return (
    
    <div id="wd-redux-examples" className="mb-4">
      <h2>Redux Examples</h2>

      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList/>
    </div>
  );
}
