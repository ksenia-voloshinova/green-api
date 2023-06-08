
export const getDataLS = () => {
    const data = localStorage.getItem('loginDetails');
    const loginData = data ? JSON.parse(data)  : {};
    return {
        loginData,
    }
    
}
