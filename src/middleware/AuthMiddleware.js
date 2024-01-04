import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AuthMiddleware = ({checkIfCanProceed, fallbackUrl, allowedRoles ,children}) => {
    const navigate =  useNavigate();
    const user = useSelector(store => store.auth.user);
    // const permissionFailRoute = user && user.role?.name == 'admin' ? '/admin/users' : '/user/index'; // will replace this with permissions obj
    const permissionFailRoute = '/dashboard';
    
    // This useEffect will manage roles and permission
    // useEffect(()=>{
    // console.log('user',user);
    //   if (user && allowedRoles && !allowedRoles.includes(user?.role?.name)) {
    //     navigate(permissionFailRoute);
    //   }
    // },[user]);

    useEffect(()=>{
      if(checkIfCanProceed) {
        if(!checkIfCanProceed(user)) {
          navigate(fallbackUrl);
        }
      }

    }, []);

  return user?.token ? children : <Navigate to="/login" />
}

export default AuthMiddleware
