import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="flex items-center h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-blue-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-3xl font-semibold md:text-4xl">Not Found</p>
			<p className="mt-4 mb-8 text-lg dark:text-gray-600">Sorry, we couldn't find this page...</p>
			<Link rel="noopener noreferrer" to='/' className="px-8 py-3 font-semibold rounded dark:bg-blue-600 hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-800 dark:text-gray-50">Back to homepage</Link>
		</div>
	</div>
</section>
  )
}

export default NotFound

