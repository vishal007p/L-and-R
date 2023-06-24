import { Box, Button } from "@mui/material";
import InputField from "../../components/FormField/InputField";
import { useForm } from "react-hook-form";
import { Login } from "../../api/Login";
 


const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit =async (data) => {
        console.log(data)                                                                                                       
     let res =await   Login(data)  
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ width: '40%', margin: '160px auto', background: 'white', height: '100%', borderRadius: '10px', boxShadow: '0px 0px 6px 0px', padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
                <InputField placeholder="Enter Email" type="mail" register={...register("email")} />
                <InputField placeholder="Enter Password" type="mail" register={...register("password")} />
                <Button type="submit">SignIn</Button>

            </Box>
        </form>
    );
}



export default SignIn;