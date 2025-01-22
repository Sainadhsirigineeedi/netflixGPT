import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptresults from './Gptresults'

const Gptpage = () => {
  return (
    <div
    className="h-screen bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_medium.jpg')",
    }}
    >
        <Gptsearchbar></Gptsearchbar>
        <Gptresults></Gptresults>
    </div>
  )
}

export default Gptpage