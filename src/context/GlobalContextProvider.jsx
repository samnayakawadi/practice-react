import { GlobalContext } from "./GlobalContext"
import Reducers from "./Reducers"
import State from "./State"

const GlobalContextProvider = (props) => {

    const { defaultGlobalStateOne, globalStateOne, setGlobalStateOne } = State()
    const { defaultGlobalStateTwo, globalStateTwo, setGlobalStateTwo } = Reducers()

    return (
        <div>
            <GlobalContext.Provider value={{
                defaultGlobalStateOne,
                globalStateOne,
                setGlobalStateOne,
                defaultGlobalStateTwo,
                globalStateTwo,
                setGlobalStateTwo
            }}>
                {/* eslint-disable-next-line react/prop-types */}
                {props.children}
            </GlobalContext.Provider>
        </div>
    )
}

export default GlobalContextProvider