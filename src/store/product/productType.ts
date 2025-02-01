export interface Product {
    _id: string;
    name: string,
    description: string,
    image: File
}

export interface ProductData {
    products: Product[];
    loading: boolean;
    error: string | null;
}

