"use client"

import { useState, useEffect } from "react"
import SensorCard from "./SensorCard"
import StatusIndicator from "./StatusIndicator"
import "./Dashboard.css"

const Dashboard = () => {
  const [sensorData, setSensorData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdate, setLastUpdate] = useState(null)

  // Function to determine machine status based on sensor readings
  const getMachineStatus = (data) => {
    if (!data) return { status: "Unknown", color: "#gray" }

    const { temperature, vibration } = data

    // Critical: Both temperature > 80°C AND vibration > 20 mm/s
    if (temperature > 80 && vibration > 20) {
      return { status: "Critical", color: "#dc3545" }
    }

    // Warning: Either temperature > 80°C OR vibration > 20 mm/s
    if (temperature > 80 || vibration > 20) {
      return { status: "Warning", color: "#fd7e14" }
    }

    // Healthy: Neither condition met
    return { status: "Healthy", color: "#28a745" }
  }

  // Function to fetch sensor data from backend
  const fetchSensorData = async () => {
    try {
      const response = await fetch("/api/sensor-data")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setSensorData(data)
      setLastUpdate(new Date())
      setError(null)
    } catch (err) {
      console.error("Error fetching sensor data:", err)
      setError("Failed to fetch sensor data. Please check if the backend server is running.")
    } finally {
      setLoading(false)
    }
  }

  // Set up polling every 5 seconds
  useEffect(() => {
    fetchSensorData() // Initial fetch

    const interval = setInterval(fetchSensorData, 5000)

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  const machineStatus = getMachineStatus(sensorData)

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading sensor data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="dashboard-error">
        <h3>⚠️ Connection Error</h3>
        <p>{error}</p>
        <button onClick={fetchSensorData} className="retry-button">
          Retry Connection
        </button>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <StatusIndicator status={machineStatus} />
        {lastUpdate && <div className="last-update">Last updated: {lastUpdate.toLocaleTimeString()}</div>}
      </div>

      <div className="sensors-grid">
        <SensorCard
          title="Temperature"
          value={sensorData.temperature}
          unit="°C"
          icon="🌡️"
          threshold={80}
          isWarning={sensorData.temperature > 80}
        />
        <SensorCard
          title="Vibration"
          value={sensorData.vibration}
          unit="mm/s"
          icon="📳"
          threshold={20}
          isWarning={sensorData.vibration > 20}
        />
        <SensorCard title="Current" value={sensorData.current} unit="A" icon="⚡" />
        <SensorCard title="Voltage" value={sensorData.voltage} unit="V" icon="🔌" />
      </div>

      {machineStatus.status !== "Healthy" && (
        <div className={`alert alert-${machineStatus.status.toLowerCase()}`}>
          <strong>⚠️ Alert:</strong> Machine status is {machineStatus.status}.
          {machineStatus.status === "Critical" ? " Immediate attention required!" : " Please monitor closely."}
        </div>
      )}
    </div>
  )
}

export default Dashboard
