import { ROUTES } from "constants/routes"
import Layout from "./content/Layout/Layout"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./content/Home/Home"
import LogIn from "./content/LogIn/LogIn"
import Users from "./content/Users/Users"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<LogIn />} />
          <Route path={ROUTES.NOT_FOUND} element="The page is still under development" />
        </Route>
        <Route path={ROUTES.USERS} element={<Users />} />
        <Route path={ROUTES.NOT_FOUND} element="The page is still under development" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
