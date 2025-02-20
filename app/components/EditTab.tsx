import React, { useState } from 'react'

const EditTab = () => {
  const [trimStart, setTrimStart] = useState(0)
  const [trimEnd, setTrimEnd] = useState(0)

  const handleTrim = () => {
    console.log(`Trimming from ${trimStart} to ${trimEnd}`)
  }

  return (
    <div className="edit-tab p-4">
      <h2 className="text-xl font-bold mb-4">Video Editing</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Trim Start (seconds)</label>
        <input 
          type="number" 
          value={trimStart}
          onChange={(e) => setTrimStart(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Trim End (seconds)</label>
        <input 
          type="number" 
          value={trimEnd}
          onChange={(e) => setTrimEnd(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>

      <button 
        onClick={handleTrim}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply Trim
      </button>
    </div>
  )
}

export default EditTab