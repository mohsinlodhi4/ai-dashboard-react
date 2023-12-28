import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const GuestMiddleware = ({children}) => {
    const user = useSelector(store => store.auth.user);
    // const fallbackRoute = user && user.role?.name == 'admin' ? '/admin/users' : '/user/index'; // will replace this with permissions obj
    const fallbackRoute = '/dashboard';

  return !user ? children : <Navigate to={fallbackRoute} />
}

export default GuestMiddleware
