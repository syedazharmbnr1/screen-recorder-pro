import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Screen Recorder Pro
        </Link>
        <div className="space-x-4">
          <Link href="/record" className="text-white hover:text-gray-300">
            Record
          </Link>
          <Link href="/edit" className="text-white hover:text-gray-300">
            Edit
          </Link>
          <Link href="/export" className="text-white hover:text-gray-300">
            Export
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar