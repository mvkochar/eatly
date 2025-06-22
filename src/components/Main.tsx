import { Route, Routes } from "react-router-dom"
import { Blog, Contact, Home, Menu } from "../pages"

const Main = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="menu"
        element={<Menu />}
      />
      <Route
        path="blog"
        element={<Blog />}
      />
      <Route
        path="contact"
        element={<Contact />}
      />
    </Routes>
  )
}

export default Main