import { memo } from "react"

const Child = () => {

    console.log("Child Re-Rendered")

    return (
        <div>Child</div>
    )
}

export default memo(Child)