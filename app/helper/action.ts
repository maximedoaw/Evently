import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage"
import { db, storage } from "../firebase"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { v4 } from "uuid"
import { useRouter } from "next/router"
export default interface Event{
    Contact : number,
    Date : string,
    Description:string,
    Email: string,
    Site:string,
    EventName : string ,
    category: string,
    ImageUpload : any
}
const listEvent : any[] = []
// export default interface ListEvt {
//   image : string,
//   events : Event 
// }

export const add_event = async(event : Event)  =>{
        try {

            
            const imageref = event.ImageUpload === null ? null :  await ref(storage,`images/${Image?.name + v4()}`)
            if(imageref){
              uploadBytes(imageref,event.ImageUpload).then(() => {
                const addevt =  addDoc(collection(db,"event"),{
                  Contact:event.Contact,
                  Date:event.Date,
                  Description:event.Description,
                  Email:event.Email,
                  Lieu:event.Site,
                  Name:event.EventName,
                  category:event.category
                })
                alert('Event add with successfully !!!')
                window.location.href = "/"
              }).catch(() => {
                alert('Error this image was not upload')
              })
            }
          } catch (error : any) {
           await alert('A random error was happened')
          }
}

export const get_event = async()  =>{
  let count = 0
  //get images from the storage of firebase

  const imageRef = ref(storage,"images")
  let  imagesList = await listAll(imageRef)
  let  imagesURL = imagesList.items.map((item) => {
    getDownloadURL(item).then((url) => {
      listEvent.push([url])
    })
  })
  
  
  // get collection from the firestore of firebase
  const querySnapshot = await getDocs(collection(db,"event"))
  querySnapshot.forEach((doc)  =>{
    let data = JSON.stringify(doc.data())
    listEvent[count].push(data)
    count++
  })
  return listEvent
}
