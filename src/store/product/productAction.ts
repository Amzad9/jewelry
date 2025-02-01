import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./productType";
import service from "@/service/api/http";

// Async thunks with TypeScript
export const fetchProducts = createAsyncThunk<Product[], void>(
    'products/fetchProduct', // Use a more descriptive action type
    async () => {
        // Type the response to match the actual API structure
        const response = await service.get<{
            message: string,
            payload: Product[]
        }>('/category');

        // Return the payload array, not the entire response
        return response.data.payload;
    }
);

export const addProduct = createAsyncThunk<Product, FormData>(
    'products/addProduct',
    async (formData) => {
        const response = await service.post<{
            message: string,
            payload: Product
        }>('/category', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data.payload;
    }
);


export const updateProduct = createAsyncThunk<
  Product,
  { id: string; updatedData: FormData }
>('products/updateProduct', async ({ id, updatedData }) => {
  const response = await service.patch<Product>(`/category/${id}`, updatedData);
  return response.data;
});


export const deleteProduct = createAsyncThunk<string, string>(
    'products/deleteProduct',
    async (id: string) => {
        await service.delete(`/category/${id}`);
        return id;
    }
);
