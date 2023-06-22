import React from 'react'
// next router
import { useRouter } from 'next/router'

const PageCard = (props) => {
  // next router
  const router = useRouter()

  const { name, link, description } = props
  console.log(name)

  return (
    <button 
      className="nx-w-full nx-h-32 nx-flex nx-gap-4 nx-justify-between nx-p-4 nx-bg-blue-500/10 nx-border nx-border-blue-500/30 nx-rounded-lg nx-transition hover:nx-opacity-70"
      onClick={() => router.push(link)}
    >

      {/* page name */}
      <div className="nx-flex nx-flex-col nx-text-left nx-h-full">
        <p className="nx-font-medium nx-capitalize">{name}</p>
        <p className="nx-opacity-60 nx-line-clamp-2">{description}</p>
        {/* link */}
        <p className="nx-text-sm nx-mt-auto nx-opacity-30">{link}</p>
      </div>

      {/* page icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nx-w-6 nx-h-6 nx-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>

    </button>
  )
}

export default PageCard