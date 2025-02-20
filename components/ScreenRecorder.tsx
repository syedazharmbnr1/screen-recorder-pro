import React, { useState } from 'react'

interface ScreenRecorderProps {
  onRecordingStart?: () => void
  onRecordingStop?: (recordedBlob: Blob) => void
}

const ScreenRecorder: React.FC<ScreenRecorderProps> = ({
  onRecordingStart,
  onRecordingStop
}) => {
  const [isRecording, setIsRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      })

      const recorder = new MediaRecorder(stream)
      const chunks: Blob[] = []

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data)
        }
      }

      recorder.onstop = () => {
        const recordedBlob = new Blob(chunks, { type: 'video/webm' })
        onRecordingStop?.(recordedBlob)
      }

      recorder.start()
      setMediaRecorder(recorder)
      setIsRecording(true)
      onRecordingStart?.()
    } catch (error) {
      console.error('Error starting recording:', error)
    }
  }

  const stopRecording = () => {
    mediaRecorder?.stop()
    setIsRecording(false)
  }

  return (
    <div className="screen-recorder">
      {!isRecording ? (
        <button 
          onClick={startRecording} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Start Recording
        </button>
      ) : (
        <button 
          onClick={stopRecording} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Stop Recording
        </button>
      )}
    </div>
  )
}

export default ScreenRecorder