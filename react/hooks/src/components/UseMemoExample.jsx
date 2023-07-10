import { useState, useEffect, useRef, useMemo } from "react";

const UseMemoExample = () => {

  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  })

  const onClick = () => {
    setInc((pervState) => {
      console.log(pervState + 1);
      return pervState + 1;
    })
  }

  return (
    <div className="m-3">
      <input type="number" 
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      className="form-control w-25"/>

      <h2 className="my-3">
        The sqrt of {number} is {sqrt};
      </h2>

      <button onClick={onClick} className="btn btn-primary">
        Re Render
      </button>

      <h3>Renders : {renders.current}</h3>
    </div>
  )
}

function getSqrt(n){
  for(let i = 0; i<= 10000; i++){
    console.log(i);
  }

  console.log("Expensive Function Called");
  return Math.sqrt(n);
}

export default UseMemoExample