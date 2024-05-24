import { useDispatch } from "react-redux"
import { globalActions } from './redux/global/globalSlice';

const UseDispatch = () => {

    const dispatch = useDispatch()

    const updateGlobalState = (e) => {
        dispatch(globalActions.updateWaitingTime(e.target.value))
    }

    const useDispatchHandlers = {
        updateGlobalState
    }

    return useDispatchHandlers;
}

export default UseDispatch