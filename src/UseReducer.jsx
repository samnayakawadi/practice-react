import { useEffect } from "react"
import { useReducer } from "react"

const UseReducer = () => {

    const initialState = {
        name: "Samir Nayakawadi",
        city: "Kolhapur",
        menus: {
            currentSelectedMenu: "details",
            menuData: {
                details: {
                    qualifiedName: "Details Page",
                }
            }
        }
    }

    const reducerFunction = (prevState, actions) => {
        if (actions.key === "name") {
            return { ...prevState, name: actions.value }
        }
        else if (actions.key === "city") {
            return { ...prevState, city: actions.value }
        }
        else if (actions.key === "qualifiedName") {
            return {
                ...prevState,
                menus: {
                    ...prevState.menus,
                    menuData: {
                        ...prevState.menus.menuData,
                        details: {
                            ...prevState.menus.menuData.details,
                            qualifiedName: actions.value
                        }

                    }
                }
            }
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

    const updateFunction = () => {
        setState({ key: "qualifiedName", value: "This is an Updated Detailed Page" })
    }

    const decreaseFunction = () => {
        setState({ key: "qualifiedName", value: "This is an Updated Detailed Decreased Page" })
    }

    return (
        <div>
            State.name : {state.name}
            <br />
            <button onClick={updateFunction}>Update Qualified Name</button>
            <button onClick={decreaseFunction}>Decrease Qualified Name</button>
            \<span>Qualified Name from useReducer : {state.menus.menuData.details.qualifiedName}</span>
        </div>
    )
}

export default UseReducer