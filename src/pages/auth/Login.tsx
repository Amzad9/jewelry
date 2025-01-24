
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/service/api"

const FormSchema = z.object({
  contact: z.string().min(10, {
    message: "contact must be at least 10 Digit.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const Login = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      contact: "",
      password: "",
    },
  })



  async function userLogin(data: z.infer<typeof FormSchema>) {
    try {
     const response = await api.userLogin(data);
      toast({
        title: "Login Successful",
        description: `Welcome back, ${response.data.user.firstName}!`,
      });
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login Failed",
        description: "Please check your contact and password.",
        variant: "destructive",
      });
    }
  }

  return (
<div className="flex justify-center h-screen items-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(userLogin)} className="w-3/12 space-y-6 border border-gray-400 p-6">
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact</FormLabel>
              <FormControl>
                <Input placeholder="Mobile Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

</div>
  )
}

export default Login
