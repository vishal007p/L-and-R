

 
import { axioCon } from "../baseUrl/axioCon";


export const SendVerify = async(data) => {


    const res = data;

    await axioCon.post('https://crescent-city-safety.flutterclone.com/api/sendVerificationcode', {

        "email":res.email

    }).then((res)=> {
        console.log(res)
        alert("Registration SuccessFully")

    }).catch((error)=> {
        console.log(error);
    })

}


