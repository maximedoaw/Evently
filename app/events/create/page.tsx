"use client"
import React,{ useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from '@/app/firebase';
import { v4 } from 'uuid';
import Event, { add_event, get_event } from '@/app/helper/action';
import { categories } from '@/app/helper/helper';
//import { useRouter } from 'next/router';

function page() {
  const [EventName,SetEventName] = useState<string>("")
  const [Site,SetSite] = useState<string>("")
  const [Email,SetEmail] = useState<string>("")
  const [Contact,SetContact] = useState<any>(0)
  const [Date,SetDate] = useState<string>("")
  const [Description,SetDescription] = useState<string>("")
  const [ImageUpload,SetImageUpload] = useState<File | any>(null)
  const [Category,SetCategory] = useState("")
  const info : Event = {
    Contact: Contact,
    Date: Date,
    Description: Description,
    Email: Email,
    Site: Site,
    EventName: EventName,
    category:Category,
    ImageUpload: ImageUpload,
    // image: '',
    // events: undefined
  }

  return (
      <div className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Create event</h2>
        <form className="flex flex-wrap " onSubmit={(event) => event.preventDefault()}>
            <input
                type="text"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Event name"
                onChange={(e) => SetEventName(() => e.target.value)}
            />
            <input
                type="text"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Lieu"
                onChange={(e) => SetSite(() => e.target.value)}
            />
            <input
                type="email"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                placeholder="Email"
                onChange={(e) => SetEmail(() => e.target.value)}

            />
            <input
                type="number"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Contact"
                onChange={(e) : void => SetContact(e.target.value)}

            />
 
            <input
                type="date"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 
                focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%] user-select-none"
                placeholder="Date of Birth"
                onChange={(e) => SetDate(() => e.target.value)}
            />

            <textarea
                name="Description"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                placeholder="Description"
                onChange={(e) => SetDescription(() => e.target.value)}

            ></textarea>
            
            <select onChange={(e) => {SetCategory(() => e.target.value)
              console.log(e.target.value) 
              }
              }>
              {
                categories.map((category) => <option className = "bg-grey-700 text-gray-200">{category}</option>)
              }
            </select>
            <input 
            type="file" 
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                const file = e.target.files?.[0];
                if (file) {
                  SetImageUpload(file);
                }
              }
            }
            />
            <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                onClick={() => add_event(info)}
            >
                Add
            </button>
        </form>
      </div>
    </div>
  )
}

export default page
