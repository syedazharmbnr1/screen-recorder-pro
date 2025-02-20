import React from 'react'

interface ExportPageProps {
  params: { id: string }
}

export default function ExportPage({ params }: ExportPageProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Export Recording: {params.id}</h1>
      {/* TODO: Add export options */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <p>Video export options and processing will be implemented here.</p>
      </div>
    </div>
  )
}