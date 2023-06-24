import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useState } from 'react';
const PhoneNumber = ({ register }) => {

    const [userPhoneNumber, setUserPhoneNumber] = useState('');

    const handleOnChange = (value) => {
        setUserPhoneNumber(e.target.value)
        console.log(value)
    }

    return (
        <>
            <PhoneInput
                placeholder="Enter phone number"
                value={userPhoneNumber}
                onChange={handleOnChange} {...register} 
                country="india" />
           
        </>
    );
}



export default PhoneNumber;