import * as Yup from "yup";

const LoginSchema = Yup.object({
    userName : Yup.string().required("Admin Insert User Name to Login"),
    password : Yup.string().required("Admin Insert Password "),
})

export default LoginSchema