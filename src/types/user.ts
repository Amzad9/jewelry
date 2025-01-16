export interface UserLoginData {
  contact: string;
  password: string;
}
export interface UserLoginResponse {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    email: string;
    contact: string;
    createdAt: string;
    updatedAt: string;
  };
  token: string;
  message: string;
}