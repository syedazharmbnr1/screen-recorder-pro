import React, { useState } from 'react'

interface VideoEditorProps {
  videoBlob?: Blob
  onEdit?: (editedBlob: Blob) => void
}

const VideoEditor: React.FC<VideoEditorProps> = ({ videoBlob, onEdit }) => {
  const [trimStart, setTrimStart] = useState(0)
  const [trimEnd, setTrimEnd] = useState(0)

  const handleTrimStart = (value: number) => {
    setTrimStart(value)
  }

  const handleTrimEnd = (value: number) => {
    setTrimEnd(value)
  }

  const applyEdits = () => {
    if (videoBlob) {
      // TODO: Implement actual video editing
      console.log('Applying edits', { trimStart, trimEnd })
      onEdit?.(videoBlob)
    }
  }

  return (
    <div className="video-editor">
      {videoBlob && (
        <>
          <video 
            src={URL.createObjectURL(videoBlob)} 
            controls 
            className="mb-4"
          />
          <div className="trim-controls">
            <label className="block mb-2">Trim Start (seconds)</label>
            <input 
              type="range"
              min="0"
              max="100"
              value={trimStart}
              onChange={(e) => handleTrimStart(Number(e.target.value))}
              className="w-full"
            />
            <label className="block mb-2">Trim End (seconds)</label>
            <input 
              type="range"
              min="0"
              max="100"
              value={trimEnd}
              onChange={(e) => handleTrimEnd(Number(e.target.value))}
              className="w-full"
            />
            <button 
              onClick={applyEdits}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Apply Edits
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default VideoEditor