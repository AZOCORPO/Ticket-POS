export default function (setting = '', action) {

    if (action.type == 'setsetting') {
        return action.myset

    } else {
        return setting
    }
}