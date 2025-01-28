import { AxiosResponse } from "axios";
import service from "./http";
import { UserLoginData, UserLoginResponse } from '@/types/user'
import {Categoryresponse } from '@/types/categoryTypes'
export default {
    userLogin(data: UserLoginData): Promise<AxiosResponse<UserLoginResponse>> {
        return service.post('adminLogin', data)
    },
    addCategory(data: FormData): Promise<AxiosResponse<Categoryresponse>> {
        return service.post('category', data,{
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    },
    getCategories() {
        return service.get('category')
    },
    deleteCategoriesById(id: string) {
        return service.delete(`category/${id}`)
    },
    getSubCategories() {
        return service.get('subcategory')
    },
    deleteSubCategoriesById(id: string) {
        return service.delete(`subcategory/${id}`)
    },
    getProducts() {
        return service.get('product')
    }
}