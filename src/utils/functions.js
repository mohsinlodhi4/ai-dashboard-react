import {toast} from 'react-toastify';
import {store} from '@/redux/store'
import { removeUser } from '@/redux/authReducer/authSlice';

export const notifySuccess = (msg) =>{
    toast.success(msg);
}

export const notifyError = (msg) =>{
    toast.error(msg);
}

export const logout = () =>{
    localStorage.removeItem("user");
    store.dispatch(removeUser())
    notifySuccess("Logged out successfully.")
    return;
}