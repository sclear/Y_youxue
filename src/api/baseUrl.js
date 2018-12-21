import { fetch } from './http'
import { ipurl } from './env'


class api  {
    login(data) {
        return fetch('post',`${ipurl}/public/?s=admin/Login/login`,data)
    }
}



export default new api

