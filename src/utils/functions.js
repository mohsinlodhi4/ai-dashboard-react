import { toast } from 'react-toastify';
import { store } from '@/redux/store'
import { removeUser } from '@/redux/authReducer/authSlice';

export const notifySuccess = (msg, position) => {
    toast.success(msg, { position: position });
}

export const notifyError = (msg, position) => {
    toast.error(msg, { position: position });
}

export const logout = () => {
    localStorage.removeItem("user");
    store.dispatch(removeUser())
    notifySuccess("Logged out successfully.")
    return;
}


export const isProtocol = (url) => {
    return url.startsWith("http://") || url.startsWith("https://") ?
        url
        : `https://${url}`;
};

export const isValidUrl = (inputUrl = null, acceptOnly = [], notAllow = []) => {
    inputUrl = inputUrl.toLowerCase();
    let validate = inputUrl.match(/^(http|https)?(\:\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^!=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])+$/gmi);

    let blocked = notAllow.some(el => inputUrl.includes(el))
    let accepted = acceptOnly.some(el => {
        return inputUrl?.toLowerCase() == el?.toLowerCase()
    })

    let res = (validate && accepted && !blocked)
    console.log(res, validate, accepted, blocked)

    if (res) return true;
    return false
}