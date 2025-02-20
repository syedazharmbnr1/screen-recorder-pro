import React, { useState } from 'react'

const ExportTab = () => {
  const [format, setFormat] = useState('mp4')
  const [quality, setQuality] = useState('high')

  const handleExport = () => {
    console.log(`Exporting video - Format: ${format}, Quality: ${quality}`)
  }

  return (
    <div className="export-tab p-4">
      <h2 className="text-xl font-bold mb-4">Export Recording</h2>
      
      <div className="mb-4">
        <label className="block mb-2">File Format</label>
        <select 
          value={format} 
          onChange={(e) => setFormat(e.target.value)}
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
          onChange={(e) => setQuality(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <button 
        onClick={handleExport}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Export Video
      </button>
    </div>
  )
}

export default ExportTab