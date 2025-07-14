import Dashboard from "./components/Dashboard"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🏭 MachineWise IoT Dashboard</h1>
        <p>Real-time Industrial Machine Monitoring</p>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  )
}

export default App
