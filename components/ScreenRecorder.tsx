import React, { useState, useRef } from 'react'

interface ScreenRecorderProps {
  onRecordingStart?: () => void
  onRecordingStop?: (recordedBlob: Blob) => void
}

const ScreenRecorder: React.FC<ScreenRecorderProps> = ({
  onRecordingStart,
  onRecordingStop
}) => {
  const [isRecording, setIsRecording] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      })

      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data)
        }
      }

      mediaRecorder.onstop = () => {
        const recordedBlob = new Blob(chunksRef.current, { type: 'video/webm' })
        onRecordingStop?.(recordedBlob)
      }

      mediaRecorder.start()
      setIsRecording(true)
      onRecordingStart?.()
    } catch (error) {
      console.error('Error starting recording:', error)
    }
  }

  const stopRecording = () => {
    mediaRecorderRef.current?.stop()
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