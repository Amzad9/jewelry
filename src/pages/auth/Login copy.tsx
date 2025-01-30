
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { useNavigate } from "react-router-dom"

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
  const navigation = useNavigate()



  async function userLogin(data: z.infer<typeof FormSchema>) {
    try {
      const response = await api.userLogin(data);
      console.log("response", response)
      if (response.status === 200 && response.data.token !== undefined) {
        sessionStorage.setItem("token", response.data.token);
        navigation('/')
      } else {
        navigation('login')
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(userLogin)} className="md:w-3/12 space-y-6 border border-gray-200 p-6 shadow-md">
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
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default Login
