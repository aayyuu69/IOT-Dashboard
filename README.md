# 🏭 MachineWise IoT Dashboard

A full-stack Industrial IoT dashboard application that simulates and monitors real-time machine sensor data with intelligent status monitoring.

## 📋 Overview

MachineWise is an Industrial IoT dashboard that displays real-time sensor readings from industrial machines. The application simulates sensor data for temperature, vibration, current, and voltage, and provides intelligent machine status monitoring with color-coded alerts.

## 🛠 Tech Stack

**Frontend:**
- React.js 18
- CSS3 with responsive design
- Fetch API for HTTP requests

**Backend:**
- Node.js
- Express.js
- CORS middleware

## 🏗 Architecture & Logic Flow

### Backend Logic
1. **Express Server**: Runs on port 5000 with CORS enabled
2. **Sensor Data Generation**: 
   - Temperature: 20-100°C (realistic industrial range)
   - Vibration: 5-30 mm/s (typical machinery vibration)
   - Current: 10-50 A (industrial motor range)
   - Voltage: 200-250 V (standard industrial voltage)
3. **API Endpoint**: \`/api/sensor-data\` returns JSON with current readings and timestamp

### Frontend Logic
1. **Data Fetching**: Polls backend every 5 seconds using \`useEffect\` and \`setInterval\`
2. **Status Determination**:
   - **Critical** (Red): Temperature > 80°C AND Vibration > 20 mm/s
   - **Warning** (Orange): Temperature > 80°C OR Vibration > 20 mm/s  
   - **Healthy** (Green): Neither condition met
3. **Real-time Updates**: State management with React hooks for live data display
4. **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   \`\`\`bash
   cd backend
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the server:
   \`\`\`bash
   npm start
   \`\`\`
   
   For development with auto-restart:
   \`\`\`bash
   npm run dev
   \`\`\`

The backend will run on \`http://localhost:5000\`

### Frontend Setup
1. Navigate to the frontend directory:
   \`\`\`bash
   cd frontend
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the React application:
   \`\`\`bash
   npm start
   \`\`\`

The frontend will run on \`http://localhost:3000\`

## 📊 Features

- **Real-time Monitoring**: Live sensor data updates every 5 seconds
- **Intelligent Status System**: Automated machine health assessment
- **Visual Alerts**: Color-coded status indicators and threshold warnings
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Error Handling**: Graceful handling of connection issues with retry functionality
- **Clean UI**: Modern, industrial-themed interface

## 🔧 Key Implementation Decisions

### 1. **Polling vs WebSockets**
- **Choice**: HTTP polling every 5 seconds
- **Reasoning**: Simpler implementation, sufficient for IoT monitoring frequency
- **Trade-off**: Less real-time than WebSockets but more reliable for this use case

### 2. **State Management**
- **Choice**: React hooks (\`useState\`, \`useEffect\`)
- **Reasoning**: Lightweight solution for simple state requirements
- **Alternative**: Redux would be overkill for this scope

### 3. **Component Architecture**
- **Choice**: Modular component structure
- **Components**: Dashboard, SensorCard, StatusIndicator
- **Benefit**: Reusable, maintainable, and testable code

### 4. **Styling Approach**
- **Choice**: CSS modules with responsive design
- **Reasoning**: No external dependencies, full control over styling
- **Features**: CSS Grid, Flexbox, animations, mobile-first design

### 5. **Error Handling**
- **Choice**: Comprehensive error states with retry functionality
- **Implementation**: Try-catch blocks, loading states, user feedback
- **UX**: Clear error messages and recovery options

## 🚀 Production Improvements

### 1. **Database Integration**
- Replace mock data with real database (PostgreSQL, MongoDB)
- Implement data persistence and historical tracking
- Add data aggregation and analytics

### 2. **Authentication & Authorization**
- User authentication system
- Role-based access control
- API key management for sensor devices

### 3. **Real-time Communication**
- WebSocket implementation for instant updates
- Server-sent events for live data streaming
- Push notifications for critical alerts

### 4. **Data Visualization**
- Charts and graphs (Chart.js, D3.js)
- Historical data trends
- Predictive analytics dashboard

### 5. **Scalability & Performance**
- Redis caching for sensor data
- Load balancing for multiple machines
- Database indexing and query optimization
- CDN for static assets

### 6. **Monitoring & Logging**
- Application performance monitoring (APM)
- Structured logging with Winston
- Health check endpoints
- Error tracking (Sentry)

### 7. **Security Enhancements**
- HTTPS enforcement
- Rate limiting
- Input validation and sanitization
- Security headers (helmet.js)

### 8. **DevOps & Deployment**
- Docker containerization
- CI/CD pipelines
- Environment configuration management
- Automated testing (unit, integration, e2e)

### 9. **Advanced Features**
- Machine learning for anomaly detection
- Automated alert systems (email, SMS)
- Multi-tenant architecture
- Mobile app development

### 10. **Data Management**
- Data retention policies
- Backup and disaster recovery
- Data export capabilities
- Compliance with industrial standards

## 📱 Usage

1. Start both backend and frontend servers
2. Open \`http://localhost:3000\` in your browser
3. Monitor real-time sensor data updates
4. Observe status changes based on threshold conditions
5. Check alerts when thresholds are exceeded

## 🧪 Testing the Status Logic

To test different machine states:
- **Healthy**: Wait for readings where temp ≤ 80°C and vibration ≤ 20 mm/s
- **Warning**: Look for temp > 80°C OR vibration > 20 mm/s (but not both)
- **Critical**: Wait for temp > 80°C AND vibration > 20 mm/s simultaneously

## 📄 API Documentation

### GET /api/sensor-data
Returns current sensor readings

**Response:**
\`\`\`json
{
  "temperature": 75.2,
  "vibration": 18.5,
  "current": 32.1,
  "voltage": 235.7,
  "timestamp": "2024-01-15T10:30:45.123Z"
}
\`\`\`

### GET /api/health
Health check endpoint

**Response:**
\`\`\`json
{
  "status": "OK",
  "message": "MachineWise Backend is running"
}
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

---

**MachineWise IoT Dashboard** - Empowering Industrial Intelligence 🏭⚡
