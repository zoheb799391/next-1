"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";
import { Input } from '@chakra-ui/react'
import { Stack } from "@mui/material";

export default function Signup() {

    const [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const onSubmit = async (e) => {
        if (!user.name || !user.email || !user.password) {
            console.log("invalid credentials");
        } else {
            try {
                e.preventDefault();
                console.log(user)
                
            } catch (err) {
                console.log('data', err)

            }

        }

    }
    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src="https://logowik.com/content/uploads/images/t_member6137.jpg"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Signup to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name 
                </label>
                <div className="mt-2">
                  <input
                    id="Name"
                    name="Name"
                    type="Name"
                    autoComplete="Name"
                    value={user.name}
                    onChange={(e) => setuser({ ...user, name: e.target.value })}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={user.email}
                    onChange={(e) => setuser({ ...user, email: e.target.value })}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={user.password}
                    onChange={(e) => setuser({ ...user, password: e.target.value })}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               onClick={onSubmit}
                  >
                  Sign up
                </button>
              </div>
            </form>
            
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already a user?{' '}
              <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login
              </Link>
            </p>
          </div>
        </div>
        </>
    
    )
}