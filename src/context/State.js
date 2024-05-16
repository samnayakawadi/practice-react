import { useState } from "react"

const State = () => {

    const defaultGlobalStateOne = {
        waitingTime: 0
    }

    const [globalStateOne, setGlobalStateOne] = useState(defaultGlobalStateOne)

    return { defaultGlobalStateOne, globalStateOne, setGlobalStateOne }

}

export default State