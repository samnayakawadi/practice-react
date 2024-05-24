import { Route, Routes } from "react-router"
import Contact from "./elements/Contact"
import Home from "./elements/Home"

const Routing = () => {
    return (
        <div>
            DashboardRoutes

            <Routes>
                <Route path="" element={<Home />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Routing