import { useRef } from "react";

const UseRefExample1 = () => {

  const inputRef = useRef();
  const paraRef = useRef();
  
  
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef.current.value);
    inputRef.current.value = "Vanakam";
    inputRef.current.style.backgroundColor = "blue";
    inputRef.current.style.color = "#ffffff";
    paraRef.current.innerText = "GoodBye";
  }

  return (
    <div className='container mt-5'>
       <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' ref={inputRef} className='form-control mb-3' />
          <button type='submit' className='btn btn-primary'>Submit</button>
          <p ref={paraRef}>Hello</p>
       </form>
    </div>
  )
}

export default UseRefExample1