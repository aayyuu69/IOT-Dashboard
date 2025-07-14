import "./SensorCard.css"

const SensorCard = ({ title, value, unit, icon, threshold, isWarning }) => {
  return (
    <div className={`sensor-card ${isWarning ? "warning" : ""}`}>
      <div className="sensor-header">
        <span className="sensor-icon">{icon}</span>
        <h3 className="sensor-title">{title}</h3>
      </div>

      <div className="sensor-value">
        <span className="value">{value}</span>
        <span className="unit">{unit}</span>
      </div>

      {threshold && (
        <div className="sensor-threshold">
          <small>
            Threshold: {threshold} {unit}
          </small>
          {isWarning && <span className="warning-indicator">⚠️ Exceeded</span>}
        </div>
      )}
    </div>
  )
}

export default SensorCard
