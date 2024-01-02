import {  toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

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

// export const notifyError = (msg, title=Content.errorTitle,) => {
//     return displayToast('error', title, msg, {autoClose: 3000, pauseOnHover: false,});
//   }
export const notifyError = (msg, position) => {
    return toast(msg,{ position: position});
  }