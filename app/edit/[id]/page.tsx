import React from 'react'

interface EditPageProps {
  params: { id: string }
}

export default function EditPage({ params }: EditPageProps) {
  return (
    <div className="container mx-auto p-4">
      <h1>Edit Recording: {params.id}</h1>
      {/* TODO: Add video editing interface */}
    </div>
  )
}