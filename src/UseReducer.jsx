import { useEffect } from "react"
import { useReducer } from "react"

const UseReducer = () => {

    const initialState = {
        name: "Samir Nayakawadi",
        city: "Kolhapur"
    }

    const reducerFunction = (prevState, actions) => {
        if (actions.key === "name") {
            return { ...prevState, name: actions.value }
        }
        else if (actions.key === "city") {
            return { ...prevState, city: actions.value }
        }
        else {
            return prevState
        }
    }

    const [state, setState] = useReducer(reducerFunction, initialState)

    useEffect(() => {
        setState({ key: "name", value: "Indrajeet Kandhare" })
    }, [])

    useEffect(() => {
        console.log("state", state)
    }, [state])

    return (
        <div>State.name : {state.name}</div>
    )
}

export default UseReducer