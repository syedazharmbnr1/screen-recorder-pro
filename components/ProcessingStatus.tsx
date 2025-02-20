import React from 'react'

interface ProcessingStatusProps {
  status: 'idle' | 'processing' | 'complete' | 'error'
  progress?: number
  errorMessage?: string
}

const ProcessingStatus: React.FC<ProcessingStatusProps> = ({
  status,
  progress = 0,
  errorMessage
}) => {
  const statusMessages = {
    idle: 'Ready to process',
    processing: 'Processing video...',
    complete: 'Processing complete',
    error: 'Processing failed'
  }

  return (
    <div className="processing-status p-4 bg-white rounded-lg shadow">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Status: {statusMessages[status]}</h3>
        
        {status === 'processing' && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        {status === 'error' && (
          <p className="text-red-500 mt-2">{errorMessage || 'An unknown error occurred'}</p>
        )}
      </div>
    </div>
  )
}

export default ProcessingStatus