import * as Yup from 'yup';

const initLogin = {
    email:'',
    password:'',
}

const loginPlaceholder = {
    email:'Ел.пошта',
    password:'Пароль'
}

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Невірний формат ел.пошти').required("Обов'язково для заповнення"),
    password: Yup.string().min(3, "Невірний формат паролю").required("Обов'язково для заповнення"),
})

const loginArray = ['email','password'];

export {initLogin,loginPlaceholder,LoginSchema,loginArray};