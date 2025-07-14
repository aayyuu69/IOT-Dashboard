const express = require("express")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 5000

// Enable CORS for frontend access
app.use(cors())
app.use(express.json())

// Helper function to generate random values within a range
const getRandomValue = (min, max, decimals = 1) => {
  return Number.parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
}

// Sensor data endpoint
app.get("/api/sensor-data", (req, res) => {
  try {
    // Generate realistic sensor readings
    const sensorData = {
      temperature: getRandomValue(20, 100, 1), // °C (20-100°C range)
      vibration: getRandomValue(5, 30, 1), // mm/s (5-30 mm/s range)
      current: getRandomValue(10, 50, 1), // A (10-50 Amperes range)
      voltage: getRandomValue(200, 250, 1), // V (200-250 Volts range)
      timestamp: new Date().toISOString(),
    }

    console.log(`[${new Date().toLocaleTimeString()}] Sensor data requested:`, sensorData)

    res.json(sensorData)
  } catch (error) {
    console.error("Error generating sensor data:", error)
    res.status(500).json({ error: "Internal server error" })
  }
})

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "MachineWise Backend is running" })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 MachineWise Backend running on port ${PORT}`)
  console.log(`📊 Sensor data endpoint: http://localhost:${PORT}/api/sensor-data`)
})
