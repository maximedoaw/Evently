"use client"
import React,{ useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { StorageReference, ref, uploadBytes } from "firebase/storage";
import { db, storage } from '@/app/firebase';
import { v4 } from 'uuid';

function page() {
  const [EventName,SetEventName] = useState<string>("")
  const [Email,SetEmail] = useState<string>("")
  const [Contact,SetContact] = useState<any>(0)
  const [Date,SetDate] = useState<string>("")
  const [Description,SetDescription] = useState<string>("")
  const [ImageUpload,SetImageUpload] = useState<File | any>(null)
  const AddEvent = async () =>{
    try {
      const addevt = await addDoc(collection(db,"event"),{
        Contact:Contact,
        Date:Date,
        Description:Description,
        Email:Email,
        Name:EventName
      })

      const imageref = ImageUpload === null ? null :  await ref(storage,`images/${Image?.name + v4()}`)
      if(imageref){
        uploadBytes(imageref,ImageUpload).then(() => {
          alert('Upload image with successfully !!!')
        }).catch(() => {
          alert('Error this image was not upload')
        })
      }
    } catch (error : any) {
     await alert('A random error was happened')
    }
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
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                placeholder="Date of Birth"
                onChange={(e) => SetDate(() => e.target.value)}

            />
            <textarea
                name="Description"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                placeholder="Description"
                onChange={(e) => SetDescription(() => e.target.value)}

            ></textarea>
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
                onClick={AddEvent}
            >
                Add
            </button>
        </form>
      </div>
    </div>
  )
}

export default page
