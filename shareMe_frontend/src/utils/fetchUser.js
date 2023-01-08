export const fetchUser = () => {
    const userInfo = ('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()

    return userInfo
}