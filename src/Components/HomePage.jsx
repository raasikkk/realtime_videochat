// import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const HomePage = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/room/${input}`)
    }
    return (
        <div>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter your name"
             />
            <button onClick={handleClick}>Join</button>
        </div>
    )
}

export default HomePage
