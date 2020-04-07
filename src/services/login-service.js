import { globalVars } from '../global';

class LoginService {

    login(usr, pass){
        
      return fetch(
            `http://${globalVars.server}/auth/signin`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: usr,
                    password: pass
                })
            }
        )

    }

}

export default (new LoginService());