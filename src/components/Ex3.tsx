import React, { useState } from 'react'

export default function Ex3() {
    const [coler,setColer]= useState<string>('black')
    const handleClick =()=>{
        coler==="black"? setColer('red'):setColer("black")
    }
  return (
    <div>
      <p style={{color: coler}}>tiêu đề</p>
      <button onClick={handleClick}>thay đổi màu</button>
    </div>
  )
}
