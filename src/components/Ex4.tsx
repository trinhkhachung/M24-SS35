import React, { useState } from 'react'

export default function Ex4() {
    const handleClick = () => {
        setShow(!show)
    }
    const [show,setShow]= useState<boolean>(false)
  return (
    <div>

          <button onClick={handleClick}>cc</button>
          {show? <p>tiêu đề văn vở</p> :""}
    </div>
  )
}
