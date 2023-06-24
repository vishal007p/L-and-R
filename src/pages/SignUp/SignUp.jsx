import { Box, Button } from "@mui/material";
import InputField from "../../components/FormField/InputField";
import PhoneNumber from "../../components/FormField/PhoneNumber";
import { useForm } from "react-hook-form";
import { RegistrationFun } from "../../api/RegistrationFun";



const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        RegistrationFun(data)
        const userdetails = localStorage.setItem("userdetails", JSON.stringify(data))
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ width: '40%', margin: '160px auto', background: 'white', height: '450px', borderRadius: '10px', boxShadow: '0px 0px 6px 0px', padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <InputField placeholder="First Name" type="text" register={{ ...register("first_name") }} />
                    <InputField placeholder="Last Name" type="text" register={{ ...register("last_name") }} />
                    <PhoneNumber register={{ ...register("phone_number") }} />
                    <InputField placeholder="Email" type="email" register={{ ...register("email") }} />
                    <InputField placeholder="Password" type="password" register={{ ...register("password") }} />
                    <Button type="submit">SignUp</Button>
                </Box>
            </form>

        </>


    );
}
export default SignUp;