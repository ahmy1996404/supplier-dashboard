import headers from '../functions/header'

export function login(axios,credential) {
    return new Promise((res,rej)=>{

        axios.post(process.env.WEBSITE_URL+'/oauth/token',credential)
            .then(response=>{
                res(response.data);
            })
            .catch(error=>{
                rej(error.response.data);
            });
    });
}
export function getAuthUserInfo(axios) {
    return new Promise((res,rej)=>{
        axios.get(process.env.WEBSITE_URL+'/api/suppliers/getUserInfo',headers()).then(
            response=>{
                res(response.data);
            })
            .catch(error=>{
                rej(error);
            });
    });
}
export function checkIfSupplier(axios) {
    return new Promise((res,rej)=>{
        axios.get(process.env.WEBSITE_URL+'/api/suppliers/validateUser',headers()).then(
            response=>{
                if (response.data.authorized){
                    res(true);
                }
                else {
                    rej(false);
                }
            })
            .catch(error=>{
                rej(error);
            });
    });
}



export function getLocalUser() {
    const userStr = localStorage.getItem("user");
    if(!userStr) {
        return null;
    }
    return JSON.parse(userStr);
}