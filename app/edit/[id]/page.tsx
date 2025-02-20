import React from 'react'

interface EditPageProps {
  params: { id: string }
}

export default function EditPage({ params }: EditPageProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Recording: {params.id}</h1>
      {/* TODO: Add video editing interface */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <p>Video editing functionality will be implemented here.</p>
      </div>
    </div>
  )
}