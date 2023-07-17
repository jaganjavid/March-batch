import { useState } from "react";
import Todo from "./Todo";

const UseRefExample3 = () => {

  const [showTodo, setShowTodo] = useState(true);  

  return (
    <div>
        {showTodo && <Todo/>}
        <button className="btn btn-success" onClick={() => setShowTodo(!showTodo)}>
            Toggle Todo
        </button>
    </div>
  )
}

export default UseRefExample3