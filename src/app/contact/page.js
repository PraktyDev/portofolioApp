'use client'
import Success from '@components/Success';
import Error from '@components/Error';
import React, { useState } from 'react';
import { Suspense } from 'react'
import Loading from './Loading'

export default function Contactpage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    message: "",
  });
  
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleFormInput = (e) =>{
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const response = await fetch('api/contact',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setIsSuccess(true)
        setIsError(false)
        setFormData({ ...formData, 
          firstname: "",
          lastname: "",
          company: "",
          email: "",
          message: "",
        })
      }else {
        setIsSuccess(false)
        setIsError(true)

      }
    } catch (error) {
        return {
          message: 'Failed to send message'
        }
    }
  }

return (
  <Suspense fallback={<Loading />}>
  <div className="px-6 py-10 tablet:py-12 laptop:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white tablet:text-4xl">Contact Me</h2>
      <p className="mt-2 text-lg leading-8 text-yellow-400">
        Send me a message.
      </p>
    </div>

    {isSuccess && <Success />}
    {isError && <Error />}

    <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl tablet:mt-10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 tablet:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
            First name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="firstname"
              value={formData.firstname} 
              onChange={handleFormInput}
              id="first-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 tablet:text-sm tablet:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
            Last name
          </label>
          <div className="mt-1">
            <input
              type="text"
              value={formData.lastname} 
              onChange={handleFormInput}
              name="lastname"
              id="last-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 tablet:text-sm tablet:leading-6"
            />
          </div>
        </div>
        <div className="tablet:col-span-2">
          <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
            Company
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="company"
              value={formData.company} 
              onChange={handleFormInput}
              id="company"
              className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 tablet:text-sm tablet:leading-6"
            />
          </div>
        </div>
        <div className="tablet:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
            Email
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="email"
              value={formData.email} 
              onChange={handleFormInput}
              id="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 tablet:text-sm tablet:leading-6"
            />
          </div>
        </div>

        <div className="tablet:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
            Message
          </label>
          <div className="mt-1">
            <textarea
              name="message"
              value={formData.message} 
              onChange={handleFormInput}
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 tablet:text-sm tablet:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
  </Suspense>
)
}
