import { useReducer } from "react"

const Reducers = () => {

    const defaultGlobalStateTwo = {
        waitingTime: 0
    }

    const reducers = (prevState, actions) => {
        if (actions.key === "updateWaitingTime") {
            return { ...prevState, waitingTime: actions.value }
        }
        else {
            return prevState
        }
    }

    const [globalStateTwo, setGlobalStateTwo] = useReducer(reducers, defaultGlobalStateTwo)

    return { defaultGlobalStateTwo, globalStateTwo, setGlobalStateTwo }

}

export default Reducers