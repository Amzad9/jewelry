export interface Category {
    name?: string,
    description?: string,
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