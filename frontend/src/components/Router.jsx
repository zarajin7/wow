import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Authentication from "../pages/Authentication";
import Login from "./Login";
function Router(){
    return(
      
         <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
          <Layout>
                <Home/>
                </Layout>
            }
          />



<Route
            path="/auth"
            element={
              <Layout>
                <Authentication />
              </Layout>
            }
          />

<Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          </Routes>
          </BrowserRouter>
        
    )
}

export default Router