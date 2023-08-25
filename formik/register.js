import * as Yup from 'yup';

const initRegister = {
    email:'',
    password:'',
    username: '',
    phone: ''
}

const registerPlaceholder = {
    email:'Ел.пошта',
    password:'Пароль',
    username: "Ім'я",
    phone: 'Номер телефону'
}

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Невірний формат ел.пошти').required("Обов'язково для заповнення"),
    username: Yup.string().min(3, "Невірний формат імені користувача").required("Обов'язково для заповнення"),
    password: Yup.string().min(3, "Невірний формат паролю").required("Обов'язково для заповнення"),
    phone: Yup.string().matches(/^039|067|068|096|097|098|050|066|095|099|063|073|093|091|048\d{9}$/,{message:'Невірний телефон'}).required("Обов'язково для заповнення"),
})

const registerArray = ['email','phone','username','password'];

export {initRegister,registerPlaceholder,RegisterSchema,registerArray};