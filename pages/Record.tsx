import React, { useState } from 'react'
import ScreenRecorder from '@/components/ScreenRecorder'

const Record = () => {
  const [recordedVideo, setRecordedVideo] = useState<Blob | null>(null)

  const handleRecordingStop = (blob: Blob) => {
    setRecordedVideo(blob)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Screen Recording</h1>
      
      <ScreenRecorder 
        onRecordingStop={handleRecordingStop} 
      />

      {recordedVideo && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Recorded Video</h2>
          <video 
            src={URL.createObjectURL(recordedVideo)} 
            controls 
            className="max-w-full"
          />
        </div>
      )}
    </div>
  )
}

export default Record