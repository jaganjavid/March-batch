import { useEffect, useState } from "react"
const Test = () => {

  const [number, setNumber] = useState(0);  

  useEffect(() => {
    setNumber((prev) => {
      return prev + 1;
    })
  })

  return (
    <div>
        <h1>{number}</h1>
    </div>
  )
}

export default Test