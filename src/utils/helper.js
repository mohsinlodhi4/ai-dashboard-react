import bot1 from '@/assets/chatbots/bot1.png'
import bot2 from '@/assets/chatbots/bot2.png'
import bot3 from '@/assets/chatbots/bot3.png'
import bot4 from '@/assets/chatbots/bot4.png'
import bot5 from '@/assets/chatbots/bot5.png'
import bot6 from '@/assets/chatbots/bot6.png'
import bot7 from '@/assets/chatbots/bot7.png'
import bot8 from '@/assets/chatbots/bot8.png'

export const chatBotIcons = {
    bot1,
    bot2,
    bot3,
    bot4,
    bot5,
    bot6,
    bot7,
    bot8,
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

export const getChatbotIcon = (selected) =>{
    return chatBotIcons[selected];
}

export const getRandomChatbotIcon = (selected) =>{
    let keys = Object.keys(chatBotIcons)
    let newKey = keys[Math.floor(Math.random() * keys.length)]
    if(newKey !== selected) {
        return {name: newKey, image: chatBotIcons[newKey]};
    }
    return getRandomChatbotIcon(selected)
    
}

export const getImageUrl = (chatbot) =>{
    if(chatbot.selectedImage == 'userUploaded' && chatbot.image) {
      return  chatbot.image.includes("blob:") ? chatbot.image : process.env.REACT_APP_API_URL +'/' + chatbot.image
    }

    return getChatbotIcon(chatbot.selectedImage);
  }