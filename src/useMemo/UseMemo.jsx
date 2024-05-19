import { useMemo, useState } from "react"
import Child from "./Child"

const UseMemo = () => {

    console.log("Parent Re-Rendered")

    const [count, setCount] = useState(0)

    // Try this first, As it will get executed on each render
    // const computationalHandler = () => {

    //     console.log("computationalHandler Calculated")

    //     let value = 0
    //     for (let i = 0; i <= 10000; i++) {
    //         value = i;
    //     }

    //     return value
    // }

    // This will not get executed on each render. It will be calculated once the component is rendered or the dependency is changed
    const computationalHandler = useMemo(() => {

        console.log("computationalHandler Calculated")

        let value = 0
        for (let i = 0; i <= 10000; i++) {
            value = i;
        }

        return value
    }, [])
    // You can add count to the dependency array (It will start re-calculating this function)

    return (
        <div>
            <br />
            -------------UseMemo-------------------
            <br />
            {/* You can't call as a function, You need to treat it as a variable */}
            {/* Value : {computationalHandler()} */} 
            Value : {computationalHandler}
            Count : {count}
            <button onClick={() => { setCount(prevState => prevState + 1) }}>Increment Count</button>
            <Child />
        </div>
    )
}

export default UseMemo