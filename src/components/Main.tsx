import { Route, Routes } from "react-router-dom"
import { Contact, Home } from "../pages"

const Main = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="contact"
        element={<Contact />}
      />
    </Routes>
  )
}

export default Main