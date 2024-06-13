import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Authentication from "../pages/Authentication";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
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

        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
