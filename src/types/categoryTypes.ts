export interface CategoryType {
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