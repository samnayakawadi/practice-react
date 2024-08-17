import { useState } from "react"

const UseState = () => {

    const defaultState = {
        counter: 0,
        name: "Samir",
        menus: {
            currentSelectedMenu: "details",
            menuData: {
                details: {
                    qualifiedName: "Details Page",
                }
            }
        }
    }

    const [state, setState] = useState(defaultState)
    console.log("🚀 ~ UseState ~ state:", state)

    const increaseCount = () => {
        setState(prevState => ({ ...prevState, counter: prevState.counter + 1 }))

        setState(prevState => ({
            ...prevState,
            menus: {
                ...prevState.menus,
                menuData: {
                    ...prevState.menus.menuData,
                    details: {
                        ...prevState.menus.menuData.details,
                        qualifiedName: "This is an Updated Detailed Page"
                    }

                }
            }
        }))
    }

    const decreaseCount = () => {
        setState(prevState => ({
            ...prevState,
            menus: {
                ...prevState.menus,
                menuData: {
                    ...prevState.menus.menuData,
                    details: {
                        ...prevState.menus.menuData.details,
                        qualifiedName: "This is an Updated Detailed Decreased Page"
                    }

                }
            }
        }))
    }

    return (
        <div>
            <span>Counter : {state.counter}</span>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <br />
            <span>Qualified Name : {state.menus.menuData.details.qualifiedName}</span>
        </div>
    )
}

export default UseState