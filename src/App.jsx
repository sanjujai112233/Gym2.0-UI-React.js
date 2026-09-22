import { useState } from 'react'
import './App.css'
import GymInfo from './components/gymInfo';
import Counter from './components/counter';
import Login from './pages/Login';
import Register from './pages/Register';
import ApiLoader from './pages/ApiLoader';
import ThemeSwitcher from './pages/ThemeSwitcher';
import Stopwatch from './pages/StopWatch';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MemberDetails from './pages/MemberDetails';
//import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './layout/DashboardLayout';
import ProtectedRoute from './routes/ProtectedRoutes';


function App() {
  return (
    // <>
    // {/* <GymInfo/> */}
    // <Stopwatch/>
    // </>
    <>
      {/* <Navbar /> */}
      <Routes>

        {/* <Route
          path="/"
          element={<Login />}
        /> */}
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute >
              <DashboardLayout />
            </ProtectedRoute>
          }>

          <Route
            index
            element={<Dashboard />}
          />
          <Route
            path="register"
            element={<Register />}
          />
          <Route
            path="stopwatch"
            element={<Stopwatch />}
          ></Route>



        </Route>

        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/stopwatch"
          element={<Stopwatch />}
        ></Route>
        <Route
          path="/member/:id"
          element={<MemberDetails />}
        >

        </Route>

      </Routes>
    </>
  );
}

export default App


