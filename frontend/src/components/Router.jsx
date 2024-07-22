import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Authentication from "../pages/Authentication";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DonationPart from "../pages/Donationpart";
import Donations from "../pages/Donations";
import Activitiess from "../pages/Activitess";
import Admindash from "./Admindash";
import Donordash from "./Donordash";

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

        <Route
          path="/donate"
          element={
            <Layout>
              <DonationPart />
            </Layout>
          }
        />

        <Route
          path="/don"
          element={
            <Layout>
              <Donations />
            </Layout>
          }
        />

        <Route
          path="/active"
          element={
            <Layout>
              <Activitiess />
            </Layout>
          }
        />

<Route
          path="/dash"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />


<Route
          path="/admin"
          element={
            <Layout>
              <Admindash />
            </Layout>
          }
        />


<Route
          path="/ddash"
          element={
            <Layout>
              <Donordash />
            </Layout>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}

export default Router;
