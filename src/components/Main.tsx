import { Route, Routes } from "react-router-dom"
import { Blog, Contact, Home, Menu, Post, Pricing, Restaurant } from "../pages"

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
        path="pricing"
        element={<Pricing />}
      />
      <Route
        path="blog"
        element={<Blog />}
      />
      <Route
        path="contact"
        element={<Contact />}
      />
      <Route
        path="restaurant"
        element={<Restaurant />}
      />
      <Route
        path="post"
        element={<Post />}
      />
    </Routes>
  )
}

export default Main