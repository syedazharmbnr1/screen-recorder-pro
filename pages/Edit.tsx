import React, { useState } from 'react'
import VideoEditor from '@/components/VideoEditor'

const Edit = () => {
  const [videoToEdit, setVideoToEdit] = useState<Blob | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setVideoToEdit(file)
    }
  }

  const handleVideoEdit = (editedBlob: Blob) => {
    // TODO: Implement save/export logic
    console.log('Video edited:', editedBlob)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Video Editor</h1>
      
      <div className="mb-6">
        <input 
          type="file" 
          accept="video/*" 
          onChange={handleFileUpload} 
          className="mb-4"
        />
      </div>

      {videoToEdit && (
        <VideoEditor 
          videoBlob={videoToEdit} 
          onEdit={handleVideoEdit} 
        />
      )}
    </div>
  )
}

export default Edit