import { ROUTES } from "constants/routes"
import Layout from "./content/Layout/Layout"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./content/Home/Home"
import LogIn from "./content/LogIn/LogIn"

function App() {
  return (
    <BrowserRouter>      
      <Layout>
        <Routes>
          <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<LogIn/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App