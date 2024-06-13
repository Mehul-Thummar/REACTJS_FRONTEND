import React from 'react'
import { ArrowRight } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import { FaUserEdit } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Edit = () => {
  return (
    <div>

      <section className="rounded-md bg-black/70 p-2 ">
        <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
              <FaUserEdit className='text-4xl'/>
            </div>
            <h2 className="text-2xl font-bold text-center leading-tight text-black">Edit Users Form</h2>

            <form action="#" method="POST" className="mt-4">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    User{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="User Name"
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Proffesion{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="User Proffesion"
                    ></input>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        {' '}
                        Age{' '}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="number"
                        placeholder="User Age"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        {' '}
                        Mobile No{' '}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="tel"
                        placeholder="User Mobile No"
                      ></input>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Add Image{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                    ></input>
                  </div>
                </div>
                <div className='flex space-x-8 justify-evenly'>
                  <NavLink to="/">
                    <button type="button" className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 whitespace-nowrap">
                      <ArrowLeft className="mr-2" size={16} /> Go Back</button>
                  </NavLink>
                  {/* <NavLink to="/"> */}
                  <button type="button" className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                    Edit User <ArrowRight className="ml-2" size={16} /></button>
                  {/* </NavLink> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Edit
