import { useState, useEffect, useRef } from "react";

const UseRefExample2 = () => {

  const [name, setName] = useState("");
   

  const renders = useRef(0);
  const prevName = useRef("");

  useEffect(() => {
    // console.log(renders);
    // console.log(renders.current);
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);
  
  return (
    <div className="container mt-5">
        <h1 className="mb-3">Renders: {renders.current}</h1>
        <h2>Perv Name State :{prevName.current}</h2>
        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        className="form-control mb-3"/>
    </div>
  )
}

export default UseRefExample2