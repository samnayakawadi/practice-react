import { useRef } from "react"

const UseRef = () => {

    const demoRef = useRef()

    const printValue = () => {
        console.log("demoRef.current.value", demoRef.current.value)
    }

    return (
        <div>
            <input name="title" type="text" ref={demoRef} />
            <button onClick={printValue}>Click Me</button>
        </div>
    )
}

export default UseRef