import { useCallback, useState } from "react"
import Child from "./Child"

const UseCallback = () => {

    console.log("parent re-rendered")

    const [increment, setIncrement] = useState(1)
    const [count, setCount] = useState(0)

    // Try this handler first. Child will re-render
    // const updateStateHandler = () => {
    //     setState(prevState => prevState + 1)
    // }

    // This will not be executed immedietly after the dependency changes. It will be evaludated only. Executed on after function call.
    const updateStateHandler = useCallback(() => {
        console.log("updateStateHandler executed")
        setCount(prevState => prevState + increment)
    }, [increment])

    // Try to update the increment, So that the dependency of updateStateHandler will be triggered and new reference will be created for updateStateHandler
    const updateIncrement = () => {
        setIncrement(prevState => prevState + 1)
    }

    return (
        <div>
            <h2>increment : {increment}</h2>
            <h2>count : {count}</h2>
            <button onClick={updateStateHandler}>Update Count</button>
            <button onClick={updateIncrement}>Update Increment</button>
            <Child updateStateHandler={updateStateHandler} /> 
            {/* memo is used at Child */}
        </div>
    )

}

export default UseCallback