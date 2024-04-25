import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import SideDrawer from '../components/sideBar/SideDrawer'
import Register from '../pages/Register'
import Login from '../pages/Login'
import PrivateComponent from './PrivatComponent'
import ResetPassword from '../pages/ResetPassword'
import {Routes,Route} from 'react-router-dom'
import ForgotPassword from '../pages/ForgotPassword'
import {RouterPathName} from './AllRoutes'

function AllRouter() {
  return (
    <div>
 <Routes>
        <Route path={RouterPathName.login} element={<Login />} />
        <Route path={RouterPathName.Register} element={<Register />} />
        <Route path={RouterPathName.ForgotPassword} element={<ForgotPassword />} />
        <Route path={RouterPathName.ResetPassword} element={<ResetPassword />} />
        <Route element={<PrivateComponent />}>
          <Route path={RouterPathName.Dashboard} element={<Dashboard />} />
          <Route path={RouterPathName.SideDrawer} element={<SideDrawer />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AllRouter