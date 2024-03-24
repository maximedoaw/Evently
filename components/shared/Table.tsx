
import  React from 'react';
import {  fields,fakeDataArray } from '@/app/helper/helper';
import { db } from '@/app/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Event } from '@/types';
import { get_event } from '@/app/helper/action';
import Image from "next/image"
import AlertDialog from './Dialog';

let doclist : any[] = []
export default async function BasicTable() {
   const props : any[] = await get_event()
 
//    const querySnapchot = await getDocs(collection(db,'events'))
//     querySnapchot.forEach((doc) => {
//      let data = doc.data() 
    // console.log("Hentai" ,data)
//      doclist.push(data)
//    });
//    console.log(doclist)
  

  
  return (
    <div className="min-h-screen ">
    <div className="p-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="table-auto w-full">
                  <thead className="bg-blue-500 text-white shadow-lg">
                      <tr>
                        {
                            fields.map((field) =>{
                                return(
                                    <th className="py-3 px-4 text-left">{field}</th>                      
                                )
                            })
                        }
                      </tr>
                  </thead>
                  <tbody>
                    
                        {
                            props.map((prop,idx) =>{
                                return(
                                <tr className="hover:bg-gray-100">
                                    <td className="px-4 py-3 border">
                                        {fakeDataArray[idx].Contact}
                                    </td>
                                    <td className="px-4 py-3 border">{fakeDataArray[idx].Date}</td>
                                    <td className="px-4 py-3 border">{fakeDataArray[idx].Description}</td>
                                    <td className="px-4 py-3 border">{fakeDataArray[idx].Email}</td>
                                    <td className="px-4 py-3 border">{fakeDataArray[idx].Site}</td>
                                    <td className="px-4 py-3 border">{fakeDataArray[idx].category}</td>
                                    <td className="px-4 py-3 border">{fakeDataArray[idx].EventName}</td>
                                    <td className="px-4 py-3 border">
                                        <Image  
                                        src={prop} 
                                        alt="..."
                                        width={250}
                                        height={250}
                                         />
                                    </td>
                                    <td className="px-4 py-3 border text-center">
                                        <button 
                                        className="hover:bg-gray-300 p-1 px-2 font-bold rounded-lg focus:outline-none"
                                        >
                                           &#8943;
                                        </button>
                                    </td>
                                </tr>
                                    )
                                })
                         }
                         {
                            
                         }

                  </tbody>
              </table>
            </div>
        </div>
    </div>
  );
}
