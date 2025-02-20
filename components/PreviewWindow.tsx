import React from 'react'

interface PreviewWindowProps {
  videoBlob?: Blob
  width?: number
  height?: number
}

const PreviewWindow: React.FC<PreviewWindowProps> = ({
  videoBlob,
  width = 640,
  height = 360
}) => {
  return (
    <div className="preview-window">
      {videoBlob ? (
        <video
          src={URL.createObjectURL(videoBlob)}
          width={width}
          height={height}
          controls
          className="rounded-lg shadow-md"
        />
      ) : (
        <div 
          className="flex items-center justify-center bg-gray-200 rounded-lg"
          style={{ width, height }}
        >
          <p className="text-gray-500">No video selected</p>
        </div>
      )}
    </div>
  )
}

export default PreviewWindow