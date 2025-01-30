"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/store/auth/authThunks";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { selectAuthError, selectAuthStatus } from "@/store/auth/authSelectors";
import { resetAuthStatus } from "@/store/auth/authSlice";
import { Loader2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Validation schema using Zod
const loginSchema = z.object({
  contact: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number is too long")
    .regex(/^\d+$/, "Invalid mobile number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Type for form values
type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const status = useAppSelector(selectAuthStatus);
  const error = useAppSelector(selectAuthError);
  const isAuth = sessionStorage.getItem("token");
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  // Get the previous location or default to home
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data: LoginFormValues) => {
    dispatch(resetAuthStatus());
    try {
      const response = await dispatch(login(data)).unwrap();
      if (response) {
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [isAuth]);

  return (
    <div className="flex justify-center h-screen items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-3/12 space-y-6 border border-gray-200 p-6 shadow-md bg-white rounded-lg"
      >
        {/* Contact Field */}
        <div>
          <Input
            type="text"
            placeholder="Mobile Number"
            {...register("contact")}
          />
          {errors.contact && (
            <p className="text-red-500 text-sm">{errors.contact.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Error message from API */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit Button */}
        <Button type="submit" disabled={isSubmitting || status === "loading"}>
          {isSubmitting || status === "loading" ? (
            <>
              <Loader2 className="animate-spin mr-2" />
              Please wait
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </div>
  );
}

// components/auth/LoginForm.tsx
// components/auth/LoginForm.tsx
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Loader2 } from "lucide-react";
// // import { loginUser } from "@/store/auth/authActions";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { useLocation, useNavigate } from "react-router-dom";
// import { login } from "@/store/auth/authThunks";

// const LoginForm = () => {
//   const [contact, setContact] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useAppDispatch();
//   const { loading, error } = useAppSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/dashboard";

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await dispatch(login({ contact, password })).unwrap();
//       if (response) {
//         navigate(from, { replace: true });
//       }
//     } catch (err) {
//       console.error("Login failed:", err);
//       // Error is already handled in Redux, so we don't need to update state manually
//     }
//   };

//   return (
//     <div className="mx-auto max-w-md space-y-6">
//       <div className="space-y-2 text-center">
//         <h1 className="text-3xl font-bold">Login</h1>
//         <p className="text-gray-500 dark:text-gray-400">
//           Enter your email and password to access your account
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {error && (
//           <Alert variant="destructive">
//             <AlertDescription>{error}</AlertDescription>
//           </Alert>
//         )}

//         <div className="space-y-2">
//           <Label htmlFor="contact">Email</Label>
//           <Input
//             id="contact"
//             type="number" // Changed from 'number' to 'email'
//             placeholder="Email Address"
//             required
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="password">Password</Label>
//           <Input
//             id="password"
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <Button className="w-full" type="submit" disabled={loading}>
//           {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//           {loading ? "Signing in..." : "Sign In"}
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
