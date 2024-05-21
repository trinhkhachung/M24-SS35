import React, { useState } from 'react'

export default function Ex1() {
    const [name,setName] =useState<string>("Huwng")
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

