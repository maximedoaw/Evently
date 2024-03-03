import React from 'react'

function page({params} : any) {
  const EventId = params.id
  return (
    <div>
      <h1>Hello World{ EventId }</h1>
    </div>
  )
}

export default page
