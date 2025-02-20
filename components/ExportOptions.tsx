import React, { useState } from 'react'

interface ExportOptionsProps {
  onExport: (options: {
    format: 'mp4' | 'webm'
    quality: 'high' | 'medium' | 'low'
    includeAudio: boolean
  }) => void
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ onExport }) => {
  const [format, setFormat] = useState<'mp4' | 'webm'>('mp4')
  const [quality, setQuality] = useState<'high' | 'medium' | 'low'>('high')
  const [includeAudio, setIncludeAudio] = useState(true)

  const handleExport = () => {
    onExport({
      format,
      quality,
      includeAudio
    })
  }

  return (
    <div className="export-options p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Export Settings</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Format</label>
        <select 
          value={format} 
          onChange={(e) => setFormat(e.target.value as 'mp4' | 'webm')}
          className="w-full p-2 border rounded"
        >
          <option value="mp4">MP4</option>
          <option value="webm">WebM</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Quality</label>
        <select 
          value={quality} 
          onChange={(e) => setQuality(e.target.value as 'high' | 'medium' | 'low')}
          className="w-full p-2 border rounded"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input 
            type="checkbox"
            checked={includeAudio}
            onChange={(e) => setIncludeAudio(e.target.checked)}
            className="mr-2"
          />
          Include Audio
        </label>
      </div>

      <button 
        onClick={handleExport}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Export Video
      </button>
    </div>
  )
}

export default ExportOptions