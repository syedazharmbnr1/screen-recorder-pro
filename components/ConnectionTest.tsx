import React, { useState } from 'react'

const ConnectionTest = () => {
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle')

  const testConnection = async () => {
    setConnectionStatus('testing')
    try {
      // Simulated connection test
      await new Promise(resolve => setTimeout(resolve, 1500))
      setConnectionStatus('success')
    } catch (error) {
      setConnectionStatus('error')
    }
  }

  return (
    <div className="connection-test p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-semibold mb-4">Connection Test</h2>
      <button 
        onClick={testConnection}
        disabled={connectionStatus === 'testing'}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {connectionStatus === 'testing' ? 'Testing...' : 'Test Connection'}
      </button>

      {connectionStatus === 'success' && (
        <div className="text-green-600 mt-4">
          Connection successful!
        </div>
      )}

      {connectionStatus === 'error' && (
        <div className="text-red-600 mt-4">
          Connection failed. Please check your network.
        </div>
      )}
    </div>
  )
}

export default ConnectionTest