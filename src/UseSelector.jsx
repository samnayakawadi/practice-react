import { useSelector } from "react-redux"
import UseDispatch from "./UseDispatch"

const UseSelector = () => {

    const globalState = useSelector(prevState => prevState.globalState)

    console.log("globalState", globalState)

    const useDispatchHandlers = UseDispatch()

    return (
        <div>
            useSelector with useDispatch

            <input name="waitingTime" onChange={useDispatchHandlers.updateGlobalState}  />
        </div>
    )
}

export default UseSelector