import { ToastAndroid} from 'react-native';

export const floatToMoney = (number,decimal=2) =>{
    return number.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export const showToast = (message) =>{
    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.LONG,
        ToastAndroid.TOP
    );
}