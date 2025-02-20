import React from 'react'

interface ExportPageProps {
  params: { id: string }
}

export default function ExportPage({ params }: ExportPageProps) {
  return (
    <div className="container mx-auto p-4">
      <h1>Export Recording: {params.id}</h1>
      {/* TODO: Add export options and processing */}
    </div>
  )
}