import { useEffect, useState } from 'react';

const UseEffect = () => {

    const [state, setState] = useState(0)

    // Gets called when the component is rendered each
    useEffect(() => {
        console.log("default useEffect Called")
    })

    // Gets called when the component is rendered first time
    useEffect(() => {
        console.log("useEffect with empty depedency Called")
    }, [])

    // Third type is with depedency
    useEffect(() => {
        console.log("State Changed")
    }, [state])

    const updateState = () => {
        setState(1)
    }

    return (
        <div>
            <span>useEffect</span>
            <span>State : {state}</span>
            <button onClick={updateState}>Update State</button>
        </div>
    )
}

export default UseEffect