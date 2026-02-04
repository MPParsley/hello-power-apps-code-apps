import { useEffect, useState } from 'react'
import './App.css'

// Note: In a real Power Apps Code App, you would import the SDK like this:
// import { initialize } from '@microsoft/power-apps/app'

// For demonstration purposes, we'll simulate the SDK initialization
// In production, replace this with the actual SDK import above

interface SdkStatus {
  initialized: boolean
  error: string | null
}

function App() {
  const [sdkStatus, setSdkStatus] = useState<SdkStatus>({
    initialized: false,
    error: null,
  })
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // Initialize the Power Apps SDK
    const initializeSdk = async () => {
      try {
        // In a real app with @microsoft/power-apps installed, uncomment this:
        // await initialize()

        // Simulating SDK initialization for demonstration
        // When running with 'pac code run', the real SDK will be available
        console.log('Power Apps SDK initialization...')

        // Simulate async initialization
        await new Promise((resolve) => setTimeout(resolve, 500))

        setSdkStatus({ initialized: true, error: null })
        console.log('Power Apps SDK initialized successfully!')
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error'
        console.error('Failed to initialize Power Apps SDK:', errorMessage)
        setSdkStatus({ initialized: false, error: errorMessage })
      }
    }

    initializeSdk()
  }, [])

  // Update time every second to show the app is running
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-container">
          <svg
            className="power-apps-logo"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#742774"
              d="M24 4L4 14v20l20 10 20-10V14L24 4z"
            />
            <path
              fill="#ae4ae8"
              d="M24 8l-16 8v16l16 8 16-8V16L24 8z"
            />
            <path
              fill="#fff"
              d="M24 14l-8 4v8l8 4 8-4v-8l-8-4z"
            />
          </svg>
          <h1>Hello Power Apps Code Apps!</h1>
        </div>

        <div className="status-card">
          <h2>SDK Status</h2>
          <div className={`status-indicator ${sdkStatus.initialized ? 'success' : sdkStatus.error ? 'error' : 'loading'}`}>
            {sdkStatus.initialized ? (
              <>
                <span className="status-icon">&#x2713;</span>
                <span>SDK Initialized</span>
              </>
            ) : sdkStatus.error ? (
              <>
                <span className="status-icon">&#x2717;</span>
                <span>Error: {sdkStatus.error}</span>
              </>
            ) : (
              <>
                <span className="status-icon spinner">&#x21BB;</span>
                <span>Initializing...</span>
              </>
            )}
          </div>
        </div>

        <div className="info-card">
          <h2>Current Time</h2>
          <p className="time-display">{currentTime.toLocaleTimeString()}</p>
          <p className="date-display">{currentTime.toLocaleDateString()}</p>
        </div>

        <div className="features-card">
          <h2>Power Apps Code Apps Features</h2>
          <ul className="features-list">
            <li>
              <strong>Microsoft Entra Authentication</strong>
              <p>Built-in enterprise authentication out of the box</p>
            </li>
            <li>
              <strong>1,500+ Connectors</strong>
              <p>Access Power Platform connectors via JavaScript</p>
            </li>
            <li>
              <strong>Managed Platform</strong>
              <p>Enterprise policies, DLP, and Conditional Access</p>
            </li>
            <li>
              <strong>Use Any Framework</strong>
              <p>Build with React, Vue, Angular, or vanilla JS</p>
            </li>
          </ul>
        </div>

        <div className="next-steps-card">
          <h2>Next Steps</h2>
          <ol className="next-steps-list">
            <li>Run <code>pac auth create</code> to authenticate</li>
            <li>Run <code>pac code init</code> to initialize your app</li>
            <li>Add data sources with <code>pac code add-data-source</code></li>
            <li>Build and publish with <code>pac code push</code></li>
          </ol>
        </div>

        <footer className="app-footer">
          <p>
            Learn more at{' '}
            <a
              href="https://learn.microsoft.com/en-us/power-apps/developer/code-apps/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Power Apps Code Apps Documentation
            </a>
          </p>
        </footer>
      </header>
    </div>
  )
}

export default App
