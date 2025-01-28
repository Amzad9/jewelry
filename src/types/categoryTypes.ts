export interface CategoryType {
    _id?: string;
    name?: string,
    description?: string,
    image?: File
}
export interface Categoryresponse {
    data: {
        _id: string;
        name: string,
        description: string,
        image: string;
    },
    message: string;
}