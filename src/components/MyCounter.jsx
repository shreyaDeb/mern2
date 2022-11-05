import React, { useState } from "react"

const MyCounter = (props) =>{
    const { adder, startNum } = props

    const [countState, setCountState] = useState(startNum)

    const setter = () => {
        setCountState(countState + adder)
    }

    return(
        <div>
            <h2>{ countState }</h2>
            <button onClick={ setter }>+{ adder }</button>
        </div>
    )
}

export default MyCounter