import "./App.css"
import { useBearStore } from "./store"

function App() {
  const bears = useBearStore((state) => state.bears)
  const increase = useBearStore((state) => state.increasePopulation)

  return (
    <div>
      <span>bear count: {bears}</span>
      <button type="button" onClick={() => increase()}>
        button
      </button>
    </div>
  )
}

export default App
