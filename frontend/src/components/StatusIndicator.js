import "./StatusIndicator.css"

const StatusIndicator = ({ status }) => {
  const getStatusIcon = (statusText) => {
    switch (statusText) {
      case "Healthy":
        return "✅"
      case "Warning":
        return "⚠️"
      case "Critical":
        return "🚨"
      default:
        return "❓"
    }
  }

  return (
    <div className="status-indicator">
      <div className={`status-badge status-${status.status.toLowerCase()}`} style={{ backgroundColor: status.color }}>
        <span className="status-icon">{getStatusIcon(status.status)}</span>
        <span className="status-text">Machine Status: {status.status}</span>
      </div>
    </div>
  )
}

export default StatusIndicator
