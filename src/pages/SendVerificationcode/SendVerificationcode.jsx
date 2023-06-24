import { Box, Button } from "@mui/material";
import InputField from "../../components/FormField/InputField";
import { useForm } from "react-hook-form";
import { SendVerify } from "../../api/SendVerify";
const SendVerificationcode = () => {


    const {register,handleSubmit,formState:{errors}} =useForm();
    const onSubmit = (data) =>{
        console.log(data)
        SendVerify(data)
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>


        <Box sx={{ width: '40%', margin: '160px auto', background: 'white', height: '100%', borderRadius: '10px', boxShadow: '0px 0px 6px 0px', padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }} >

            <InputField placeholder="Enter you email" type="email" register={...register('email')}  />
            <Button type="submit">SignIn</Button>

        </Box>
        </form>

    );
}



export default SendVerificationcode;