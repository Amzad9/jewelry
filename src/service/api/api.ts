import { AxiosResponse } from "axios";
import service from "./http";
import {UserLoginData, UserLoginResponse} from '@/types/user'

export default {
    userLogin(data: UserLoginData): Promise<AxiosResponse<UserLoginResponse>> {
        return service.post('adminLogin', data)
    }
}