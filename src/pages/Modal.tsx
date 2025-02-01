import { ChangeEvent, useEffect, useState } from "react";
import DrawerDemo from "@/components/Drawer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addProduct, updateProduct } from "@/store/product/productAction";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { Product } from "@/store/product/productType";

const FormSchema = z.object({
  name: z.string().nonempty({ message: "Name is required." }),
  description: z.string().nonempty({ message: "Description is required." }),
  image: z.any(),
});

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  existingProductId?: string;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  existingProductId,
}) => {
  if (!isOpen) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imageFile, setImageFile] = useState<File | undefined>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [preview, setPreview] = useState<string | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { products, loading } = useAppSelector((state) => state.products);

  const userData = products.find((item) => item._id === existingProductId);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: userData?.name || "",
      description: userData?.description || "",
      image: userData?.image || undefined,
    },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (userData?.image) {
      setPreview(userData?.image);
    }
  }, [existingProductId, userData?.image]);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      form.setValue("image", file); // Correctly set the file as image
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);

    // Handle image separately
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      if (userData) {
        // Update the product with FormData (assuming your service expects FormData)
        await dispatch(
          updateProduct({ id: userData._id, updatedData: formData })
        ).unwrap();
        console.log("Product updated successfully!");
      } else {
        // Add the product with FormData
        await dispatch(addProduct(formData)).unwrap();
        console.log("Product added successfully!");
      }
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  console.log(userData?._id);

  return (
    <DrawerDemo
      title={userData ? "Edit Product" : "Create Product"}
      open={isOpen}
      setOpen={onClose}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <input type="file" accept="image/*" onChange={onChangeImage} />
            {preview && <img src={preview} alt="Preview" width="200" />}
            <Button type="submit" className="w-full">
              {existingProductId ? "Update" : "Submit"}
            </Button>
          </form>
        </Form>
      )}
    </DrawerDemo>
  );
};

export default ProductModal;
