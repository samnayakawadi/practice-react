/* eslint-disable react-refresh/only-export-components */
import { memo } from "react"

const Child = () => {
    console.log("Child Re-rendered")
    return (
        <div>Child</div>
    )
}

export default memo(Child)