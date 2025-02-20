import React from 'react'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Screen Recorder Pro</h1>
        <p className="text-xl mb-8">Advanced screen recording and video editing</p>
        
        <div className="flex justify-center space-x-4">
          <Button variant="default" size="lg">Start Recording</Button>
          <Button variant="outline" size="lg">View Recordings</Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Screen Capture</h3>
              <p>Record your screen in high quality</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Video Editing</h3>
              <p>Trim and enhance your recordings</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Export</h3>
              <p>Share your videos easily</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home