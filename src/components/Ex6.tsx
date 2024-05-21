import React, { useState } from 'react'

export default function Ex6() {
    const [gotTroll, setGotTroll] = useState<number>(0)
    const trollVn=()=>{
        setGotTroll(gotTroll + 1)
    }
  return (
    <div>
      <button onClick={trollVn}></button>
    </div>
  )
}
