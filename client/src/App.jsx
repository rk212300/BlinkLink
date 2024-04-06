import { useState } from "react"
import { Button } from "./components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <p>Count: {count}</p>
    </div>
  )
}

export default App
