 
import { axioCon } from '../baseUrl/axioCon';
export const RegistrationFun = async(data) => {

 
    const res =data;

    console.log(res,"user----");
    

  await  axioCon.post('https://crescent-city-safety.flutterclone.com/api/register', {
        "firebase_id": null,
        "fcm_token": null,
        "type": 'user',
        "first_name": res.first_name,
        "last_name": res.last_name,
        "phone_number": res.phone_number,
        "email": res.email,
        "password": res.password
    }).then((res) => {
      console.log(res)
      alert(res.data.message)
    
    }).catch((error)=> {
        console.log(error);
    })

}



