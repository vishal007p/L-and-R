import { Box, InputBase } from '@mui/material';
const InputField = ({ placeholder, type,register }) => {
    return (

        <Box  sx={{width:'100%',margin:'10px auto'}}>
            <InputBase placeholder={placeholder} type={type} sx={{width:'100%',border:'2px solid #EDEDED', padding:'10px',borderRadius:'10px'}} {...register} />
        </Box>




    );
}


export default InputField;