import React from 'react'

const index = () => {
  return (
    <div className="container mx-auto px-6 py-16 pt-28 text-center">
            <div className="mx-auto max-w-lg">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">This is a container which is empty right now will later be fulled.</h1>

            <p className="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.</p>

            
            </div>

            <div className="mx-auto mt-28 max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                 <div>Photo</div>
                </div>

                <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                  <div>Photo</div>
                </div>

                <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                  <div>Photo</div>
                </div>

                <div className="col-span-1 flex items-center justify-center md:col-span-3 lg:col-span-1">
                  <div>Photo</div>
                </div>

                <div className="col-span-2 flex items-center justify-center md:col-span-3 lg:col-span-1">
                  <div>Photo</div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default index