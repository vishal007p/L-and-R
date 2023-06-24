
import { axioCon } from "../baseUrl/axioCon";

export const Login = async (data) => {


    const res = data;



    console.log(data, "hii")


    await axioCon.post('/login', {

        "fcm_token": null,
        "email": `${res?.email}`,
        "password": `${res?.password}`

    }).then((res) => {

        console.log(res)
        alert(res.data.message)

    }).catch((error) => {
        console.log(error);
    })


}






