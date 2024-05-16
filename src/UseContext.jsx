import { useContext, useEffect } from "react"
import { GlobalContext } from "./context/GlobalContext"

const UseContext = () => {

    const {
        defaultGlobalStateOne,
        globalStateOne,
        setGlobalStateOne,
        defaultGlobalStateTwo,
        globalStateTwo,
        setGlobalStateTwo } = useContext(GlobalContext)

    useEffect(() => {
        console.log("defaultGlobalStateOne", defaultGlobalStateOne)
        console.log("defaultGlobalStateTwo", defaultGlobalStateTwo)
    })

    useEffect(() => {
        setGlobalStateOne(prevState => {
            return { ...prevState, waitingTime: 1 }
        })

        setGlobalStateTwo({ key: "updateWaitingTime", value: 1 })
    }, [])

    useEffect(() => {
        console.log("globalStateOne", globalStateOne)
        console.log("globalStateTwo", globalStateTwo)
    }, [globalStateOne, globalStateTwo])

    return (
        <div>UseContext</div>
    )
}

export default UseContext