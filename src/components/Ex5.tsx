import React, { useState } from 'react'

export default function Ex5() {
    const [kissMe, setKissme] = useState<string>('')
     const loveMe=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setKissme(e.target.value);
     }
    return (
    <div>
      <input onChange={loveMe} type="text" />
      <p>{kissMe}</p>
    </div>
  )
}
