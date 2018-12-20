import { fetch } from './http'
import { ipurl } from './env'

const login = (data)=>{
    return fetch('post',ipurl+'/public/?s=admin/Login/login',data);
}
export {
    login
}