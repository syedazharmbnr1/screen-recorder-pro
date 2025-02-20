import React, { useState } from 'react'

const ConfigureTab = () => {
  const [quality, setQuality] = useState('high')
  const [fps, setFps] = useState(60)

  return (
    <div className="configure-tab p-4">
      <h2 className="text-xl font-bold mb-4">Recording Configuration</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Video Quality</label>
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

      <div className="mb-4">
        <label className="block mb-2">Frame Rate (FPS)</label>
        <select 
          value={fps} 
          onChange={(e) => setFps(Number(e.target.value))}
          className="w-full p-2 border rounded"
        >
          <option value={30}>30 FPS</option>
          <option value={60}>60 FPS</option>
        </select>
      </div>
    </div>
  )
}

export default ConfigureTab