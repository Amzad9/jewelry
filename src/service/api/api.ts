import { AxiosResponse } from "axios";
import service from "./http";
import { UserLoginData, UserLoginResponse } from '@/types/user'
import {Category, Categoryresponse} from '@/types/categoryTypes'
export default {
    userLogin(data: UserLoginData): Promise<AxiosResponse<UserLoginResponse>> {
        return service.post('adminLogin', data)
    },
    addcategory(data: Category): Promise<AxiosResponse<Categoryresponse>> {
        return service.post('category', data)
    }
}