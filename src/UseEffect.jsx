import { useEffect } from 'react';

const UseEffect = () => {

    // Gets called when the component is rendered first time
    useEffect(() => {
        console.log("useEffect with empty depedency Called")
    }, [])

    // Gets called when the component is rendered each
    useEffect(() => {
        console.log("default useEffect Called")
    })

    // Third type is with depedency

    return (
        <div>useEffect</div>
    )
}

export default UseEffect